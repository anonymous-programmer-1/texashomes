import { useState } from "react";
function MenuCategory() {
  const [optionOne, setOptionOne] = useState<boolean>(false);
  const [optionTwo, setOptionTwo] = useState<boolean>(false);
  const [optionThree, setOptionThree] = useState<boolean>(false);
  function universaControl(index: number) {
    switch (index) {
      case 1:
        setOptionOne(!optionOne);
        setOptionTwo(false);
        setOptionThree(false);
        break;
      case 2:
        setOptionTwo(!optionTwo);
        setOptionOne(false);
        setOptionThree(false);
        break;
      case 3:
        setOptionThree(!optionThree);
        setOptionOne(false);
        setOptionTwo(false);
        break;
      default:
        break;
    }
  }
  return (
    <div className="w-full  bg-white   ">
      <div className="flex pl-8  gap-4 flex-wrap pt-5  pb-5">
        <span className="flex flex-col gap-1.5 w-36 border-2 h-9  ">
          <span
            className="flex items-center mt-1 pl-3 pr-2"
            onClick={() => universaControl(1)}
          >
            <h5
              className="text-[1rem] mr-auto font-serif text-gray-500"
              onClick={() => universaControl(1)}
            >
              $200-$1,000
            </h5>
            {optionOne ? (
              <i
                className="fas fa-angle-up text-[1rem] "
                onClick={() => universaControl(1)}
              ></i>
            ) : (
              <i
                className="fas fa-angle-down text-[1rem] "
                onClick={() => universaControl(1)}
              ></i>
            )}
          </span>
          {optionOne && (
            <div>
              <div className="flex flex-col shadow-md z-[5] overflow-hiddenborder-2 absolute ml-[-2px] gap-4 bg-white w-36 h-fit pl-3 pr-[18px] pt-2 pb-2 transition-all">
                <span className="flex items-center">
                  <h5 className="text-[1rem] mr-auto font-serif text-gray-500">
                    $1,000-$2,000k
                  </h5>
                </span>
                <span className="flex items-center">
                  <h5 className="text-[1rem] mr-auto font-serif text-gray-500">
                    $2,000-$5,000k
                  </h5>
                </span>
                <span className="flex items-center">
                  <h5 className="text-[1rem] mr-auto font-serif text-gray-500">
                    $5,000-$10,000k
                  </h5>
                </span>
                <span className="flex items-center">
                  <h5 className="text-[1rem] mr-auto font-serif text-gray-500">
                    $10,000+
                  </h5>
                </span>
              </div>
            </div>
          )}
        </span>
        <span className="flex flex-col gap-1.5 w-36 border-2 h-9  ">
          <span
            className="flex items-center mt-1 pl-3 pr-2"
            onClick={() => universaControl(2)}
          >
            <h5
              className="text-[1rem] mr-auto font-serif text-gray-500"
              onClick={() => universaControl(2)}
            >
              Status
            </h5>
            {optionTwo ? (
              <i
                className="fas fa-angle-up text-[1rem] "
                onClick={() => universaControl(2)}
              ></i>
            ) : (
              <i
                className="fas fa-angle-down text-[1rem] "
                onClick={() => universaControl(2)}
              ></i>
            )}
          </span>
          {optionTwo && (
            <div>
              <div className="flex flex-col shadow-md z-[5] overflow-hiddenborder-2 absolute  gap-4 bg-white w-36 h-fit pl-3 pr-[18px] pt-2 pb-2 ml-[-2px] transition-all">
                <span className="flex items-center">
                  <h5 className="text-[1rem] mr-auto font-serif text-gray-500">
                    Funding
                  </h5>
                </span>
                <span className="flex items-center">
                  <h5 className="text-[1rem] mr-auto font-serif text-gray-500">
                    Ended
                  </h5>
                </span>
                <span className="flex items-center">
                  <h5 className="text-[1rem] mr-auto font-serif text-gray-500">
                    New
                  </h5>
                </span>
              </div>
            </div>
          )}
        </span>
        <span className="flex flex-col gap-1.5 w-36 border-2 h-9  ">
          <span
            className="flex items-center mt-1 pl-3 pr-2"
            onClick={() => universaControl(3)}
          >
            <h5
              className="text-[1rem] mr-auto font-serif text-gray-500"
              onClick={() => universaControl(3)}
            >
              3 - 6 Months
            </h5>
            {optionThree ? (
              <i
                className="fas fa-angle-up text-[1rem] "
                onClick={() => universaControl(3)}
              ></i>
            ) : (
              <i
                className="fas fa-angle-down text-[1rem] "
                onClick={() => universaControl(3)}
              ></i>
            )}
          </span>
          {optionThree && (
            <div>
              <div className="flex flex-col shadow-md z-[5] overflow-hidden border-2 absolute  gap-4 bg-white w-36 h-fit pl-3 pr-[18px] pt-2 pb-2 ml-[-2px] transition-all">
                <span className="flex items-center">
                  <h5 className="text-[1rem] mr-auto font-serif text-gray-500"></h5>
                </span>
                <span className="flex items-center">
                  <h5 className="text-[1rem] mr-auto font-serif text-gray-500">
                    6 - 9 Months
                  </h5>
                </span>
                <span className="flex items-center">
                  <h5 className="text-[1rem] mr-auto font-serif text-gray-500">
                    9 - 12 Months
                  </h5>
                </span>
                <span className="flex items-center">
                  <h5 className="text-[1rem] mr-auto font-serif text-gray-500">
                    1 - 2 Years
                  </h5>
                </span>
                <span className="flex items-center">
                  <h5 className="text-[1rem] mr-auto font-serif text-gray-500">
                    2+ Years
                  </h5>
                </span>
              </div>
            </div>
          )}
        </span>
      </div>
    </div>
  );
}
export default MenuCategory;
