import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import React from "react";
import {
  Bar,
  Tooltip,
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";

function Graph({ data }) {
  let arr = [];
  let arr1 = [];
  let arr2 = [];
  
  if (data) {
    data?.incomeExpenses?.incomeExpenses[0]["values"].forEach((item) => {
      arr.push(item);
    });

    data?.incomeExpenses?.quaters.forEach((item) => {
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
// // 
// const theme = useTheme(); //this is from mui
// const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
    <div className="hidden md:flex" style={{ width: '100%', height: 450 }}>
      <ResponsiveContainer>
        <BarChart data={arr2} barCategoryGap={20}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" angle={-40} textAnchor="end" height={80} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div className="flex md:hidden" style={{ width: '100%', height: 300  }}>
      <ResponsiveContainer >
        <BarChart data={arr2} barCategoryGap={20}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" angle={-40} textAnchor="end" height={80} fontSize={10} />
          <YAxis fontSize={10}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" barSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
   
    
    </>
    
  );
}

export default Graph;
