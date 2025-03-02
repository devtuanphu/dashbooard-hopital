import React from "react";
import { List, Avatar } from "antd";
import IconSearch from "../assets/image/search_FILL0_wght300_GRAD0_opsz24.svg";
import MoreIcon from "../assets/image/more_horiz_FILL0_wght300_GRAD0_opsz24.png";

const ListPatients = ({ patients }) => {
  return (
    <div className="p-[20px] bg-white rounded-[10px] shadow-md w-full xl:max-h-[117vh] overflow-y-auto custom-scrollbar">
      {/* Sticky Header */}
      <div className="sticky top-[-25px] bg-white z-10 p-3">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-[24px]">Patients</h2>
          <img src={IconSearch} width="18px" height="18px" alt="" />
        </div>
      </div>

      {/* Danh sách bệnh nhân */}
      <List
        itemLayout="horizontal"
        dataSource={patients}
        renderItem={(patient) => (
          <List.Item className="rounded-lg px-4 py-2 flex justify-between items-center ">
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
  );
};

export default ListPatients;
