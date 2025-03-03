import React from "react";
import IconDown from "../assets/image/download_FILL0_wght300_GRAD0_opsz24 (1).svg";

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

  return (
    <div className="p-6 bg-white rounded-[16px] shadow-md w-full">
      <h2 className="text-[24px] font-bold mb-4 text-[#072635]">Lab Results</h2>

      <div className="custom-table-container">
        <table className="custom-table">
          <tbody className="custom-tbody">
            {lab_results.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <td className="flex justify-between items-center w-full px-4 py-2">
                  <span>{item}</span>
                  <button className="text-[#072635] hover:text-blue-500">
                    <img src={IconDown} alt="Download" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableResults;
