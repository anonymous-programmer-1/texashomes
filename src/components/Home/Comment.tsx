import { useState } from "react";
import image0 from "/images/investors/Robert Faith1.jpg";
import image1 from "/images/investors/Edward Roski Jr.jpg";
import image2 from "/images/investors/Rick Grimes.jpg";
import image3 from "/images/investors/Igor Olenicoff.webp";
import image4 from "/images/investors/Jeff Greene.jpg";

import image6 from "/images/investors/Leonard Stern.webp";

function Comments() {
  const [loadMore, setLoadMore] = useState<boolean>(false);
  return (
    <>
      <div className=" mt-16 h-fit pt-1 pb-1 w-full relative appear-element">
        <span className="flex h-full pl-8">
          <h5 className="text-[#0c0cbe] font-semibold text-[1rem]">
            WHAT OUR INVESTORS ARE SAYING
          </h5>
          <span className="block w-1 bg-[#0c0cbe] h-6 ml-1"></span>
        </span>
        <div className="mt-7 flex flex-wrap  gap-4 w-full  justify-around transition-transform">
          {!loadMore && (
            <>
              <span className="max-w-[310px] h-fit  flex flex-grow flex-col gap-1 items-stretch bg-[#fffdfd] pt-10 pb-10 pl-10 pr-10 rounded-md hover:shadow-xl hover:-translate-y-1 transition-all text-gray-200 hover:text-gray-500 ">
                <i className="fa fa-comment-dots text-[1.5rem] font-normal text-[#060685]"></i>
                <span className="block text-gray-400 lg:text-gray-200 hover:text-gray-500  ">
                  <h5 className="mt-2 text-[1rem] font-semibold ">
                    After three years of investing, I can vouch for their
                    predictability. Even in shifting markets, Texas Homes has
                    remained stable and resilient. They do exactly what they say
                    they’re going to do, which is the ultimate mark of a
                    trustworthy partner.
                  </h5>
                  <span className="block mt-[10%]">
                    <span className="flex ">
                      <span className="block  lg:w-[5.2rem] lg:h-[5.2rem] w-[5rem] h-[5rem]  rounded-full">
                        <img
                          className="w-full h-full rounded-full"
                          src={image0}
                        ></img>
                      </span>
                      <span className="ml-2 block">
                        <h5 className="text-[1rem] font-semibold  mt-4">
                          Robert Faith
                        </h5>
                        <h5 className="text-[1rem] font-semibold ">
                          investor since 2018
                        </h5>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span className="max-w-[310px]  flex flex-grow flex-col gap-1 items-stretch bg-[#fcfafa] pt-10 pb-10 pl-10 pr-10 rounded-md hover:shadow-xl hover:-translate-y-1 transition-all ">
                <i className="fa fa-comment-dots  text-[1.5rem] font-normal text-[#060685]"></i>
                <span className="mt-2 block text-gray-400 lg:text-gray-200 hover:text-gray-500  ">
                  <h5 className="text-[1rem] font-semibold ">
                    Texas homes fits my investing strategy perfectly. Not only
                    can I diversify my portfolio with a shorter duration
                    alternative investment like private credit, I can further
                    diversify across multiple asset classes.
                  </h5>
                  <span className="block   mt-[30%]">
                    <span className="flex ">
                      <span className="block lg:w-[5.2rem] lg:h-[5.2rem] w-[5rem] h-[5rem]  relative rounded-full">
                        <img
                          className="w-full h-full  rounded-full"
                          src={image1}
                        ></img>
                      </span>
                      <span className="ml-2 block">
                        <h5 className="text-[1rem] font-semibold  mt-4">
                          Edward Roski
                        </h5>
                        <h5 className="text-[1rem] font-semibold ">
                          investor since 2016
                        </h5>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span className="max-w-[310px]  flex flex-grow flex-col gap-1 items-stretch bg-[#fcfafa] pt-10 pb-10 pl-10 pr-10 rounded-md hover:shadow-xl hover:-translate-y-1 transition-all ">
                <i className="fa fa-comment-dots  text-[1.5rem] font-normal text-[#060685]"></i>
                <span className="mt-2 block text-gray-400 lg:text-gray-200 hover:text-gray-500  ">
                  <h5 className="text-[1rem] font-semibold ">
                    What sets Texas Homes apart is their transparency. In an
                    industry where details can be murky, their consistent
                    communication and clear reporting give me the peace of mind
                    that my capital is being managed with the highest level of
                    integrity.
                  </h5>
                  <span className="block   mt-[10%]">
                    <span className="flex ">
                      <span className="block lg:w-[5.2rem] lg:h-[5.2rem] w-[5rem] h-[5rem]  relative rounded-full">
                        <img
                          className="w-full h-full  rounded-full"
                          src={image2}
                        ></img>
                      </span>
                      <span className="ml-2 block">
                        <h5 className="text-[1rem] font-semibold  mt-4">
                          Rick Grimes
                        </h5>
                        <h5 className="text-[1rem] font-semibold ">
                          investor since 2023
                        </h5>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </>
          )}
          {loadMore && (
            <>
              <span className="max-w-[310px]  flex flex-grow flex-col gap-1 items-stretch bg-[#fcfafa] pt-10 pb-10 pl-10 pr-10 rounded-md hover:shadow-xl hover:-translate-y-1 transition-all ">
                <i className="fa fa-comment-dots  text-[1.5rem] font-normal text-[#060685]"></i>
                <span className="mt-2 block text-gray-400 lg:text-gray-200 hover:text-gray-500  ">
                  <h5 className="text-[1rem] font-semibold ">
                    I’ve explored many private credit options, but the
                    reliability of Texas Homes is unmatched. Their proven track
                    record of delivering steady returns has made them a
                    cornerstone of my retirement strategy. It’s a platform built
                    on professionalism and results
                  </h5>
                  <span className="block   mt-[19%]">
                    <span className="flex ">
                      <span className="block lg:w-[5.2rem] lg:h-[5.2rem] w-[5rem] h-[5rem]  relative rounded-full">
                        <img
                          className="w-full h-full  rounded-full"
                          src={image3}
                        ></img>
                      </span>
                      <span className="ml-2 block">
                        <h5 className="text-[1rem] font-semibold  mt-4">
                          Igor Olenicoff
                        </h5>
                        <h5 className="text-[1rem] font-semibold ">
                          investor since 2022
                        </h5>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span className="max-w-[310px]  flex flex-grow flex-col gap-1 items-stretch bg-[#fcfafa] pt-10 pb-10 pl-10 pr-10 rounded-md hover:shadow-xl hover:-translate-y-1 transition-all ">
                <i className="fa fa-comment-dots  text-[1.5rem] font-normal text-[#060685]"></i>
                <span className="mt-2 block text-gray-400 lg:text-gray-200 hover:text-gray-500  ">
                  <h5 className="text-[1rem] font-semibold ">
                    Investing here feels like a true partnership. The due
                    diligence they perform on every asset is evident, and the
                    security of knowing my funds are backed by tangible real
                    estate makes Texas Homes my go-to for low-volatility growth.
                  </h5>
                  <span className="block   mt-[30%]">
                    <span className="flex ">
                      <span className="block lg:w-[5.2rem] lg:h-[5.2rem] w-[5rem] h-[5rem]  relative rounded-full">
                        <img
                          className="w-full h-full  rounded-full"
                          src={image4}
                        ></img>
                      </span>
                      <span className="ml-2 block">
                        <h5 className="text-[1rem] font-semibold  mt-4">
                          Jeff Greene
                        </h5>
                        <h5 className="text-[1rem] font-semibold ">
                          investor since 2025
                        </h5>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span className="max-w-[310px]  flex flex-grow flex-col gap-1 items-stretch bg-[#fcfafa] pt-10 pb-10 pl-10 pr-10 rounded-md hover:shadow-xl hover:-translate-y-1 transition-all ">
                <i className="fa fa-comment-dots  text-[1.5rem] font-normal text-[#060685]"></i>
                <span className="mt-2 block text-gray-400 lg:text-gray-200 hover:text-gray-500  ">
                  <h5 className="text-[1rem] font-semibold ">
                    They are one of the only platforms l've dealt with that have
                    real people on the other end of their customer service line.
                    Talking to a human being regarding my portfolio and
                    investments is instrumental in this digital world we live
                    in.
                  </h5>
                  <span className="block   mt-[30%]">
                    <span className="flex">
                      <span className="block  lg:w-[5.2rem] lg:h-[5.2rem] w-[5rem] h-[5rem]  rounded-full">
                        <img
                          className="w-full h-full rounded-full"
                          src={image6}
                        ></img>
                      </span>
                      <span className="ml-2 block">
                        <h5 className="text-[1rem] font-semibold  mt-4">
                          Leonard Stern
                        </h5>
                        <h5 className="text-[1rem] font-semibold ">
                          investor since 2012
                        </h5>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-5 items-center">
        <span
          className="bg-[#060685] font-semibold pt-1.5 pb-1.5 pl-4 pr-4 text-gray-200 rounded-lg text-[1.3rem] pointer mt-10 hover:bg-[#0e0edf] "
          onClick={() => setLoadMore(!loadMore)}
        >
          <h5>Load More</h5>
        </span>
      </div>
    </>
  );
}
export default Comments;
