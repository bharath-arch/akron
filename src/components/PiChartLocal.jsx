import React from "react";
import {
  Tooltip,
  Legend,
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
} from "recharts";

function PiChartLocal({ rawgrapData, percentageGraphData }) {
  const colors = [
    "#FFBB28",
    "#0088FE",
    "#FF8042",
    "#00C49F",
    "#AF19FF",
    "#FF6666",
  ];

  return (
    <div style={{ width: "100%", height: 400 }} className="flex">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip />
          <Legend />
          <Pie
            data={rawgrapData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={60}
            label
            labelLine={false} // Disable label lines to prevent overlap
          >
            {rawgrapData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip />
          <Legend />
          <Pie
            data={percentageGraphData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            label
            labelLine={false} // Disable label lines to prevent overlap
          >
            {percentageGraphData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[(index + 2) % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PiChartLocal;
