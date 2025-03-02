import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import IconArrowDown from "../assets/image/expand_more_FILL0_wght300_GRAD0_opsz24.svg";
import { checkValueHightLow } from "../config/config";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BloodPressureChart = ({ blood_pressure, diagnosisHistory }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  console.log(diagnosisHistory);

  useEffect(() => {
    if (diagnosisHistory && diagnosisHistory.length > 0) {
      const sortedHistory = [...diagnosisHistory].sort(
        (a, b) =>
          new Date(`${a.month} 1, ${a.year}`) -
          new Date(`${b.month} 1, ${b.year}`)
      );

      const labels = sortedHistory.map(
        (record) => `${record.month}, ${record.year}`
      );

      const systolicValues = sortedHistory.map(
        (record) => record.blood_pressure?.systolic?.value || null
      );
      const diastolicValues = sortedHistory.map(
        (record) => record.blood_pressure?.diastolic?.value || null
      );

      setChartData({
        labels,
        datasets: [
          {
            label: "Systolic",
            data: systolicValues,
            borderColor: "#C26EB4",
            backgroundColor: "#C26EB4",
            pointBackgroundColor: "#E66FD2",
            pointBorderColor: "#fff",
            borderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            tension: 0.4,
            fill: false,
          },
          {
            label: "Diastolic",
            data: diastolicValues,
            borderColor: "#7E6CAB",
            backgroundColor: "#7E6CAB",
            pointBackgroundColor: "#8C6FE6",
            pointBorderColor: "#fff",
            borderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            tension: 0.4,
            fill: false,
          },
        ],
      });
    }
  }, [diagnosisHistory]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: { left: 10, right: 10, top: 0, bottom: 0 },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      x: { grid: { display: true, color: "#e5e7eb" } },
      y: {
        min: 60,
        max: 180,
        ticks: { stepSize: 20 },
        grid: { display: true, color: "#e5e7eb" },
      },
    },
  };

  return (
    <div className="p-[16px] bg-[#F4F0FE] rounded-lg shadow-md w-full flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 md:col-span-2">
          <div className="pb-4 flex justify-between">
            <h5 className="text-[18px] font-bold text-[#072635]">
              Blood Pressure
            </h5>
            <div className="mr-[20px] ">
              <div className="flex items-center">
                <span className="mr-4 text-[14px] text-[#072635 ]">
                  Last 6 months
                </span>{" "}
                <img src={IconArrowDown} alt="" />
              </div>
            </div>
          </div>
          <div className="h-[253px]">
            <Line data={chartData} options={options} />
          </div>
        </div>
        <div className="col-span-3 md:col-span-1">
          {blood_pressure && (
            <>
              <div className="pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-[14px] h-[14px] rounded-full bg-[#E66FD2]"></div>
                  <span className="text-[#072635] font-bold text-[14px]">
                    Systolic
                  </span>
                </div>
                <div className="text-[22px] font-bold text-[#072635] py-2">
                  {blood_pressure?.blood_pressure?.systolic?.value}
                </div>
                <div className="text-[#072635] text-[14px]">
                  {blood_pressure?.blood_pressure?.systolic?.levels === "Normal"
                    ? blood_pressure?.blood_pressure?.systolic?.levels
                    : `${checkValueHightLow(
                        blood_pressure?.blood_pressure?.systolic?.levels
                      )} ${blood_pressure?.blood_pressure?.systolic?.levels}`}
                </div>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-[14px] h-[14px] rounded-full bg-[#8C6FE6]"></div>
                  <span className="text-[#072635] font-bold text-[14px]">
                    Diastolic
                  </span>
                </div>
                <div className="text-[22px] font-bold text-[#072635] py-2">
                  {blood_pressure?.blood_pressure?.diastolic?.value}
                </div>
                <div className="text-[#072635] text-[14px]">
                  {blood_pressure?.blood_pressure?.diastolic?.levels ===
                  "Normal"
                    ? blood_pressure?.blood_pressure?.diastolic?.levels
                    : `${checkValueHightLow(
                        blood_pressure?.blood_pressure?.diastolic?.levels
                      )} ${blood_pressure?.blood_pressure?.diastolic?.levels}`}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;
