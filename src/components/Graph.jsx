import React from "react";
import { Bar, Tooltip, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";

function Graph({ data }) {
  let arr = [];
  let arr1 = [];
  let arr2 = [];
  
  if (data) {
    data?.incomeExpenses.incomeExpenses[0]["values"].forEach((item) => {
      arr.push(item);
    });

    data?.incomeExpenses.quaters.forEach((item) => {
      if (item !== "Column1") {
        arr1.push(item);
      }
    });

    if (arr.length === arr1.length) {
      for (let i = 0; i < arr.length; i++) {
        arr2.push({ sales: arr[i], name: arr1[i] });
      }
      console.log(arr2);
    } else {
      console.log("array lengths do not match");
    }
  }

  return (
    <div>
      <BarChart width={1030} height={450} data={arr2} barCategoryGap={20}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" angle={-40} textAnchor="end" height={80} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" barSize={20} />
      </BarChart>
    </div>
  );
}

export default Graph;
