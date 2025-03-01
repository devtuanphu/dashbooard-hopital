import React, { useEffect, useState } from "react";
import ListPatients from "./ListPatients";
import MainContent from "./MainContent";
import DetailPatients from "./DetailPatients";
import { getAllPatients } from "../service/Patient";
import { getJessicaTaylor } from "../service/Patient";

const DashboardComponent = () => {
  const [patients, setPatients] = useState([]);
  const [jessicaData, setJessicaData] = useState(null);
  const getPatients = async () => {
    try {
      const data = await getAllPatients();
      setPatients(data);
    } catch (error) {
      console.error(error);
    }
  };
  const getJessica = async () => {
    try {
      const data = await getJessicaTaylor();
      setJessicaData(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPatients();
    getJessica();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-[33px] xl:h-[88vh] xl:overflow-hidden">
      <div className="order-2 xl:order-0 col-span-12 xl:col-span-3 h-full overflow-hidden">
        <ListPatients patients={patients} />
      </div>

      <div className="order-0 xl:order-1  col-span-12 xl:col-span-6 h-full overflow-auto">
        <MainContent jessicaData={jessicaData} />
      </div>

      {/* Cột trống (nếu cần) */}
      <div className="order-1 xl:order-2  col-span-12 xl:col-span-3 custom-scrollbar overflow-y-auto">
        <DetailPatients jessicaData={jessicaData} />
      </div>
    </div>
  );
};

export default DashboardComponent;
