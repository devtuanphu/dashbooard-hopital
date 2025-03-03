import React from "react";

const TableDiagnostic = ({ diagnosticList }) => {
  if (!diagnosticList || diagnosticList.length === 0) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md w-full">
        <h2 className="text-[24px] font-bold mb-4 text-[#072635]">
          Diagnostic List
        </h2>
        <p className="text-[#072635] text-center">
          No diagnostic data available.
        </p>
      </div>
    );
  }

  return (
    <div className="pt-[20px] pb-[10px] px-[20px] bg-white rounded-lg shadow-md w-full relative">
      <h2 className="text-[24px] font-bold mb-4 text-[#072635]">
        Diagnostic List
      </h2>

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="custom-tbody">
            {diagnosticList.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDiagnostic;
