import { useRef, useEffect } from "react";
import Manager from "/images/Manager/Lauren Hochfelder.jpg";
type AboutControl = {
  control: boolean;
  setControl: React.Dispatch<React.SetStateAction<boolean>>;
};
function AboutUs(props: AboutControl) {
  const control = props.control;
  const aboutRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!aboutRef.current) return;
    if (!control) return;
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    props.setControl(false);
  }, [control]);
  return (
    <div
      className=" pt-20 h-fit  pb-1 w-full relative appear-element"
      ref={aboutRef}
    >
      <span className="flex h-full pl-8">
        <h5 className="text-[#0c0cbe] font-semibold text-[1rem]">ABOUT US</h5>
        <span className="block w-1 bg-[#0c0cbe] h-6 ml-1"></span>
      </span>
      <div className="flex flex-col pl-8 mt-10 ">
        <span className="block ">
          <img className="w-28 h-28 rounded-full " src={Manager}></img>
        </span>
        <span className="flex flex-col mt-3">
          <h5 className="text-[1.1rem] lg:text-[1.3rem] font-semibold ">
            MANAGER
          </h5>
          <h5 className="text-[1rem] lg:text-[1.25rem] text-gray-600">
            Lauren Hochfelder
          </h5>
        </span>
      </div>
      <div className="pl-8 pr-8 mt-4 flex flex-col gap-4">
        <span className="">
          <h5 className="lg:text-[1.9rem] text-[1.3rem] font-serif  font-semibold">
            Invest in Your Future with Texas Homes
          </h5>
        </span>
        <span className="text-[1.3rem] font-serif font-normal">
          <h5>
            At <strong>Texas Homes</strong>, we provide more than just a
            platform; we offer a proven gateway to one of the most resilient
            real estate markets in the United States. Whether you are a
            first-time investor looking to build a foundation or a seasoned pro
            diversifying a multi-asset portfolio, our focus on{" "}
            <strong>private credit</strong> and <strong>tangible assets</strong>{" "}
            ensures your capital works harder for you.
          </h5>
        </span>
        <span className="">
          <h5 className="lg:text-[1.9rem] text-[1.3rem] font-serif  font-semibold">
            Why Invest with Us?
          </h5>
        </span>
        <ul className="text-[1.2rem] list-disc pl-6 font-serif font-normal flex flex-col gap-3">
          <li>
            <strong>Reliability You Can Count On: </strong>Our strategy is built
            on conservative underwriting and secured real estate collateral,
            providing a protective cushion for your principal while targeting
            steady returns.
          </li>
          <li>
            <strong>Steady, Passive Income:</strong> We specialize in assets
            that generate consistent cash flow, allowing you to earn regular
            income through high-yield private credit opportunities that
            outperform traditional fixed-income options.
          </li>
          <li>
            <strong>Diversification Made Simple:</strong> Easily spread your
            investments across multiple asset classes—from residential
            communities to commercial developments in high-growth hubs like San
            Antonio, Boerne, and Houston.
          </li>
          <li>
            <strong>Transparent Success:</strong> With a history of developing
            high-demand communities like Ventana and Vistas of Sonoma, we have
            established a strong market presence rooted in real-world results.
          </li>
        </ul>
        <span className="">
          <h5 className="lg:text-[1.9rem] text-[1.3rem] font-serif  font-semibold">
            Our Commitment to You
          </h5>
        </span>
        <span className="text-[1.3rem] font-serif font-normal">
          <h5>
            <strong>Trust is our cornerstone.</strong> We understand that your
            investment is a commitment to your future, which is why we
            prioritize:
          </h5>
        </span>
        <ul className="text-[1.2rem] list-disc pl-6 font-serif font-normal flex flex-col gap-3">
          <li>
            <strong>Top-Tier Customer Service:</strong> Our team is dedicated to
            providing fast communication and genuine support, ensuring every
            question is answered and your investment journey is stress-free.
          </li>
          <li>
            <strong>Expert Local Knowledge:</strong> We leverage decades of
            industry experience to identify off-market deals and high-potential
            investments before they reach the public, giving our investors a
            competitive edge.
          </li>
          <li>
            <strong>Long-Term Partnership:</strong> We don't just find deals; we
            build relationships. Our goal is to help you grow your wealth over
            the long term through predictable, low-volatility growth.
          </li>
        </ul>
        <span className="">
          <h5 className="lg:text-[1.9rem] text-[1.3rem] font-serif  font-semibold">
            Start Your Journey Today
          </h5>
        </span>
        <span className="text-[1.3rem] font-serif font-normal">
          <h5>
            Join hundreds of satisfied investors who have already increased
            their holdings with Texas Homes this year. Experience the{" "}
            <strong>stability of Texas real estate </strong>combined with the
            high-yield potential of private credit.
          </h5>
        </span>
      </div>
    </div>
  );
}
export default AboutUs;
