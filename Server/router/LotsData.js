import express from "express";
import { Userlots } from "../models/lotsUser.js";
import { Money } from "../models/wallet.js";
import { Registraion } from "../models/comany_registration.js";
import { profileSquare } from "../models/square.js";
import { Userkyc } from "../models/kyc.js";

const router = express.Router();

router.put("/", async (req, res) => {
  const companyId = req.body.id;
  const email = req.body.email;
  const companyName = req.body.companyName;
  const lots = req.body.lots;
  const price = req.body.price;
  const companyEmail = req.body.companyEmail;
  const kycMatch = await Userkyc.findOne({ email: email });

  try {
    if (kycMatch.Status === "true") {
      try {
        // console.log(lots);
        // console.log(companyId);
        // console.log(email);

        // Check if a document with the same companyId and email already exists
        const moneyData = await Money.findOne({ email: email });
        // console.log(moneyData);
        const isMatch = await Userlots.findOne({
          companyId: companyId,
          email: email,
        });
        // console.log(isMatch, "ooo");
        const companylotsData = await Registraion.findOne({
          email: companyEmail,
          _id: companyId,
        });
        // console.log(email);
        // console.log(companylotsData, "ppp");
        const newlotsEntryCD = companylotsData.lots - lots;
        // console.log("lll");

        if (moneyData.money >= price) {
          let newMoney = moneyData.money - price;
          if (isMatch) {
            const newPrice = isMatch.amountInvested + price;
            const newLots = isMatch.lots + lots;
            await Userlots.findOneAndUpdate(
              { companyId: companyId, email: email },
              { lots: newLots, amountInvested: newPrice },
              { new: true }
            );
            await Money.findOneAndUpdate(
              { email: email },
              { money: newMoney },
              { new: true }
            );
            await Registraion.findOneAndUpdate(
              { email: companyEmail, _id: companyId },
              { lots: newlotsEntryCD },
              { new: true }
            );
            return res.status(200).json({ message: "Updated" });
          } else {
            // console.log("Creating...");
            const moneyData = await Money.findOne({ email: email });
            if (moneyData.money >= price) {
              let newMoney = moneyData.money - price;

              const newLotEntry = new Userlots({
                companyId,
                companyName,
                email,
                lots,
                amountInvested: price,
              });
              await newLotEntry.save();
              await Money.findOneAndUpdate(
                { email: email },
                { money: newMoney }
              );
              await Registraion.findOneAndUpdate(
                { email: companyEmail, _id: companyId },
                { lots: newlotsEntryCD }
              );
            } else {
              return res.status(201).json({
                message: "insufficent Money",
              });
            }

            return res.status(200).json({ message: "Updated" });
          }
        } else {
          return res.status(201).json({
            message: "insufficent Money",
          });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
      }
    } else {
      res.status(200).json({ message: "please do kyc befor investing..." });
    }
  } catch (error) {
    res.status(200).json({ message: "please do kyc befor investing..." });
  }
});

router.get("/getLotData", async (req, res) => {
  try {
    const email = req.query.email;
    const isMatch = await Userlots.find({ email: email });
    if (isMatch) {
      return res.status(200).json({ message: "sucess", result: isMatch });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.put("/squareLots", async (req, res) => {
  try {
    const companyId = req.body.companyId;
    const price = req.body.amount;
    const lots = req.body.lots;
    const companyName = req.body.companyName;
    const sellEmail = req.body.sellEmail;
    const email = req.body.email;
    console.log(sellEmail, email, "0000", lots, price);
    const sellEmailMatch = await Userlots.findOne({
      email: sellEmail,
      companyId: companyId,
    });
    const isMatch = await Userlots.findOne({
      companyId: companyId,
      email: email,
    });
    const moneyData = await Money.findOne({ email: email });
    const sellUserMoney = await Money.findOneAndUpdate({ email: sellEmail });
    let newMoney = moneyData.money - price;
    let newSellerMoney = sellUserMoney.money + price;

    //seller lots minus
    const sellerLots = sellEmailMatch.lots - lots;
    // console.log(moneyData.money);
    if (moneyData.money >= price) {
      if (isMatch) {
        //user buy
        const newLots = isMatch.lots + lots;
        const newAmountInvested = isMatch.amountInvested + price;
        await Userlots.findOneAndUpdate(
          { companyId: companyId, email: email },
          { lots: newLots, amountInvested: newAmountInvested }
        );
        await Money.findOneAndUpdate({ email: email }, { money: newMoney });
        // selled user

        await profileSquare.findOneAndDelete({
          companyId: companyId,
          email: sellEmail,
        });
        const sellEmailUpdatedamountInvested =
          sellEmailMatch.amountInvested - lots * 10000;
        // console.log(sellEmailUpdatedamountInvested);
        await Userlots.findOneAndUpdate(
          { companyId: companyId, email: sellEmail },
          { lots: sellerLots, amountInvested: sellEmailUpdatedamountInvested }
        );
        await Money.findOneAndUpdate(
          { email: sellEmail },
          { money: newSellerMoney }
        );
      } else {
        // console.log("Creating...");
        if (moneyData.money >= price) {
          let newMoney = moneyData.money - price;
          const newLotEntry = new Userlots({
            companyId,
            companyName,
            email,
            lots,
            price,
            amountInvested: price, // Set initial amount invested
          });

          await newLotEntry.save();

          await Money.findOneAndUpdate({ email: email }, { money: newMoney });
          await profileSquare.findOneAndDelete({
            companyId: companyId,
            email: sellEmail,
          });
          //update sellUser Data
          const sellEmailUpdatedamountInvested =
            sellEmailMatch.amountInvested - lots * 10000;
          // console.log(sellEmailUpdatedamountInvested);
          await Userlots.findOneAndUpdate(
            { companyId: companyId, email: sellEmail },
            { lots: sellerLots, amountInvested: sellEmailUpdatedamountInvested }
          );
          await Money.findOneAndUpdate(
            { email: sellEmail },
            { money: newSellerMoney }
          );
        }
      }
    }
    // return res.json()
  } catch (err) {
    console.log(err);
  }
});

export default router;
