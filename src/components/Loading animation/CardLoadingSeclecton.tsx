function CardLoadingSeclecton() {
  return (
    <span className="mt-2 flex  flex-col gap-2 p-4 border-[1px]  border-gray-400 bg-baseCard-color   w-full   h-full max-h-[45rem]  rounded-md relative items-stretch  flex-grow ">
      <span className="flex w-full absolute top-0 mt-[-0.5px] gap-2 l-2">
        <span className="w-28 h-10 p-1 pl-2 pr-2 cardSkeletonLoading rounded-b-md">
          <h5 className="text-gray-200 font-semibold"></h5>
        </span>
        <span className="w-28 h-10 p-1 pl-2 pr-2 cardSkeletonLoading rounded-b-md">
          <h5 className="text-gray-200 font-semibold"></h5>
        </span>
      </span>
      <span className="w-full  h-[10rem] rounded-md cardSkeletonLoading"></span>
      <span className="text-gray-300 font-semibold text-[0.9rem]">
        <h5></h5>
      </span>
      <span className="flex flex-col">
        <span className="font-semibold text-[0.9rem] flex  gap-2">
          <h5 className="text-gray-100 w-20 h-5 cardSkeletonLoading"></h5>
          <h5 className="text-gray-100 text-[1rem] "></h5>
        </span>
        <div className="flex w-full gap-2 items-center">
          <span className="flex w-full h-4 cardSkeletonLoading">
            <span
              className=" w-full h-4 cardSkeletonLoading "
              style={{
                width: `100%`,
              }}
            ></span>
          </span>
          <span className="font-semibold text-[0.9rem] flex gap-1">
            <h5 className="text-baseDark-blue text-[1rem]"></h5>
            <h5 className="text-gray-100 w-16 h-6 cardSkeletonLoading"></h5>
          </span>
        </div>
      </span>
      <span className="flex flex-col w-full h-fit text-[1rem] p-2 gap-1 bg-[#06060cc5] rounded-md">
        <span className="flex w-full p-2 text-gray-300 border-b-[1px] border-gray-400 font-semibold overflow-hidden  ">
          <h5 className="mr-4 w-12 h-6 cardSkeletonLoading"></h5>
          <h5 className="ml-auto text-gray-50 w-32 cardSkeletonLoading"> </h5>
        </span>
        <span className="flex p-2 text-gray-300 font-semibold  border-b-[1px] border-gray-400 ">
          <h5 className="w-28 h-6 cardSkeletonLoading"> </h5>
          <h5 className="ml-auto w-12 h-6 cardSkeletonLoading"></h5>
        </span>
        <span className="flex p-2 text-gray-300 font-semibold  border-b-[1px] border-gray-400">
          <h5 className="w-16 h-6 cardSkeletonLoading"></h5>
          <h5 className="ml-auto w-12 h-6 cardSkeletonLoading"></h5>
        </span>
        <span className="flex p-2 text-gray-300 border-b-[1px] border-gray-400 font-semibold ">
          <h5 className="w-24 h-6 cardSkeletonLoading"></h5>
          <h5 className="ml-auto w-16 h-6 cardSkeletonLoading"></h5>
        </span>
        <span className="flex p-2 text-gray-300 font-semibold border-b-[1px] border-gray-400">
          <h5 className="w-20 h-6 cardSkeletonLoading"></h5>
          <h5 className="ml-auto w-12 h-6 cardSkeletonLoading"></h5>
        </span>
        <span className="flex w-full  p-2 text-gray-300  font-semibold ">
          <h5 className="w-16 h-6 cardSkeletonLoading"></h5>
          <h5 className="ml-auto w-36 h-6 cardSkeletonLoading"></h5>
        </span>
      </span>
      <div className="flex w-full gap-2">
        <span className="flex w-full h-12 pl-2 pr-2 justify-center items-center border-2 border-baseCard-borderColor rounded-full p-2 pointer cardSkeletonLoading"></span>
      </div>
    </span>
  );
}
export default CardLoadingSeclecton;
