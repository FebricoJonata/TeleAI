import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

// Chart.plugins.register({
//   afterDraw: function(chart) {
//     if (chartData.datasets[0].data.every(item => item === 0)) {
//         let ctx = chart.chart.ctx;
//         let width = chart.chart.width;
//         let height = chart.chart.height;

//         console.log("Chart is empty");

//         chart.clear();
//         ctx.save();
//         ctx.textAlign = 'center';
//         ctx.textBaseline = 'middle';
//         ctx.fillText('No data to display', width / 2, height / 2);
//         ctx.restore();
//     }
//   }
// })

function DoughnutChart({ chartData }) {
    return (
      <div className="chart-container flex flex-col w-3/5 h-full items-end">
        <Doughnut
          data={chartData}
          options ={{
            plugins: {
                legend: {
                    position: "right",
                    labels: {
                        color: "white",
                        font: {
                            weight: "bold",
                            size: 16
                        }
                    }
                },
            },
          }}
        />
      </div>
    );
  }
export default DoughnutChart;