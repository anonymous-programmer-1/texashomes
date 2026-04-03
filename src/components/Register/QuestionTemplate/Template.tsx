import LoadingBar from "./LoadingBar";

function Template({ rightContact, leftContact }) {
  return (
    <div className="full flex justify-center bg-[#101025e1] min-h-screen max-h-fit  items-center p-5 flex-shrink">
      <div className="flex flex-wrap w-[180%] max-h-fit max-w-[75rem] bg-[#1f1e1e] rounded-3xl border-[0.6px] border-[#4b4b4b]  p-10 gap-8">
        <div className="inline-flex flex-col flex-grow ">
          <span className="flex flex-col text-[1.3rem] text-gray-100">
            <h5 className="font-bold">Texas</h5>
            <h5 className="font-semibold ml-4 mt-[-8px]">Homes</h5>
          </span>
          <div className="flex flex-col w-full h-full">
            <span className="flex flex-col mb-auto">
              {/**Conteant */}
              {rightContact && rightContact}
              {/**End */}
            </span>
            <LoadingBar />
          </div>
        </div>
        <div className="inline-flex flex-col w-full lg:w-[40%] gap-4">
          {/**Conteant */}
          {leftContact && leftContact}
          {/**End */}
        </div>
      </div>
    </div>
  );
}
export default Template;
