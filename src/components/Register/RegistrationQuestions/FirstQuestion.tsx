import Template from "../QuestionTemplate/Template";
import { useRef, useState, type Dispatch, type SetStateAction } from "react";
type QuestionProp = {
  setPageFunc: Dispatch<SetStateAction<number>>;
};

function FirstQuestion(prop: QuestionProp) {
  const setQuestionPage = prop.setPageFunc;
  const firstOption = useRef(null);
  const firstOptionIcon = useRef(null);
  const secondOption = useRef(null);
  const secondOptionIcon = useRef(null);
  const [nextPage, setNextPage] = useState(false);

  function option(value: number) {
    switch (value) {
      case 1:
        secondOption.current.style.borderColor = "#999898";
        secondOptionIcon.current.style.color = "#999898";
        firstOption.current.style.borderColor = "#070797";
        firstOptionIcon.current.style.color = "#070797";
        setNextPage(true);
        break;
      case 2:
        firstOption.current.style.borderColor = "#999898";
        firstOptionIcon.current.style.color = "#999898";
        secondOption.current.style.borderColor = "#070797";
        secondOptionIcon.current.style.color = "#070797";
        setNextPage(true);
        break;
    }
  }
  function nextQuestion() {
    if (!nextPage) return;
    setQuestionPage((prevPage) => (prevPage = prevPage + 1));
  }

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
      <span
        className="border-[0.3px] border-gray-400 rounded-md p-5 "
        onClick={() => option(1)}
        ref={firstOption}
      >
        <span className="flex gap-6 h-full">
          <i
            className="fa fa-user text-[1.5rem] font-normal text-gray-400 self-center "
            ref={firstOptionIcon}
          ></i>
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
      <span
        className="border-[0.3px] border-gray-400 rounded-md p-5"
        onClick={() => option(2)}
        ref={secondOption}
      >
        <span className="flex gap-6 h-full">
          <i
            className="fa fa-building text-[1.5rem] font-normal text-gray-400 self-center"
            ref={secondOptionIcon}
          ></i>
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
      <span
        className="w-full h-9 flex bg-[#4b4bdd] justify-center items-center rounded-md"
        onClick={nextQuestion}
      >
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
