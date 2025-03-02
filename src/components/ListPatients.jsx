import React, { useState } from "react";
import { List, Avatar } from "antd";
import IconSearch from "../assets/image/search_FILL0_wght300_GRAD0_opsz24.svg";
import MoreIcon from "../assets/image/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";

const ListPatients = ({ patients }) => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <div className="p-[20px] bg-white rounded-[16px] shadow-md w-full">
      <div className="sticky top-[-25px] bg-white z-10 p-3">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-[24px]">Patients</h2>
          <img src={IconSearch} width="18px" height="18px" alt="" />
        </div>
      </div>

      {/* Danh sách bệnh nhân có scrollbar sát mép */}
      <div className="xl:max-h-[930px] overflow-y-auto custom-scrollbar mr-[-16px]">
        <List
          itemLayout="horizontal"
          dataSource={patients}
          renderItem={(patient) => (
            <List.Item
              className={`rounded-lg px-[20px] py-2 flex justify-between items-center cursor-pointer !border-none 
              ${
                selectedPatient === patient.name ||
                patient.name === "Jessica Taylor"
                  ? "bg-[#D8FCF7]"
                  : "hover:bg-[#D8FCF7]"
              }`}
              onClick={() => setSelectedPatient(patient.name)}
            >
              <List.Item.Meta
                avatar={<Avatar src={patient.profile_picture} size={48} />}
                title={<span className="font-medium">{patient.name}</span>}
                description={`${patient.gender}, ${patient.age}`}
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
