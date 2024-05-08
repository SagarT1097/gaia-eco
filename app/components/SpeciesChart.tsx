//Chart to display the number of Arctic Foxes by country in the Insights page of the Dashboard Analytics.
"use client";
import { FC, useEffect, useState } from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

interface Location {
  id: string;
  latitude: number;
  longitude: number;
  region: string;
  country: string;
}

const SpeciesChart: FC<{ data: Location[] }> = ({ data }) => {
  const [speciesCount, setSpeciesCount] = useState<{ [key: string]: number }>(
    {}
  );

  useEffect(() => {
    const countSpeciesByCountry = () => {
      const count: { [key: string]: number } = {};
      data.forEach((location) => {
        count[location.country] = count[location.country]
          ? count[location.country] + 1
          : 1;
      });
      setSpeciesCount(count);
    };

    countSpeciesByCountry();
  }, [data]);

  const chartData = {
    labels: Object.keys(speciesCount),
    datasets: [
      {
        label: "Number of Arctic Foxes by Country",
        data: Object.values(speciesCount),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(23, 162, 184, 0.2)",
          "rgba(235, 23, 162, 0.2)",
          "rgba(162, 235, 23, 0.2)",
          "rgba(162, 23, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(23, 162, 184, 1)",
          "rgba(235, 23, 162, 1)",
          "rgba(162, 235, 23, 1)",
          "rgba(162, 23, 235, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="max-w-lg  mt-8">
      <Bar data={chartData} />
    </div>
  );
};

export default SpeciesChart;
