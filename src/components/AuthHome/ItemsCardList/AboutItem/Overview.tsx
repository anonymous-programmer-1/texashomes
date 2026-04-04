function Overview() {
  return (
    <div className="flex p-5 justify-center ">
      <div className="w-full h-fit p-5 flex flex-col gap-4 border-[1px] border-gray-400 bg-[#0a0a14ee] rounded-md">
        <span className="text-gray-300 lg:text-[1.3rem] text-[1.1rem]">
          <h5>Deal Summary</h5>
        </span>
        <span className="text-gray-200 flex flex-col gap-3 ">
          <h5>
            This private fund placement is intended to be offered and sold only
            to U.S. persons. The deal page is intended for distribution to, and
            for use by, persons in the U.S. only, and is not intended for
            distribution to or use by any person in any other jurisdiction.
            Please review the Confidential Private Placement Memorandum for full
            offering disclosures including Risk Factors which can be found in
            the data room for this offering (see tab above).
          </h5>
          <h5>
            *See 'How much can I expect to earn?' below for important
            information about the calculation of the expected return.
          </h5>
        </span>
        <span className="text-gray-300 lg:text-[1.3rem] pb-2 border-b-[1px] border-gray-400 text-[1.1rem]">
          <h5>Frequently Asked Questions</h5>
        </span>
        <span className="text-gray-200 flex flex-col gap-3 mt-4">
          <h5>
            <strong className="mr-2 block">
              What type of deals will go into this Fund?
            </strong>
            This TBF Fund I will invest in short-term, off balance sheet
            financing options to established small and medium-sized businesses
            ("SMBs") who need financing but may be chronically under-served due
            to their size or jurisdiction. Underlying borrowers are typically
            manufacturers, traders, and dealers. The Manager, TB Fund Manager,
            LLC, identifies potential clients with operations in the United
            States, Europe, India, United Arab Emirates, and countries in the
            APAC and Middle East and North Africa region ("MENA"). See
            'Investment Strategy' below for more information.
          </h5>
          <h5>
            <strong className="mr-2 block">
              How diversified will the portfolio be?
            </strong>
            The Fund has provided capital to approximately 21 cients as of March
            17, 2026. Once it has achieved its anticipated scale, the Fund
            intends to maintain a portfolio consisting of no more than 25% from
            the same cient, and no more than 25% of assets of the same asset
            class. However, these target amounts may be exceeded from time to
            time, particularty earlier in the Fund's life, and higher
            concentrations may exist in the asset base.
          </h5>
        </span>
        <span className="text-gray-200 flex flex-col gap-3 mt-4">
          <h5>
            <strong className="mr-2 block">
              How much can I expect to earn?
            </strong>
            The 20.0% IRR target return is based on the returns modelled and
            anticipated by the Manager, assuming 2:1 debt-to-equity leverage at
            the Fund and a spread of 10.0% on the portion of the portfolio
            funded with the leverage. The Manager has received a term sheet from
            a bank lender with closing expected by end of May 2026. A model
            produced by the Manager suggests an unlevered return of
            approximately 12.3% in the absence of the leverage. That said, TB
            Fund 1 successfully distributed profits to investors, achieving a
            return of 13.80% in 2024 and 13.90% as of mid-year 2025, surpassing
            the modelled unlevered returns of 12.3%. Please review the
            projections model in the data room for more information.
          </h5>
          <h5>
            <strong className="mr-2 block">
              How and when do I get my principal investment back?
            </strong>
            The Fund is a perpetual-life fund so liquidity is determined either
            by redemption request or discretionary wind down by the Manager.
            Investors can make redemption requests on the 1st annual anniversary
            of the first issuance of membership interests to the holder (or
            starting after the 3rd annual anniversary to avoid redemption
            fees/discounts). Redemptions must be coordinated through Percent's
            Investor Relations team. Requests to redeem can be made to
            support@percent.com.
          </h5>
        </span>
      </div>
    </div>
  );
}
export default Overview;
