import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement);

const CircleStat = () => {
  return (
    <Doughnut
      data={{
        labels: ["correct", "success", "ignoré"],
        datasets: [
          {
            label: "test",
            data: [20, 70, 10],
            borderWidth: 1,
            backgroundColor: ["#2D907F", "#ed797b", "#eee"],
          },
        ],
      }}
    />
  );
};

export default CircleStat;
