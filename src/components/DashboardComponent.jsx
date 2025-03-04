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
    <div className="grid grid-cols-12 gap-[32px]  h-full grid-rows-1">
      <div className="order-0 xl:order-0 col-span-12 xl:col-span-3 flex flex-col h-full mt-4">
        <ListPatients patients={patients} />
      </div>

      <div className="order-0 xl:order-1 col-span-12 xl:col-span-6 flex flex-col h-full mt-4">
        <MainContent jessicaData={jessicaData} />
      </div>

      <div className="order-1 xl:order-2 col-span-12 xl:col-span-3 max-h-[930px]">
        <DetailPatients jessicaData={jessicaData} />
      </div>
    </div>
  );
};

export default DashboardComponent;
