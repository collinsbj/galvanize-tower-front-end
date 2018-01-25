import React from "react";
import { Bar } from "react-chartjs-2";

function LaptopChart(props) {
  const data = {
    labels: props.data.map(item => {
      return item.laptopName;
    }),
    datasets: [
      {
        label: "Price",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)"
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)"
        ],
        borderWidth: 1,
        data: props.data.map(item => {
          return item.price;
        })
      }
    ]
  };
  return (
    <div className="chart">
      <h2>Compare Laptop Prices</h2>
      <Bar
        data={data}
        width={100}
        height={100}
        options={{
          maintainAspectRatio: false,
          legend: false
        }}
      />
    </div>
  );
}

export default LaptopChart;
