import Template from "../QuestionTemplate/Template";
import { useNavigate } from "react-router-dom";
function ThirdQuestion() {
  const urlNavigator = useNavigate();
  function userQuestion() {
    const url = "/about/user/potflio/fr/q";
    urlNavigator(url, { replace: false });
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
      <span className="border-[0.3px] border-gray-400 rounded-md p-5">
        <span className="flex gap-6 h-full">
          <i className="fa fa-check text-[1.5rem]  text-gray-400 self-center"></i>
          <span className="flex flex-col">
            <h5 className="text-gray-300 font-sans">
              earn $200k+ yearly (or $300k+ if filing jointly)
            </h5>
          </span>
        </span>
      </span>
      <span className="border-[0.3px] border-gray-400 rounded-md p-5">
        <span className="flex gap-6 h-full">
          <i className="fa fa-check text-[1.5rem]  text-gray-400 self-center"></i>
          <span className="flex flex-col">
            <h5 className="text-gray-300 font-sans">
              I have $1M+ in assets, excl. primary residence
            </h5>
          </span>
        </span>
      </span>
      <span className="border-[0.3px] border-gray-400 rounded-md p-5">
        <span className="flex gap-6 h-full">
          <i className="fa fa-check text-[1.5rem]  text-gray-400 self-center"></i>
          <span className="flex flex-col">
            <h5 className="text-gray-300 font-sans">
              I hold a current Series 7, 65 or 82 license
            </h5>
          </span>
        </span>
      </span>
      <span className="border-[0.3px] border-gray-400 rounded-md p-5">
        <span className="flex gap-6 h-full">
          <i className="fa fa-check text-[1.5rem]  text-gray-400 self-center"></i>
          <span className="flex flex-col">
            <h5 className="text-gray-300 font-sans">
              earn $200k+ yearly (or $300k+ if filing jointly)
            </h5>
          </span>
        </span>
      </span>
      <span
        className="w-full h-9 flex bg-[#4b4bdd] justify-center items-center rounded-md"
        onClick={userQuestion}
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
