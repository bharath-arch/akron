import React from "react";

function Academy() {
  return (
    <div>
      <div className="mt-5 ml-6 mr-6 ">
        <p className="flex  justify-center font-semibold text-3xl">
          How to Calculate Financial Ratios?
        </p>
        <p className="mt-5">
          {" "}
          Most financial ratios can be calculated using numbers found on a
          company's financial statements, specifically the balance sheet and
          income statement. You can find these statements on the company's
          investor relations section of their website or financial websites.
          Each ratio has a specific formula, and a quick search online can
          provide the exact calculation for any ratio you're interested in.{" "}
        </p>

        <p className="mt-5 font-medium">
          Decoding Financial Ratios: Understanding what they tell you
        </p>

        <p className="mt-5">
          Financial ratios are like little financial translators, taking complex
          financial information and condensing it into easy-to-understand
          metrics. Here's a breakdown of the ones you mentioned:
        </p>
        <div className="ml-10 mt-7">
          <ol className="list-decimal">
            <li className="font-medium">Profitability Ratios:</li>
            <p className="mt-2">
              Earnings per Share (EPS):** This ratio tells you how much profit a
              company makes per share of outstanding stock (Net Income / Shares
              Outstanding). A higher EPS indicates a more profitable company.
            </p>
            <p className="mt-2">
              Return on Equity Ratio (ROE):** This ratio measures how
              effectively a company uses shareholder equity to generate profits
              (Net Income / Shareholders' Equity). A higher ROE indicates better
              use of shareholder money.
            </p>
            <p className="mt-2">
              Profit Margin:** This ratio shows the portion of revenue remaining
              as profit after accounting for expenses (Net Income / Revenue). A
              higher profit margin indicates a company is efficient at
              generating profit from its sales.
            </p>
            <li className="font-medium"> Valuation Ratios:</li>
            <p className="mt-2">
              Price-to-Earnings Ratio (P/E Ratio):** This compares a company's
              stock price to its EPS (Share Price / EPS). It tells you how much
              investors are willing to pay for each dollar of a company's
              earnings. A lower P/E ratio can suggest a company might be
              undervalued.
            </p>
            <p className="mt-2">
              Price-to-Book Ratio (P/B Ratio):** This compares a company's
              market value (Share Price x Outstanding Shares) to its book value
              (Total Assets - Total Liabilities). A lower P/B ratio might
              suggest a company is undervalued.
            </p>
            <li className="font-medium">Liquidity Ratios:</li>
            <p className="mt-2">
              Current Ratio:** This measures a company's ability to pay off
              short-term debts with its current assets (Current Assets / Current
              Liabilities). A higher current ratio indicates a stronger ability
              to meet short-term obligations.
            </p>
            <p className="mt-2">
              Quick Ratio:** This is a more stringent test of liquidity,
              excluding inventory from current assets as it may be harder to
              sell quickly (Current Assets - Inventory / Current Liabilities). A
              higher quick ratio indicates even stronger short-term financial
              health.
            </p>
            <li className="font-medium">Efficiency Ratio:</li>
            <p className="mt-2">
              PS Ratio (Price-to-Sales Ratio):** This compares a company's
              market value (Share Price x Outstanding Shares) to its revenue
              (Total Sales). A lower P/S ratio might suggest a company is
              undervalued relative to its sales.
            </p>
            <li className="font-medium">Debt & Coverage Ratios:</li>
            <p className="mt-2">
              Debt-to-Equity Ratio:** This measures how much debt a company has
              compared to its shareholders' equity (Total Debt / Shareholders'
              Equity). A lower debt-to-equity ratio indicates a more financially
              conservative company.
            </p>
            <p className="mt-2"> 
              Interest Coverage Ratio:** This measures a company's ability to
              cover its interest expenses with its earnings before interest and
              taxes (EBIT / Interest Expense). A higher interest coverage ratio
              indicates a stronger ability to meet debt obligations.
            </p>
            <li className="font-medium">Other Ratios:</li>
            <p className="mt-2">
              Dividend Yield:** This shows the percentage return on a company's
              stock from dividends paid per share in a year (Annual Dividend per
              Share / Share Price). A higher dividend yield indicates a larger
              portion of profits returned to shareholders.
            </p>
            <p className="mt-2">
              Savings Ratio:** This is typically used in personal finance, not
              company analysis. It measures the portion of income saved after
              expenses (Savings / Disposable Income).
            </p>
          </ol>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Academy;
