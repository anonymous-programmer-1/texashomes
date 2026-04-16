import PiaChat from "./graph/PiaChart";
const data1 = [
  { name: "Rate", value: 15 },
  { name: "Rate", value: 16 },
  { name: "Rate", value: 18 },
  { name: "Rate", value: 19 },
  { name: "Rate", value: 20 },
];
const data2 = [
  { name: "Terms", value: 3 },
  { name: "Terms", value: 6 },
  { name: "Terms", value: 4 },
  { name: "Terms", value: 12 },
  { name: "Terms", value: 8 },
  { name: "Terms", value: 22 },
];
const data3 = [
  { name: "Managers", value: 18 },
  { name: "Managers", value: 42 },
  { name: "Managers", value: 6 },
  { name: "Managers", value: 12 },
  { name: "Managers", value: 20 },
];
const data4 = [
  { name: "Rate", value: 40 },
  { name: "Rate", value: 20 },
  { name: "Rate", value: 8 },
  { name: "Rate", value: 6 },
  { name: "Rate", value: 10 },
  { name: "Rate", value: 4 },
  { name: "Rate", value: 9 },
  { name: "Rate", value: 3 },
];
const subData = [
  " United States",
  " United Kingdom",
  " Mexico",
  " Italy",
  " Netherlands",
  " Columbia",
  " Garmeny",
  " Others",
];
const color = [
  "rgba(99, 90, 184, 0.863)",
  "rgba(49, 38, 145, 0.863)",
  "rgba(72, 65, 141, 0.863)",
  "rgba(105, 91, 226, 0.863)",
  "rgba(125, 91, 226, 0.863)",
  "rgba(80, 61, 226, 0.863)",
  "rgba(75, 50, 226, 0.863)",
  "rgba(48, 20, 226, 0.863)",
];
function ChatList() {
  return (
    <div className="flex flex-wrap gap-4 justify-around p-4 overflow-hidden">
      <span className="flex gap-3 flex-col border-[1px] border-gray-400 bg-[#1e1e22ee] flex-grow items-stretch p-4 rounded-md">
        <h5 className="text-[1rem] text-gray-300 font-semibold">
          INTERAST RATE
        </h5>
        <span className="flex justify-center">
          <PiaChat data={data1} color={color} type={"%"} />
        </span>
      </span>
      <span className="flex gap-3 flex-col border-[1px] border-gray-400 bg-[#1e1e22ee] flex-grow items-stretch p-4 rounded-md">
        <h5 className="text-[1rem] text-gray-300 font-semibold">TERMS</h5>
        <span className="flex justify-center">
          <PiaChat data={data2} color={color} type={" months"} />
        </span>
      </span>
      <span className="flex gap-3 flex-col border-[1px] border-gray-400 bg-[#1e1e22ee] flex-grow items-stretch p-4 rounded-md">
        <h5 className="text-[1rem] text-gray-300 font-semibold">MANAGERS</h5>
        <span className="flex justify-center">
          <PiaChat data={data3} color={color} type={" homes"} />
        </span>
      </span>
      <span className="flex gap-3 flex-col border-[1px] border-gray-400 bg-[#1e1e22ee] flex-grow items-stretch p-4 rounded-md">
        <h5 className="text-[1rem] text-gray-300 font-semibold">INVESTORS</h5>
        <span className="flex justify-center">
          <PiaChat data={data4} color={color} type={"%"} subData={subData} />
        </span>
      </span>
    </div>
  );
}
export default ChatList;
