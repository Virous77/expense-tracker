import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar.js";

const Chart = (props) => {
  const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValue);

  return (
    <section className="chart">
      {props.dataPoints.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={totalMaximum}
          label={item.label}
        />
      ))}
    </section>
  );
};

export default Chart;
