import { Button } from "@mui/material";
import BaseTextField from "../components/BaseTextField";
import BaseSidebar from "../layout/Sidebar";
import BaseButton from "../components/BaseButton";
import DoughnutChart from "../components/DonutChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { userLoginSession } from "../services/localStorage";

Chart.register(CategoryScale);

export default function AllSentiments() {

  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  var happy = 0; var sad = 0; var neutral = 0;
  const url = "https://code-jeans-backend-v1.vercel.app/api/feedback/all";
  const token = userLoginSession.getToken(); 
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const allSentiment = async(startDate, endDate) => {
    console.log(startDate, endDate);
    var listSentiments = [];
    try {
      const res = await axios.get(url, config).then((res) => {
        console.log(res);

        if(res.status===200){
          const sentimentData = res.data.body.data;
          sentimentData.map((sentiment)=> {
            var date = new Date(sentiment.created_at);
            console.log("Created at", date);
            if(date > startDate)
            listSentiments.push({
              category: sentiment.category,
              date: sentiment.created_at
            });
          })
        }
      })
    } catch (error) {
      console.log("error", error);
    }

    if(listSentiments.length!=0){
      console.log("Masuk");
      for (let i = 0; i < listSentiments.length; i++) {
        // if()
        console.log("List sentiment", listSentiments[i].created_at);
        if(listSentiments[i].category==="positive"){
          happy++;
        }
        else if(listSentiments[i].category==="negative"){
          sad++;
        }
        else {
          neutral++;
        }
      }
    }

    setChartData()
    Chart.update()
  }

    var Data = [
        {
          id: 1,
          mood: "Positive",
          users: 40,
        },
        {
          id: 2,
          mood: "Negative",
          users: 10,
        },
        {
          id: 3,
          mood: "Neutral",
          users: 20,
        },
    ];

    const [chartData, setChartData] = useState({
        type: "doughnut",
        labels: Data.map((data) => data.mood), 
        datasets: [
          {
            // label: "Users Gained ",
            data: Data.map((data) => data.users),
            backgroundColor: [
              "#7B53FF",
              "#FF99FD",
              "#DF79FF",
            ],
            borderColor: "transparent",
            borderWidth: 2
          }
        ]
    });

    useEffect(() => {
        
    }, []);

    return (
        <div className="flex flex-row h-screen min-h-screen w-screen bg-brand-blurry overflow-hidden">
            <BaseSidebar/>
            <div className="flex flex-col p-[40px] overflow-y-scroll no-scrollbar w-full">
                <p className="text-[24px] text-white">Overall mood of your customers</p>
                <div className="flex items-center h-full w-full">
                    <div className="flex flex-col justify-center gap-10 w-2/5 h-full">
                        <BaseTextField type="date" title="Start" isFullWidth="true" placeholder="mm/dd/yyyy" value={date1} onValueChanged={setDate1}/>
                        <BaseTextField type="date" title="End" isFullWidth="true" placeholder="mm/dd/yyyy" value={date2} onValueChanged={setDate2}/>
                        <BaseButton title={"Check"} action={() => allSentiment(date1, date2)} /> 
                    </div>
                    <DoughnutChart chartData={chartData}/>
                </div>
            </div>
        </div>
    );
}
