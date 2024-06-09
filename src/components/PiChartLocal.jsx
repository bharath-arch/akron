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

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <p>{`${label} : ₹${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  // const PercentageCustomTooltip = ({ active, payload, label }) => {
  //   if (active && payload && payload.length) {
  //     return (
  //       <div
  //         style={{
  //           backgroundColor: "#fff",
  //           border: "1px solid #ccc",
  //           padding: "10px",
  //         }}
  //       >
  //         <p>{`${label} : ${payload[0].value}%`}</p>
  //       </div>
  //     );
  //   }

  //   return null;
  // };

  const renderLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
    const value = `₹${rawgrapData[index].value}`;

    const xOffset = Math.cos(-midAngle * (Math.PI / 180)) * 10;
    const yOffset = Math.sin(-midAngle * (Math.PI / 180)) * 10;

    return (
      <text
        x={x + xOffset}
        y={y + yOffset}
        fill={colors[index % colors.length]}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${value}`}
      </text>
    );
  };

  const persentLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
    const value = `${percentageGraphData[index].value}%`;

    const xOffset = Math.cos(-midAngle * (Math.PI / 180)) * 10;
    const yOffset = Math.sin(-midAngle * (Math.PI / 180)) * 10;

    return (
      <text
        x={x + xOffset}
        y={y + yOffset}
        fill={colors[(index + 2) % colors.length]}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px",
      }}
    >
      <ResponsiveContainer width="45%" height={400}>
        <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 40 }}>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Pie
            data={rawgrapData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={60}
            label={renderLabel}
            labelLine={false}
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
      <ResponsiveContainer width="45%" height={400}>
        <PieChart margin={{ top: 20, right: 40, bottom: 20, left: 20 }}>
          {/* <Tooltip content={<PercentageCustomTooltip />} /> */}
          <Legend />
          <Pie
            data={percentageGraphData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            label={persentLabel}
            labelLine={false}
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
