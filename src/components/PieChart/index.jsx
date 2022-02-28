import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Charts = ({ chartData }) => {
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
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Charts;
