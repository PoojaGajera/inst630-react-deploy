import React from 'react';
import{ Doughnut} from "react-chartjs-2";

const data={
  labels: ["Red","Blue","Green","Purple","Yellow"],
  datasets: [{
    data: [12,19,3,5,2]
  }]
};

function DoughnutChart() {
  return (
    <div>
      <h1>Doughnut Chart</h1>
      <Doughnut data={data}/>
    </div>
  );
}

export default DoughnutChart;