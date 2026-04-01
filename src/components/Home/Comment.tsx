function Comments() {
  return (
    <div className=" mt-7 h-fit pt-1 pb-1 w-full relative appear-element">
      <span className="flex h-full pl-8">
        <h5 className="text-[#0c0cbe] font-semibold text-[1rem]">
          WHAT OUR INVESTORS ARE SAYING
        </h5>
        <span className="block w-1 bg-[#0c0cbe] h-6 ml-1"></span>
      </span>
      <div className="mt-7 flex flex-wrap gap-4 w-full  justify-around ">
        <span className="max-w-[300px] flex flex-grow flex-col gap-1 items-stretch bg-[#fffdfd] pt-10 pb-10 pl-10 pr-10 rounded-md hover:shadow-xl hover:-translate-y-1 transition-all text-gray-200 hover:text-gray-500 ">
          <i className="fa fa-comment-dots text-[1.5rem] font-normal text-[#060685]"></i>
          <span className="block text-gray-200 hover:text-gray-500  transition-all">
            <h5 className="mt-2 text-[1rem] font-semibold ">
              When we opened our account with Percent, we didn't know how much
              we would be investing on the platform. We have been very pleased
              with the opportunities and returns offered and have increased our
              investments on Percent this year.
            </h5>
            <h5 className="text-[1rem] font-semibold  mt-4">Tom L</h5>
            <h5 className="text-[1rem] font-semibold ">investor since 2018</h5>
          </span>
        </span>
        <span className="max-w-[300px] flex flex-grow flex-col gap-1 items-stretch bg-[#fcfafa] pt-10 pb-10 pl-10 pr-10 rounded-md hover:shadow-xl hover:-translate-y-1 transition-all">
          <i className="fa fa-comment-dots  text-[1.5rem] font-normal text-[#060685]"></i>
          <span className="mt-2 block text-gray-200 hover:text-gray-500  transition-all">
            <h5 className="text-[1rem] font-semibold ">
              Percent fits my investing strategy perfectly. Not only can I
              diversify my portfolio with a shorter duration alternative
              investment like private credit, I can further diversify across
              multiple asset classes.
            </h5>
            <h5 className="text-[1rem] font-semibold mt-4">Drew M</h5>
            <h5 className="text-[1rem] font-semibold ">investor since 2020</h5>
          </span>
        </span>
        <span className="max-w-[300px] flex flex-grow flex-col gap-1 items-stretch bg-[#fcfafa] pt-10 pb-10 pl-10 pr-10 rounded-md hover:shadow-xl hover:-translate-y-1 transition-all">
          <i className="fa fa-comment-dots  text-[1.5rem] font-normal text-[#060685]"></i>
          <span className="mt-2 block text-gray-200 hover:text-gray-500  transition-all">
            <h5 className="text-[1rem] font-semibold ">
              They are one of the only platforms l've dealt with that have real
              people on the other end of their customer service line. Talking to
              a human being regarding my portfolio and investments is
              instrumental in this digital world we live in.
            </h5>
            <h5 className="text-[1rem] font-semibold mt-4">Daniel C</h5>
            <h5 className="text-[1rem] font-semibold ">
              investment profesional
            </h5>
          </span>
        </span>
      </div>
    </div>
  );
}
export default Comments;
