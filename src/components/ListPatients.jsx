import React from "react";
import { List, Avatar } from "antd";
import IconSearch from "../assets/image/search_FILL0_wght300_GRAD0_opsz24.svg";
import MoreIcon from "../assets/image/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";

const ListPatients = ({ patients }) => {
  return (
    <div className="p-[20px] bg-white rounded-[16px] shadow-md w-full xl:max-h-[85vh] overflow-y-auto custom-scrollbar">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-[24px]">Patients</h2>
        <img src={IconSearch} width="18px" height="18px" alt="Search" />
      </div>

      {/* Patients List Section */}
      <List
        itemLayout="horizontal"
        dataSource={patients}
        renderItem={(patient) => (
          <div
            className={`mx-[-20px] px-[20px] transition-colors ${
              patient.name === "Jessica Taylor"
                ? "bg-[#D0F4EF]" // Always active color for Jessica
                : "hover:bg-[#D0F4EF] active:bg-[#D0F4EF]"
            }`}
          >
            <List.Item className="rounded-lg px-4 py-2 flex justify-between items-center !border-none cursor-pointer">
              {/* Patient Info Section */}
              <List.Item.Meta
                avatar={<Avatar src={patient.profile_picture} size={48} />}
                title={<span className="font-bold">{patient.name}</span>}
                description={`${patient.gender}, ${patient.age}`}
              />

              {/* More Options Section */}
              <div>
                <img
                  src={MoreIcon}
                  alt="More options"
                  className="w-5 cursor-pointer self-center"
                />
              </div>
            </List.Item>
          </div>
        )}
      />
    </div>
  );
};

export default ListPatients;
