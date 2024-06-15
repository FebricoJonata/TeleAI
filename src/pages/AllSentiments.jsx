import { Button } from "@mui/material";
import BaseTextField from "../components/BaseTextField";
import BaseSidebar from "../layout/Sidebar";
import BaseButton from "../components/BaseButton";
import DoughnutChart from "../components/DonutChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";

Chart.register(CategoryScale);

export default function AllSentiments() {

    const Data = [
        {
          id: 1,
          mood: "Positive",
          users: 100,
        },
        {
          id: 2,
          mood: "Negative",
          users: 40,
        },
        {
          id: 3,
          mood: "Neutral",
          users: 500,
        },
    ];

    const [chartData] = useState({
        type: "doughnut",
        labels: Data.map((data) => data.mood), 
        datasets: [
          {
            // label: "Users Gained ",
            data: Data.map((data) => data.users),
            backgroundColor: [
              "#DF79FF",
              "#FF99FD",
              "#7B53FF",
            ],
            borderColor: "transparent",
            borderWidth: 2
          }
        ]
    });

    return (
        <div className="flex flex-row h-screen min-h-screen w-screen bg-brand-blurry overflow-hidden">
            <BaseSidebar/>
            <div className="flex flex-col p-[40px] overflow-y-scroll no-scrollbar w-full">
                <p className="text-[24px] text-white">In this month, this is the overall mood of your customers</p>
                <div className="flex items-center h-full w-full">
                    <div className="flex flex-col justify-center gap-10 w-2/5 h-full">
                        <BaseTextField type="date" title="Start" isFullWidth="true" placeholder="mm/dd/yyyy" />
                        <BaseTextField type="date" title="End" isFullWidth="true" placeholder="mm/dd/yyyy"/>
                        <BaseButton title={"Check"}/> 
                    </div>
                    <DoughnutChart chartData={chartData} />
                </div>
            </div>
        </div>
    );
}
