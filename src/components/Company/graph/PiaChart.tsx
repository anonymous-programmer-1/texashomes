import { PieChart, Pie, Cell, Tooltip } from "recharts";
type Data = {
  name: string;
  value: number;
};
type DataType = {
  data: Data[];
  color: string[];
  type: string;
  subData?: string[];
};

function PiaChat(props: DataType) {
  const data = props.data;
  const color = props.color;
  const type = props.type;
  const subData = props.subData;
  if (!data || !color || !type) return;
  return (
    <>
      <div className="flex items-center  w-full">
        <PieChart width={230} height={300}>
          <Pie data={data} dataKey="value">
            {data.map((_, i) => {
              return <Cell key={`cell-${i}`} fill={color[i]} />;
            })}
          </Pie>
          <Tooltip />
        </PieChart>
        <div className="mt-[-40px] ">
          {data.map((e, i) => {
            return (
              <span
                className="flex items-center overflow-hidden"
                key={`values-${i}`}
              >
                <span
                  className="w-3 h-3 block rounded-full"
                  style={{
                    backgroundColor: `${color[i]}`,
                  }}
                ></span>
                <h5 className="text-gray-300 font-semibold ml-0.5 text-[0.8rem] overflow-hidden">
                  {e.value}
                  {type}
                  {subData && subData[i]}
                </h5>
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default PiaChat;
