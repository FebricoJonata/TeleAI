import React from "react";
import { Doughnut } from "react-chartjs-2";

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
                            style: "bold",
                            size: 16
                        }
                    }
                },
            }
          }}
        />
      </div>
    );
  }
export default DoughnutChart;