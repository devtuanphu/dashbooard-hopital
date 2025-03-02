import React from "react";
import { Table } from "antd";
import IconDown from "../assets/image/download_FILL0_wght300_GRAD0_opsz24 (1).svg";

const columns = [
  {
    dataIndex: "value",
    key: "value",
    className: "!text-[#072635] custom-font-family",
    render: (text) => (
      <div className="flex justify-between items-center w-full">
        <span>{text}</span>
        <button className="text-[#072635] hover:text-blue-500">
          <img src={IconDown} alt="" />
        </button>
      </div>
    ),
  },
];

const TableResults = ({ lab_results }) => {
  if (!lab_results || lab_results.length === 0) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md w-full">
        <h2 className="text-[24px] font-bold mb-4 text-[#072635]">
          Lab Results
        </h2>
        <p className="text-[#072635] text-center">No lab results available.</p>
      </div>
    );
  }

  const formattedData = lab_results.map((item, index) => ({
    key: index + 1,
    value: item,
  }));

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full">
      <h2 className="text-[24px] font-bold mb-4 text-[#072635]">Lab Results</h2>
      <div className="custom-table-container">
        <Table
          columns={columns}
          dataSource={formattedData}
          pagination={false}
          bordered={false}
          scroll={{ y: 200, x: "max-content" }} // ✅ Đảm bảo không tạo cột scroll riêng
          className="custom-table custom-scrollbar"
          showHeader={false}
        />
      </div>
    </div>
  );
};

export default TableResults;
