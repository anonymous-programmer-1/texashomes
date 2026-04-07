import Template from "../QuestionTemplate/Template";
import type { Dispatch, SetStateAction } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
type QuestionProp = {
  setPageFunc: Dispatch<SetStateAction<number>>;
};
function ThirdQuestion(prop: QuestionProp) {
  const setQuestionPage = prop.setPageFunc;
  const optionOneBox = useRef(null);
  const optionOneIcon = useRef(null);
  const optionTwoBox = useRef(null);
  const optionTwoIcon = useRef(null);
  const optionThreeBox = useRef(null);
  const optionThreeIcon = useRef(null);
  const optionFourBox = useRef(null);
  const optionFourIcon = useRef(null);
  function optionOne(control: boolean) {}
  function optionTwo(control: boolean) {}
  function optionThree(control: boolean) {}
  function optionFour(control: boolean) {}
  function handleClick(value: number) {}
  function nextQuestion() {}
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
        <h5 className="font-bold text-[1rem] text-[#060685]">GO BACK</h5>
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
