import MenuTop from "./MenuTop";
type Controls = {
  setControlA: React.Dispatch<React.SetStateAction<boolean>>;
  setIcontrol: React.Dispatch<React.SetStateAction<boolean>>;
};
function Top(props: Controls) {
  return (
    <>
      <MenuTop
        setControlA={props.setControlA}
        setIcontrol={props.setIcontrol}
      />
    </>
  );
}
export default Top;
