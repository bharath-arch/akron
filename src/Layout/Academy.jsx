import React from "react";

function Academy() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="mt-5">
        <p className="text-2xl md:text-4xl font-semibold text-center">
          How to Calculate Financial Ratios?
        </p>
        <div className="mt-5 text-lg">
          <p>
            Most financial ratios can be calculated using numbers found on a
            company's financial statements, specifically the balance sheet and
            income statement. You can find these statements on the company's
            investor relations section of their website or financial websites.
            Each ratio has a specific formula, and a quick search online can
            provide the exact calculation for any ratio you're interested in.
          </p>
        </div>

        <div className="mt-5 font-medium">
          <p>Decoding Financial Ratios: Understanding what they tell you</p>
        </div>

        <div className="mt-5">
          <p>
            Financial ratios are like little financial translators, taking
            complex financial information and condensing it into easy-to-understand
            metrics. Here's a breakdown of the ones you mentioned:
          </p>
          <div className="ml-4 mt-5">
            <ol className="list-decimal">
              <li className="font-medium">Profitability Ratios:</li>
              <ul className="ml-6">
                <li>Earnings per Share (EPS): This ratio tells you how much profit a company makes per share of outstanding stock (Net Income / Shares Outstanding). A higher EPS indicates a more profitable company.</li>
                <li>Return on Equity Ratio (ROE): This ratio measures how effectively a company uses shareholder equity to generate profits (Net Income / Shareholders' Equity). A higher ROE indicates better use of shareholder money.</li>
                <li>Profit Margin: This ratio shows the portion of revenue remaining as profit after accounting for expenses (Net Income / Revenue). A higher profit margin indicates a company is efficient at generating profit from its sales.</li>
              </ul>
              <li className="font-medium">Valuation Ratios:</li>
              <ul className="ml-6">
                <li>Price-to-Earnings Ratio (P/E Ratio): This compares a company's stock price to its EPS (Share Price / EPS). It tells you how much investors are willing to pay for each dollar of a company's earnings. A lower P/E ratio can suggest a company might be undervalued.</li>
                <li>Price-to-Book Ratio (P/B Ratio): This compares a company's market value (Share Price x Outstanding Shares) to its book value (Total Assets - Total Liabilities). A lower P/B ratio might suggest a company is undervalued.</li>
              </ul>
              <li className="font-medium">Liquidity Ratios:</li>
              <ul className="ml-6">
                <li>Current Ratio: This measures a company's ability to pay off short-term debts with its current assets (Current Assets / Current Liabilities). A higher current ratio indicates a stronger ability to meet short-term obligations.</li>
                <li>Quick Ratio: This is a more stringent test of liquidity, excluding inventory from current assets as it may be harder to sell quickly (Current Assets - Inventory / Current Liabilities). A higher quick ratio indicates even stronger short-term financial health.</li>
              </ul>
              <li className="font-medium">Efficiency Ratio:</li>
              <ul className="ml-6">
                <li>PS Ratio (Price-to-Sales Ratio): This compares a company's market value (Share Price x Outstanding Shares) to its revenue (Total Sales). A lower P/S ratio might suggest a company is undervalued relative to its sales.</li>
              </ul>
              <li className="font-medium">Debt & Coverage Ratios:</li>
              <ul className="ml-6">
                <li>Debt-to-Equity Ratio: This measures how much debt a company has compared to its shareholders' equity (Total Debt / Shareholders' Equity). A lower debt-to-equity ratio indicates a more financially conservative company.</li>
                <li>Interest Coverage Ratio: This measures a company's ability to cover its interest expenses with its earnings before interest and taxes (EBIT / Interest Expense). A higher interest coverage ratio indicates a stronger ability to meet debt obligations.</li>
              </ul>
              <li className="font-medium">Other Ratios:</li>
              <ul className="ml-6">
                <li>Dividend Yield: This shows the percentage return on a company's stock from dividends paid per share in a year (Annual Dividend per Share / Share Price). A higher dividend yield indicates a larger portion of profits returned to shareholders.</li>
                <li>Savings Ratio: This is typically used in personal finance, not company analysis. It measures the portion of income saved after expenses (Savings / Disposable Income).</li>
              </ul>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academy;
