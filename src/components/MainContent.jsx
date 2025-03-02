import React from "react";
import BloodPressureChart from "./BloodPressureChart";
import Status from "./Status";
import TableDiagnostic from "./TableDiagnostic";
import { useState, useEffect } from "react";
import {
  getAverageBloodPressure,
  getAverageHeartRate,
  getAverageRespiratoryRate,
  getAverageTemperature,
  getRecentDiagnosisHistory,
} from "../service/Patient";

const MainContent = ({ jessicaData }) => {
  const [blood_pressure, setBlood_pressure] = useState(null);
  const [diagnosisHistory, setDiagnosisHistory] = useState([]);
  const [diagnosticList, setDiagnosticList] = useState([]);
  const [averageHeart, setAverageHeart] = useState(null);
  const [averageRespiratory, setAverageRespiratory] = useState(null);
  const [averageTemperature, setAverageTemperature] = useState(null);

  const getAverageBloodPressureFC = async () => {
    try {
      const data = await getAverageBloodPressure();
      setBlood_pressure(data);
    } catch (error) {
      console.error(error);
    }
  };
  const getAverageHeartRateFC = async () => {
    try {
      const data = await getAverageHeartRate();
      setAverageHeart(data);
    } catch (error) {
      console.error(error);
    }
  };
  const getAverageRespiratoryRateFC = async () => {
    try {
      const data = await getAverageRespiratoryRate();
      setAverageRespiratory(data);
    } catch (error) {
      console.error(error);
    }
  };
  const getAverageTemperatureFC = async () => {
    try {
      const data = await getAverageTemperature();
      setAverageTemperature(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getRecentDiagnosisHistoryFC = async () => {
    try {
      const data = await getRecentDiagnosisHistory();
      setDiagnosisHistory(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAverageBloodPressureFC();
    getAverageHeartRateFC();
    getAverageRespiratoryRateFC();
    getAverageTemperatureFC();
    getRecentDiagnosisHistoryFC();
  }, []);
  useEffect(() => {
    if (jessicaData && jessicaData.diagnostic_list) {
      setDiagnosticList(jessicaData.diagnostic_list);
    }
  }, [jessicaData]);

  return (
    <div className="xl:h-[88vh] custom-scrollbar overflow-y-auto flex flex-col">
      <div className="bg-[#fff] p-[20px] md:flex-1 ">
        <h1 className="pb-4 font-bold text-[#072635] text-[24px]">
          Diagnosis History
        </h1>
        <BloodPressureChart
          blood_pressure={blood_pressure}
          diagnosisHistory={diagnosisHistory}
        />
        <div className="pt-[20px]">
          <Status
            averageHeart={averageHeart}
            averageRespiratory={averageRespiratory}
            averageTemperature={averageTemperature}
          />
        </div>
      </div>

      <div className="pt-[20px] xl:flex-1 ">
        <TableDiagnostic diagnosticList={diagnosticList} />
      </div>
    </div>
  );
};

export default MainContent;
