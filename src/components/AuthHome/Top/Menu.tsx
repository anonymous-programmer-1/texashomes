import type { SetStateAction } from "react";
type MenuControl = {
  func: React.Dispatch<SetStateAction<boolean>>;
};
function Menu(props: MenuControl) {
  const control = props.func;
  return (
    <div className="">
      <div className="flex gap-6 flex-col absolute bg-[#0d0d13] w-[80%] max-w-[350px] mt-9 z-10 left-0 p-4 h-screen">
        <span className="ml-auto mb-2">
          <i
            className="fa fa-xmark"
            onClick={() => control((prevControl) => !prevControl)}
          ></i>
        </span>
        <span className="flex text-[1rem] items-center">
          <h5>MANAGERS</h5>
          <i className="fas fa-angle-right ml-auto"></i>
        </span>
        <span className="flex text-[1rem] items-center">
          <h5>PORTFOLIO</h5>
          <i className="fas fa-angle-right ml-auto"></i>
        </span>
        <span className="flex text-[1rem] items-center">
          <h5>COMPANY</h5>
          <i className="fas fa-angle-right ml-auto"></i>
        </span>
      </div>
    </div>
  );
}
export default Menu;
