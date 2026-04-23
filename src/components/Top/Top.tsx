import MenuTop from "./MenuTop";
type Controls = {
  setControlA: React.Dispatch<React.SetStateAction<boolean>>;
  setIcontrol: React.Dispatch<React.SetStateAction<boolean>>;
};
function Top(props: Controls) {
  return (
    <>
      <div className="flex w-full justify-center h-fit pb-0.5 bg-[#060685]">
        <div className="flex flex-col">
          <span className="block">
            <h5 className="lg:text-[1rem] text-[0.9rem] text-gray-100">
              Say "YES" to <strong>19.242% (20.152% APR)*</strong>interest rate
            </h5>
          </span>
          <span className="flex justify-center">
            <a className="text-[1rem] text-gray-100" href="signin">
              Check it out
            </a>
          </span>
        </div>
      </div>
      <MenuTop
        setControlA={props.setControlA}
        setIcontrol={props.setIcontrol}
      />
    </>
  );
}
export default Top;
