function End() {
  return (
    <div className="w-full pl-2 pr-2">
      <div className="w-full bg-[#1b1b1b] rounded-2xl pl-12 pr-12">
        <div className="flex flex-wrap pt-10 justify-stretch gap-5 border-b-2  pb-12">
          <span className=" flex flex-col lg:w-40 w-32">
            <h5 className="text-gray-100 text-[1.2rem]">
              Sign up for Houses Insight
            </h5>
            <span className="flex w-full mt-4">
              <input
                className="w-full rounded-bl-md rounded-tl-md pl-1"
                placeholder="Email Address"
              ></input>
              <span className="flex justify-center items-center w-[30%] bg-[#060685] ">
                <h5 className="text-lg text-gray-100">{">"}</h5>
              </span>
            </span>
          </span>
          <span className="flex flex-col gap-1 text-gray-100 font-serif ml-auto lg:text-[1.2rem] text-[1rem]">
            <h5>Invest</h5>
            <h5>Getting Stated</h5>
            <h5>What is Private Credit?</h5>
            <h5>Our Asset Classes</h5>
            <h5>Blended Notes</h5>
            <h5>Separetely Managed Accounts</h5>
          </span>
          <span className="flex flex-col gap-1 text-gray-100 font-serif  lg:text-[1.2rem] text-[1rem]">
            <h5>About</h5>
            <h5>About Us</h5>
            <h5>Carreers</h5>
            <h5>News</h5>
            <h5>Media Kit</h5>
            <h5>Contact us</h5>
          </span>
          <span className="flex flex-col gap-1 text-gray-100 font-serif  lg:text-[1.2rem] text-[1rem]">
            <h5>Resources</h5>
            <h5>Blog</h5>
            <h5>Events & Downloads</h5>
            <h5>FAQ</h5>
            <h5>Glossary</h5>
          </span>
          <span className="flex flex-col gap-1 text-gray-100 font-serif  lg:text-[1.2rem] text-[1rem]">
            <h5>Ralse Capital</h5>
            <h5>Asset-Bassed-Financing</h5>
          </span>
        </div>
        <div className="w-full mt-8">
          <div className="flex flex-col flex-wrap gap-7">
            <span className="flex flex-wrap justify-center gap-3  text-gray-100 font-serif  lg:text-[1.2rem] text-[1rem]">
              <span className="flex gap-4">
                <h5>Term of Use</h5>
                <h5>Privacy Policy</h5>
              </span>
              <span className="flex text-gray-100 font-serif gap-3 lg:text-[1.2rem] text-[1rem] ml-auto">
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
              </span>
            </span>
            <span className="flex justify-center gap-4 text-gray-100 font-serif  lg:text-[1.2rem] text-[1rem]">
              <h5>
                Eligibility: This promotion is open exclusively to new
                Individual Investor accounts (natural persons) of legal
                residents of the United States. Institutional, entity,
                retirement, and Bespoke Blended Note (BBN) accounts are not
                eligible. Limit one (1) promotional bonus per natural person,
                even if that person maintains or opens multiple Texas Homes
                accounts. No repeat investors-only one account per investor is
                eligible for the promotion.
              </h5>
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-5 pb-8">
          <span className="block text-gray-100 font-serif  lg:text-[1.2rem] text-[1rem]">
            <h5>READ FULL DISCLOSURE</h5>
          </span>
        </div>
      </div>
    </div>
  );
}
export default End;
