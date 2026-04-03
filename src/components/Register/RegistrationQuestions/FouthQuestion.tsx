import Template from "../QuestionTemplate/Template";
function FouthQuestion() {
  const subTopic = (
    <span className="flex flex-col pb-9">
      <h5 className="font-normal text-[1.4rem] text-gray-100 mt-5">
        What type of account do you want to open?
      </h5>
      <h5 className="text-gray-100 font-sans mt-1.5">
        Your account can be set up as an
      </h5>
    </span>
  );
  const content = (
    <>
      <span className="block pt-5"></span>
      <span className="border-[0.3px] border-gray-400 rounded-md p-5">
        <span className="flex gap-6 h-full">
          <i className="fa fa-user text-[1.5rem] font-normal text-gray-400 self-center"></i>
          <span className="flex flex-col">
            <h5 className="text-[1.2rem ] font-semibold text-gray-100 font-sans">
              Individual
            </h5>
            <h5 className="text-gray-300 font-sans">
              Invest on your own behalf. This does not include single person
              business entities such as a sole-proprietorships or single-owner
              LLCs
            </h5>
          </span>
        </span>
      </span>
      <span className="border-[0.3px] border-gray-400 rounded-md p-5">
        <span className="flex gap-6 h-full">
          <i className="fa fa-users text-[1.5rem]  text-gray-400 self-center"></i>
          <span className="flex flex-col">
            <h5 className="text-[1.2rem ] font-semibold text-gray-100 font-sans">
              Joint
            </h5>
            <h5 className="text-gray-300 font-sans">
              Invest funds on behalf of you and another person together as
              individuals, usually your spouse. This does not include business
              entities or trusts
            </h5>
          </span>
        </span>
      </span>
      <span className="border-[0.3px] border-gray-400 rounded-md p-5">
        <span className="flex gap-6 h-full">
          <i className="fa fa-piggy-bank text-[1.5rem] text-gray-400 self-center"></i>
          <span className="flex flex-col">
            <h5 className="text-[1.2rem ] font-semibold text-gray-100 font-sans">
              Retirement Account
            </h5>
            <h5 className="text-gray-300 font-sans">
              Invest on behalf of your tax-advantaged individual retirement
              account
            </h5>
          </span>
        </span>
      </span>
      <span className="border-[0.3px] border-gray-400 rounded-md p-5">
        <span className="flex gap-6 h-full">
          <i className="fa fa-building text-[1.5rem] font-normal text-gray-400 self-center"></i>
          <span className="flex flex-col">
            <h5 className="text-[1.2rem ] font-semibold text-gray-100 font-sans">
              Entity
            </h5>
            <h5 className="text-gray-300 font-sans">
              Invest on behalf of a legal entity. Examples include trusts,
              estates, single member LLCs, etc
            </h5>
          </span>
        </span>
      </span>
      <span className="w-full h-9 flex bg-[#4b4bdd] justify-center items-center rounded-md">
        <h5 className="text-[1rem] font-bold text-gray-100">NEXT</h5>
      </span>
      <span className="flex justify-center">
        <h5 className="font-bold text-[1rem] text-[#060685]">GO BACK</h5>
      </span>
      <span className="block pb-5"></span>
    </>
  );
  return (
    <>
      <Template rightContact={subTopic} leftContact={content} />
    </>
  );
}
export default FouthQuestion;
