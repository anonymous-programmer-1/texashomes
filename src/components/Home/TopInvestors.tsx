import { useRef, useEffect } from "react";
import image0 from "/images/investors/Annette Lerner & Family.webp";
import image1 from "/images/investors/Edward Roski Jr.jpg";
import image2 from "/images/investors/Henry Will.jpg";
import image3 from "/images/investors/Igor Olenicoff.webp";
import image4 from "/images/investors/Jeff Greene.jpg";
import image5 from "/images/investors/Jorden Knight.jpg";
import image6 from "/images/investors/Leonard Stern.webp";

function TopInvestors() {
  const slideDiv = useRef<HTMLDivElement | null>(null);
  const screenWidth = window.innerWidth;
  useEffect(() => {
    if (!slideDiv.current) return;
    if (screenWidth <= 499) {
      slideDiv.current.classList.remove("track-slide");
      slideDiv.current.classList.add("track-slide-moblie");
    } else {
      slideDiv.current.classList.remove("track-slide-moblie");
      slideDiv.current.classList.add("track-slide");
    }
  }, [screenWidth]);
  return (
    <div className="w-full mt-20 mb-20 pl-8 pr-8 appear-element overflow-hidden whitespace-nowrap ">
      <span className="flex h-full  mt-4">
        <h5 className="text-[#0c0cbe] font-semibold text-[1rem]">
          TOP INVESTORS
        </h5>
        <span className="block w-1 bg-[#0c0cbe] h-6 ml-1"></span>
      </span>
      <div
        className="w-full flex mt-4 pl-10 pr-10 justify-evenly "
        ref={slideDiv}
      >
        <span className="flex  items-center gap-2  text-[1.2rem] font-semibold">
          <img className="w-16 h-16  rounded-full" src={image0}></img>
          <h5>Annette Lerner</h5>
        </span>
        <span className="flex  items-center gap-2  text-[1.2rem] font-semibold">
          <img className="w-16 h-16  rounded-full" src={image1}></img>
          <h5>Edward Roski Jr</h5>
        </span>
        <span className="flex  items-center gap-2  text-[1.2rem] font-semibold">
          <img className="w-16 h-16  rounded-full" src={image2}></img>
          <h5>Henry Will</h5>
        </span>
        <span className="flex  items-center gap-2  text-[1.2rem] font-semibold">
          <img className="w-16 h-16  rounded-full" src={image3}></img>
          <h5>Igor Olenicoff</h5>
        </span>
        <span className="flex  items-center gap-2  text-[1.2rem] font-semibold">
          <img className="w-16 h-16  rounded-full" src={image4}></img>
          <h5>Jeff Greene</h5>
        </span>
        <span className="flex  items-center gap-2  text-[1.2rem] font-semibold">
          <img className="w-16 h-16  rounded-full" src={image5}></img>
          <h5 className="">Jorden Knight</h5>
        </span>
        <span>
          <span className="flex  items-center gap-2  text-[1.2rem] font-semibold">
            <img className="w-16 h-16  rounded-full" src={image6}></img>

            <h5 className="">Leonard Stern</h5>
          </span>
        </span>
        {/**dulplicate */}
        <span className="flex  items-center gap-2  text-[1.2rem] font-semibold">
          <img className="w-16 h-16  rounded-full" src={image0}></img>
          <h5>Annette Lerner</h5>
        </span>
        <span className="flex  items-center gap-2  text-[1.2rem] font-semibold">
          <img className="w-16 h-16  rounded-full" src={image1}></img>
          <h5>Edward Roski Jr</h5>
        </span>
        <span className="flex  items-center gap-2  text-[1.2rem] font-semibold">
          <img className="w-16 h-16  rounded-full" src={image2}></img>
          <h5>Henry Will</h5>
        </span>
        <span className="flex  items-center gap-2  text-[1.2rem] font-semibold">
          <img className="w-16 h-16  rounded-full" src={image3}></img>
          <h5>Igor Olenicoff</h5>
        </span>
        <span className="flex  items-center gap-2  text-[1.2rem] font-semibold">
          <img className="w-16 h-16  rounded-full" src={image4}></img>
          <h5>Jeff Greene</h5>
        </span>
        <span className="flex  items-center gap-2  text-[1.2rem] font-semibold">
          <img className="w-16 h-16  rounded-full" src={image5}></img>
          <h5 className="">Jorden Knight</h5>
        </span>
        <span>
          <span className="flex  items-center gap-2  text-[1.2rem] font-semibold">
            <img className="w-16 h-16  rounded-full" src={image6}></img>

            <h5 className="">Leonard Stern</h5>
          </span>
        </span>
      </div>
    </div>
  );
}
export default TopInvestors;
