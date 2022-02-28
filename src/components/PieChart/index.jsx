import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Charts = ({ chartData, getColors }) => {
  // const [color, setColor] = useState(null);
  // useEffect(() => {
  //   console.log(color, "from pie");
  //   // getColors(color);
  // }, [color, getColors]);

  // console.log(color);

  return (
    <PieChart width={600} height={600}>
      <Pie
        data={chartData}
        dataKey='value'
        nameKey='name'
        cx='50%'
        cy='50%'
        innerRadius={40}
        outerRadius={120}
        fill='#82ca9d'>
        {chartData.map((entry, index) => {
          return (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          );
        })}
      </Pie>
    </PieChart>
  );
};

export default Charts;
