import React from "react";
import amazon from "../assets/amazon.webp";
import Clevertap from "../assets/Clevertap.webp";
import Hubspot from "../assets/Hubspot.webp";
import Jet_Brains from "../assets/Jet_Brains.webp";
import Mixpanel from "../assets/Mixpanel.webp";
import Cur8_Logo from "../assets/Cur8_Logo.webp";
import Z1_N from "../assets/Z1_N.webp";
import Exfin from "../assets/Exfin.webp";
import Blaash from "../assets/Blaash_Logo.png";

const companies = [
  {
    id: 1,
    name: "AWS",
    Services: "Cloud Services",
    About:
      "Amazon Web Services provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.",
    images: amazon,
  },
  {
    id: 2,
    name: "CleverTap",
    Services: "CRM",
    About:
      "CleverTap is an omnichannel customer engagement and user retention platform that helps brands create individualized experiences, drive user engagement.",
    images: Clevertap,
  },
  {
    id: 3,
    name: "Mixpanel",
    Services: "Analytics",
    About:
      "Mixpanel is a business analytics service company. It tracks user interactions with web and mobile applications and provides tools for targeted communication with them.",
    images: Mixpanel,
  },
  {
    id: 4,
    name: "HubSpot",
    Services: "CRM",
    About:
      "HubSpot is a CRM platform with all the software, integrations, and resources you need to connect marketing, sales, content management, and customer service.",
      images: Hubspot,  },
  {
    id: 5,
    name: "JetBrains",
    Services: "Productivity",
    About:
      "JetBrains is a global software company specializing in the creation of intelligent, productivity-enhancing tools for software developers and teams.",
      images: Jet_Brains,  },
  {
    id: 6,
    name: "CUR8",
    Services: "Growth",
    About:
      "CUR8 is India's first revenue-tech firm working exclusively with 120+ leading startups & enterprises to help them maximize revenue by creating the best revenue teams.",
      images: Cur8_Logo,  },
  {
    id: 7,
    name: "Z1N Capital",
    Services: "Treasury",
    About:
      "Z1N helps rapidly growing companies resolve treasury management challenges with a complete, 360°tech-enabled platform.",
      images: Z1_N,  },
  {
    id: 8,
    name: "Exfin Solutions",
    Services: "Accounting",
    About:
      "Exfin is a professional services company that provides Accountancy & Taxation services to it's clients.",
      images: Exfin,  },
  {
    id: 9,
    name: "Blaash",
    Services: "Video Commerce",
    About:
      "Blaash provides solutions to amplify website traffic engagement, conversion and retention via the use of shoppable videos, stories and live commerce.",
      images: Blaash,  },
];

function Partnership() {
  return (
    <div>
      <section className="mt-5 bg-[#F9F5FE] w-lvw h-[16rem] flex flex-col justify-center">
        <div className="flex justify-center">
          <p className="text-5xl font-extrabold ">
            Benefits of working with us
          </p>
        </div>
        <div className="flex justify-center mt-8 ">
          <a
            href="#Startups"
            className="pt-2 pb-2 pl-7 pr-7 border-2 text-xl border-blue-700 text-blue-700 rounded-md"
          >
            Startsups
          </a>
          <a
            href="#Investors"
            className="pt-2 pb-2 pl-7 pr-7  border-2 ml-8 text-xl  border-blue-700 text-blue-700 rounded-md"
          >
            Investors
          </a>
        </div>
      </section>
      <section
        id="Startups"
        className="w-lvw h-[18rem] flex flex-col justify-center text-center"
      >
        <p className="text-4xl font-extrabold ">Startups</p>
        <p className="text-2xl">
          Exclusive benefits when you raise through Tyke
        </p>
      </section>
      <section className="flex justify-center ml-8 mr-8 ">
        <div className=" grid grid-cols-3 gap-8 ">
          {companies.map((data, index) => (
            <div className="rounded-lg border-2 border-gray-100 p-7">
              <img
                src={data.images}
                alt="image"
                className="float-right mr-[5.5rem] w-[40%]"
              />
              <div className="flex flex-col ">
                <span key={index} className="mt-3">
                  {data.name}
                </span>
                <span className="">{data.Services}</span>
              </div>

              <div className="mt-4">{data.About}</div>
            </div>
          ))}
        </div>
      </section>
      <section
        id="Investors"
        className="w-lvw h-[18rem] flex flex-col justify-center text-center"
      >
        <p className="text-4xl font-extrabold ">Investors</p>
        <p className="text-2xl">
          We're working to give you additional benefits, apart from all the
          investment opportunities. Stay tuned!
        </p>
      </section>
    </div>
  );
}

export default Partnership;
