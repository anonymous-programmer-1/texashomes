function LoadingRing() {
  return (
    <div className="relative mt-3 w-full">
      <div className="absolute loading-animation-right w-14 h-14 bg-transparent rounded-[50%] border-4 border-transparent border-t-[#a00505]"></div>
      <div className="loading-animation-left w-14 h-14 bg-transparent rounded-[50%] border-4 border-transparent border-t-[#070775]"></div>
      <h5 className="mt-0.5 text-[0.9rem] text-gray-300">Loading..</h5>
    </div>
  );
}
export default LoadingRing;
