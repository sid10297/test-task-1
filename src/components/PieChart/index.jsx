import React from "react";
import { PieChart, Pie } from "recharts";

const Charts = ({ chartData }) => {
  console.log(chartData, "====");
  return (
    <PieChart width={700} height={700}>
      <Pie
        data={chartData}
        dataKey='value'
        nameKey='name'
        cx='50%'
        cy='50%'
        innerRadius={60}
        outerRadius={80}
        fill='#82ca9d'
        label
      />
    </PieChart>
  );
};

export default Charts;
