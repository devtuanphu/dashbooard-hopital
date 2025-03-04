import React, { useState } from "react";
import { List, Avatar } from "antd";
import IconSearch from "../assets/image/search_FILL0_wght300_GRAD0_opsz24.svg";
import MoreIcon from "../assets/image/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";

const ListPatients = ({ patients }) => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <div className=" bg-white rounded-[16px] shadow-md w-full">
      {/* Header section with title and search icon */}
      <div className=" bg-white z-10 rounded-[16px] p-[20px]">
        <div className="flex justify-between items-center ">
          <h2 className="font-bold text-[24px]">Patients</h2>
          <img src={IconSearch} width="18px" height="18px" alt="Search Icon" />
        </div>
      </div>

      {/* Scrollable patient list container with padding-bottom */}
      <div className="xl:max-h-[930px] overflow-y-auto custom-scrollbar mb-[30px] mr-[5px]  ">
        <List
          itemLayout="horizontal"
          dataSource={patients}
          renderItem={(patient) => (
            <List.Item
              className={`cursor-pointer !border-none custom-font-family
              ${
                selectedPatient === patient.name ||
                patient.name === "Jessica Taylor"
                  ? "bg-[#D8FCF7]" // Highlight selected patient and "Jessica Taylor"
                  : "hover:bg-[#D8FCF7]" // Apply hover effect for other patients
              }`}
              onClick={() => setSelectedPatient(patient.name)}
            >
              <List.Item.Meta
                avatar={<Avatar src={patient.profile_picture} size={48} />}
                title={<span className="font-bold">{patient.name}</span>}
                description={`${patient.gender}, ${patient.age}`}
                className="pl-[7px]"
              />
              <div>
                <img
                  src={MoreIcon}
                  alt="More options"
                  className="w-5 cursor-pointer self-center"
                />
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ListPatients;
