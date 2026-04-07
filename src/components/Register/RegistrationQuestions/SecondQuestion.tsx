import type { Dispatch, RefObject, SetStateAction } from "react";
import { useRef } from "react";
import Template from "../QuestionTemplate/Template";

type QuestionProp = {
  setPageFunc: Dispatch<SetStateAction<number>>;
};
function SecondQuestion(prop: QuestionProp) {
  const setQuestionPage = prop.setPageFunc;
  const numberInput = useRef(null);
  function validateInput(input: RefObject<HTMLInputElement>) {
    const number = input.current.value;
    input.current.style.color = "#ccc9c9";
    if (number.trim().split("").length >= 10) {
      setQuestionPage((prevPage) => (prevPage = prevPage + 1));
    } else {
      input.current.style.borderColor = "#b11515";
    }
  }
  function nextQuestion() {
    validateInput(numberInput);
  }
  function skipOne() {
    setQuestionPage((prevPage) => (prevPage = prevPage + 1));
  }
  function questionStepBack() {
    setQuestionPage((prevPage) => {
      if (prevPage === 1) return 1;
      return (prevPage = prevPage - 1);
    });
  }
  //*
  const subTopic = (
    <span className="flex flex-col pb-9">
      <h5 className="font-normal text-[1.3rem] text-gray-100 mt-5">
        What is your phone number?
      </h5>
      <h5 className="text-gray-100 font-sans mt-1.5">
        Please provide a mobile phone number to help secure your account.
      </h5>
    </span>
  );
  const content = (
    <>
      <span className="block pt-10"></span>
      <div className="flex ">
        <span className="w-full h-full ">
          <h5 className=" text-gray-400 font-sans">Mobile Phone</h5>
          <span className="flex w-full h-full gap-3 max-h-[3rem]">
            <span className="flex gap-1 justify-center items-center w-[45%] h-full border-[0.3px] border-gray-400 rounded-md bg-transparent">
              <h5 className="font-semibold text-gray-100 font-sans">US(+1)</h5>
              <i className="fas fa-angle-down text-[1rem] text-gray-100"></i>
            </span>
            <input
              className="w-full h-full border-[0.3px] border-gray-400 rounded-md bg-transparent pl-3 text-gray-200"
              ref={numberInput}
              placeholder="(555) 555-5555"
            ></input>
          </span>
        </span>
      </div>
      <div className="flex mt-8 gap-2 ">
        <input
          className="w-5 h-5 self-center bg-transparent border-[0.3px] border-gray-400 rounded-md"
          type=""
        ></input>
        <span>
          <h5 className="text-gray-200 font-sans  font-semibold">
            I want to receive SMS marketing messages, including new deal alerts
            and important updates. Standard messaging rates apply.
          </h5>
        </span>
      </div>
      <span
        className="w-full h-9 flex bg-[#333333b7] justify-center items-center rounded-md "
        onClick={nextQuestion}
      >
        <h5 className="text-[1rem] font-bold text-gray-100">NEXT</h5>
      </span>
      <div className="flex gap-3 justify-center mt-4">
        <span>
          <h5
            className="font-bold text-[1rem] text-[#060685]"
            onClick={questionStepBack}
          >
            GO BACK
          </h5>
        </span>
        <span className="w-[2px] h-6 bg-gray-300"></span>
        <span>
          <h5
            className="font-bold text-[1rem] text-[#060685]"
            onClick={skipOne}
          >
            SKIP
          </h5>
        </span>
      </div>
      <span className="block pb-10"></span>
    </>
  );
  return (
    <>
      <Template rightContact={subTopic} leftContact={content} />
    </>
  );
}
export default SecondQuestion;
