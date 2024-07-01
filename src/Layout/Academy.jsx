import React from "react";

function Academy() {
  return (
    <div className="bg-white  px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mt-5">
          <p className="text-2xl md:text-4xl font-semibold text-center">
            How to Calculate Financial Ratios?
          </p>
          <div className="mt-5 text-lg text-gray-700">
            <p>
              Most financial ratios can be calculated using numbers found on a
              company's financial statements, specifically the balance sheet and
              income statement. You can find these statements on the company's
              investor relations section of their website or financial websites.
              Each ratio has a specific formula, and a quick search online can
              provide the exact calculation for any ratio you're interested in.
            </p>
          </div>

          <div className="mt-8 ">
            <p className="font-medium text-gray-700">
              Decoding Financial Ratios: Understanding what they tell you
            </p>
            <div
              className="mt-4 transform transition duration-500 
                                hover:scale-110"
            >
              <div className="bg-gray-100 rounded-lg p-4 shadow-md">
                <p className="font-medium">Profitability Ratios:</p>
                <ul className="mt-2 ml-4">
                  <li className="mt-2">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold">Earnings per Share (EPS)</p>
                      <p className="text-sm text-gray-700">
                        This ratio tells you how much profit a company makes per
                        share of outstanding stock (Net Income / Shares
                        Outstanding). A higher EPS indicates a more profitable
                        company.
                      </p>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold">
                        Return on Equity Ratio (ROE)
                      </p>
                      <p className="text-sm text-gray-700">
                        This ratio measures how effectively a company uses
                        shareholder equity to generate profits (Net Income /
                        Shareholders' Equity). A higher ROE indicates better use
                        of shareholder money.
                      </p>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold">Profit Margin</p>
                      <p className="text-sm text-gray-700">
                        This ratio shows the portion of revenue remaining as
                        profit after accounting for expenses (Net Income /
                        Revenue). A higher profit margin indicates a company is
                        efficient at generating profit from its sales.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 transform transition duration-500 
                                hover:scale-110">
              <div className="bg-gray-100 rounded-lg p-4 shadow-md">
                <p className="font-medium">Valuation Ratios:</p>
                <ul className="mt-2 ml-4">
                  <li className="mt-2">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold">
                        Price-to-Earnings Ratio (P/E Ratio)
                      </p>
                      <p className="text-sm text-gray-700">
                        This compares a company's stock price to its EPS (Share
                        Price / EPS). It tells you how much investors are
                        willing to pay for each dollar of a company's earnings.
                        A lower P/E ratio can suggest a company might be
                        undervalued.
                      </p>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold">
                        Price-to-Book Ratio (P/B Ratio)
                      </p>
                      <p className="text-sm text-gray-700">
                        This compares a company's market value (Share Price x
                        Outstanding Shares) to its book value (Total Assets -
                        Total Liabilities). A lower P/B ratio might suggest a
                        company is undervalued.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 transform transition duration-500 
                                hover:scale-110">
              <div className="bg-gray-100 rounded-lg p-4 shadow-md">
                <p className="font-medium">Liquidity Ratios:</p>
                <ul className="mt-2 ml-4">
                  <li className="mt-2">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold">Current Ratio</p>
                      <p className="text-sm text-gray-700">
                        This measures a company's ability to pay off short-term
                        debts with its current assets (Current Assets / Current
                        Liabilities). A higher current ratio indicates a
                        stronger ability to meet short-term obligations.
                      </p>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold">Quick Ratio</p>
                      <p className="text-sm text-gray-700">
                        This is a more stringent test of liquidity, excluding
                        inventory from current assets as it may be harder to
                        sell quickly (Current Assets - Inventory / Current
                        Liabilities). A higher quick ratio indicates even
                        stronger short-term financial health.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 transform transition duration-500 
                                hover:scale-110">
              <div className="bg-gray-100 rounded-lg p-4 shadow-md ">
                <p className="font-medium">Efficiency Ratio:</p>
                <ul className="mt-2 ml-4">
                  <li className="mt-2">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold">
                        PS Ratio (Price-to-Sales Ratio)
                      </p>
                      <p className="text-sm text-gray-700">
                        This compares a company's market value (Share Price x
                        Outstanding Shares) to its revenue (Total Sales). A
                        lower P/S ratio might suggest a company is undervalued
                        relative to its sales.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 transform transition duration-500 
                                hover:scale-110">
              <div className="bg-gray-100 rounded-lg p-4 shadow-md">
                <p className="font-medium">Debt & Coverage Ratios:</p>
                <ul className="mt-2 ml-4">
                  <li className="mt-2">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold">Debt-to-Equity Ratio</p>
                      <p className="text-sm text-gray-700">
                        This measures how much debt a company has compared to
                        its shareholders' equity (Total Debt / Shareholders'
                        Equity). A lower debt-to-equity ratio indicates a more
                        financially conservative company.
                      </p>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold">Interest Coverage Ratio</p>
                      <p className="text-sm text-gray-700">
                        This measures a company's ability to cover its interest
                        expenses with its earnings before interest and taxes
                        (EBIT / Interest Expense). A higher interest coverage
                        ratio indicates a stronger ability to meet debt
                        obligations.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 transform transition duration-500 
                                hover:scale-110">
              <div className="bg-gray-100 rounded-lg p-4 shadow-md">
                <p className="font-medium">Other Ratios:</p>
                <ul className="mt-2 ml-4">
                  <li className="mt-2">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold">Dividend Yield</p>
                      <p className="text-sm text-gray-700">
                        This shows the percentage return on a company's stock
                        from dividends paid per share in a year (Annual Dividend
                        per Share / Share Price). A higher dividend yield
                        indicates a larger portion of profits returned to
                        shareholders.
                      </p>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold">Savings Ratio</p>
                      <p className="text-sm text-gray-700">
                        This is typically used in personal finance, not company
                        analysis. It measures the portion of income saved after
                        expenses (Savings / Disposable Income).
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academy;
