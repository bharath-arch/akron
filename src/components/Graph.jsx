
import React from "react";
import { Bar, Tooltip, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";


function Graph(props) {
  return (
    <div>
      <BarChart width={1030} height={450} data={props.data} barCategoryGap={20} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" angle={-40} textAnchor="end" height={80}/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" barSize={20} />
      </BarChart>
    </div>
  );
};

export default Graph;
