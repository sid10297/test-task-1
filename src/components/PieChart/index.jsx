import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import "./index.css";

const COLORS = ["#A259FF", "#6497B1", "#FFC107", "#F24E1E"];

const Charts = ({ chartData }) => {
  return (
    <PieChart width={600} height={400}>
      <Legend
        layout='horizontal'
        verticalAlign='top'
        width={600}
        align='left'
        payload={chartData.map((item, index) => ({
          id: item.name,
          type: "square",
          value: `${item.name}`,
          color: COLORS[index],
        }))}
      />
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
