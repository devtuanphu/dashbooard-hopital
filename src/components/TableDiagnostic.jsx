import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Problem/Diagnosis",
    dataIndex: "name",
    key: "name",
    className: "!font-bold !text-[#072635] custom-font-family",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    className: "!text-[#072635] custom-font-family",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    align: "right",
  },
];

const TableDiagnostic = ({ diagnosticList }) => {
  if (!diagnosticList || diagnosticList.length === 0) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md w-full ">
        <h2 className="text-[24px] font-bold mb-4 text-[#072635]">
          Diagnostic List
        </h2>
        <p className="text-[#072635] text-center">
          No diagnostic data available.
        </p>
      </div>
    );
  }

  const formattedData = diagnosticList.map((item, index) => ({
    key: index + 1,
    name: item.name,
    description: item.description,
    status: item.status,
  }));

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full">
      <h2 className="text-[24px] font-bold mb-4 text-[#072635]">
        Diagnostic List
      </h2>
      <Table
        columns={columns}
        dataSource={formattedData}
        pagination={false}
        bordered={false}
        scroll={{ y: 200 }} // Cuộn dọc
        className="custom-table"
      />
    </div>
  );
};

export default TableDiagnostic;
