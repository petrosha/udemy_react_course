import React, { useState } from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const maxValue = Math.max(...props.items.map(el => el.value));
  
  return (
    <div className="chart">
      {props.items.map(el => (
        <ChartBar 
          key={ el.label }
          value={ el.value }
          maxValue={ maxValue }
          label={ el.label }
        />
      ))
      }
    </div>
  );
};

export default Chart;