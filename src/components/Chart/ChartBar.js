import React from "react";
import "./ChartBar.css";

const ChartBar = ( props ) => {
  let fillHeight = "0%";
  
  if(props.maxValue > 0 ) fillHeight = Math.round(100 * props.value / props.maxValue) + "%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div 
          style={{ height: fillHeight }}
          className="chart-bar__fill"
          
        >
        </div>
      </div>
      <p className="chart-bar__label">{props.label}</p>    
    </div>
  );
};

export default ChartBar;