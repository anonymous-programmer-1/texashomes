import Template from "../QuestionTemplate/Template";
function FirstQuestion() {
  const subTopic = (
    <span className="flex flex-col pb-9">
      <h5 className="font-normal text-[1.3rem] text-gray-100 mt-5">
        Are you an individual or institutional investor?
      </h5>
      <h5 className="text-gray-100 font-sans mt-1.5">
        You can invest as an individual or on behalf of an institution.
      </h5>
    </span>
  );
  const content = (
    <>
      <span className="block pt-10"></span>
      <span className="border-[0.3px] border-gray-400 rounded-md p-5">
        <span className="flex gap-6 h-full">
          <i className="fa fa-user text-[1.5rem] font-normal text-gray-400 self-center"></i>
          <span className="flex flex-col">
            <h5 className="text-[1.2rem ] font-semibold text-gray-100 font-sans">
              Individual
            </h5>
            <h5 className="text-gray-300 font-sans">
              Invest on your own behalf. This includes individual, joint, or
              retirement accounts as well as trusts or single-person business
              entities
            </h5>
          </span>
        </span>
      </span>
      <span className="border-[0.3px] border-gray-400 rounded-md p-5">
        <span className="flex gap-6 h-full">
          <i className="fa fa-building text-[1.5rem] font-normal text-gray-400 self-center"></i>
          <span className="flex flex-col">
            <h5 className="text-[1.2rem ] font-semibold text-gray-100 font-sans">
              Institution
            </h5>
            <h5 className="text-gray-300 font-sans">
              Invest on behalf of a legal entity. Examples include corporations,
              family offices, funds, registered investment advisors, etc
            </h5>
          </span>
        </span>
      </span>
      <span className="w-full h-9 flex bg-[#4b4bdd] justify-center items-center rounded-md">
        <h5 className="text-[1rem] font-bold text-gray-100">NEXT</h5>
      </span>
      <span className="block pb-10"></span>
    </>
  );
  return (
    <>
      <Template rightContact={subTopic} leftContact={content} />
    </>
  );
}
export default FirstQuestion;
