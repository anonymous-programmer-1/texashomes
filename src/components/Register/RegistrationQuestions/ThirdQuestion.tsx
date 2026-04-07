import Template from "../QuestionTemplate/Template";
import type { Dispatch, RefObject, SetStateAction } from "react";
import { useRef, useState } from "react";

type QuestionProp = {
  setPageFunc: Dispatch<SetStateAction<number>>;
};
function ThirdQuestion(prop: QuestionProp) {
  const setQuestionPage = prop.setPageFunc;
  const optionOneBox = useRef<RefObject<HTMLSpanElement> | null>(null);
  const optionOneIcon = useRef<RefObject<HTMLElement> | null>(null);
  const optionTwoBox = useRef<RefObject<HTMLSpanElement> | null>(null);
  const optionTwoIcon = useRef<RefObject<HTMLElement> | null>(null);
  const optionThreeBox = useRef<RefObject<HTMLSpanElement> | null>(null);
  const optionThreeIcon = useRef<RefObject<HTMLElement> | null>(null);
  const optionFourBox = useRef<RefObject<HTMLSpanElement> | null>(null);
  const optionFourIcon = useRef<RefObject<HTMLElement> | null>(null);
  const [nextPage, setNextPage] = useState<boolean>(false);
  function optionOne(control: boolean) {
    if (control) {
      optionOneBox.current.style.borderColor = "#070797";
      optionOneIcon.current.style.color = "#070797";
    } else {
      optionOneBox.current.style.borderColor = "#999898";
      optionOneIcon.current.style.color = "#999898";
    }
  }
  function optionTwo(control: boolean) {
    if (control) {
      optionTwoBox.current.style.borderColor = "#070797";
      optionTwoIcon.current.style.color = "#070797";
    } else {
      optionTwoBox.current.style.borderColor = "#999898";
      optionTwoIcon.current.style.color = "#999898";
    }
  }
  function optionThree(control: boolean) {
    if (control) {
      optionThreeBox.current.style.borderColor = "#070797";
      optionThreeIcon.current.style.color = "#070797";
    } else {
      optionThreeBox.current.style.borderColor = "#999898";
      optionThreeIcon.current.style.color = "#999898";
    }
  }
  function optionFour(control: boolean) {
    if (control) {
      optionFourBox.current.style.borderColor = "#070797";
      optionFourIcon.current.style.color = "#070797";
    } else {
      optionFourBox.current.style.borderColor = "#999898";
      optionFourIcon.current.style.color = "#999898";
    }
  }
  function handleClick(value: number) {
    switch (value) {
      case 1:
        optionOne(true);
        optionTwo(false);
        optionThree(false);
        optionFour(false);
        setNextPage(true);
        break;
      case 2:
        optionOne(false);
        optionTwo(true);
        optionThree(false);
        optionFour(false);
        setNextPage(true);
        break;
      case 3:
        optionOne(false);
        optionTwo(false);
        optionThree(true);
        optionFour(false);
        setNextPage(true);
        break;
      case 4:
        optionOne(false);
        optionTwo(false);
        optionThree(false);
        optionFour(true);
        setNextPage(true);
        break;
    }
  }
  function nextQuestion() {
    if (!nextPage) return;
    setQuestionPage((prevPage) => (prevPage = prevPage + 1));
  }
  function questionStepBack() {
    setQuestionPage((prevPage) => {
      if (prevPage === 1) return 1;
      return (prevPage = prevPage - 1);
    });
  }
  const subTopic = (
    <span className="flex flex-col pb-9">
      <h5 className="font-normal text-[1.3rem] text-gray-100 mt-5">
        Are you an accredited investor?
      </h5>
      <h5 className="text-gray-100 font-sans mt-1.5">
        To invest on Percent, you need to be an accredited investor.
      </h5>
    </span>
  );
  const content = (
    <>
      <span className="block pt-10"></span>
      <span
        className="border-[0.3px] border-gray-400 rounded-md p-5"
        ref={optionOneBox}
        onClick={() => handleClick(1)}
      >
        <span className="flex gap-6 h-full">
          <i
            className="fa fa-check text-[1.5rem]  text-gray-400 self-center"
            ref={optionOneIcon}
          ></i>
          <span className="flex flex-col">
            <h5 className="text-gray-300 font-sans">
              earn $200k+ yearly (or $300k+ if filing jointly)
            </h5>
          </span>
        </span>
      </span>
      <span
        className="border-[0.3px] border-gray-400 rounded-md p-5"
        ref={optionTwoBox}
        onClick={() => handleClick(2)}
      >
        <span className="flex gap-6 h-full">
          <i
            className="fa fa-check text-[1.5rem]  text-gray-400 self-center"
            ref={optionTwoIcon}
          ></i>
          <span className="flex flex-col">
            <h5 className="text-gray-300 font-sans">
              I have $1M+ in assets, excl. primary residence
            </h5>
          </span>
        </span>
      </span>
      <span
        className="border-[0.3px] border-gray-400 rounded-md p-5"
        ref={optionThreeBox}
        onClick={() => handleClick(3)}
      >
        <span className="flex gap-6 h-full">
          <i
            className="fa fa-check text-[1.5rem]  text-gray-400 self-center"
            ref={optionThreeIcon}
          ></i>
          <span className="flex flex-col">
            <h5 className="text-gray-300 font-sans">
              I hold a current Series 7, 65 or 82 license
            </h5>
          </span>
        </span>
      </span>
      <span
        className="border-[0.3px] border-gray-400 rounded-md p-5"
        ref={optionFourBox}
        onClick={() => handleClick(4)}
      >
        <span className="flex gap-6 h-full">
          <i
            className="fa fa-check text-[1.5rem]  text-gray-400 self-center"
            ref={optionFourIcon}
          ></i>
          <span className="flex flex-col">
            <h5 className="text-gray-300 font-sans">
              earn $200k+ yearly (or $300k+ if filing jointly)
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
      <span className="flex justify-center">
        <h5
          className="font-bold text-[1rem] text-[#060685]"
          onClick={questionStepBack}
        >
          GO BACK
        </h5>
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
export default ThirdQuestion;
