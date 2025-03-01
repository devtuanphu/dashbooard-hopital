import React from "react";
import Heart from "../assets/image/respiratory rate.svg";
import Tempreature from "../assets/image/temperature.svg";
import HeartBPM from "../assets/image/HeartBPM.svg";
import { checkValueHightLow } from "../config/config";

const Status = ({ averageHeart, averageRespiratory, averageTemperature }) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-[21px]">
        <div className="col-span-12 xl:col-span-4 bg-[#E0F3FA] rounded-[12px] p-4">
          <img src={Heart} alt="" width={96} height={96} />
          {averageHeart && (
            <>
              <div className="py-4">
                <span className="text-[#072635] text-[16px] font-medium">
                  Respiratory Rate
                </span>
                <h2 className="text-[#072635] font-bold text-[32px]">
                  {averageHeart?.heart_rate?.value} bpm
                </h2>
              </div>
              <h5 className="text-[#072635] text-[14px] font-medium">
                {" "}
                {averageHeart?.heart_rate?.levels === "Normal"
                  ? averageHeart?.heart_rate?.levels
                  : `${checkValueHightLow(averageHeart?.heart_rate?.levels)} ${
                      averageHeart?.heart_rate?.levels
                    }`}
              </h5>
            </>
          )}
        </div>
        <div className="col-span-12 xl:col-span-4 bg-[#FFE6E9] rounded-[12px] p-4">
          <img src={Tempreature} alt="" width={96} height={96} />
          {averageRespiratory && (
            <>
              <div className="py-4">
                <span className="text-[#072635] text-[16px] font-medium">
                  Temperature
                </span>
                <h2 className="text-[#072635] font-bold text-[32px]">
                  {" "}
                  {averageRespiratory?.respiratory_rate?.value}°F
                </h2>
              </div>
              <h5 className="text-[#072635] text-[14px] font-medium">
                {averageRespiratory?.respiratory_rate?.levels === "Normal"
                  ? averageRespiratory?.respiratory_rate?.levels
                  : `${checkValueHightLow(
                      averageRespiratory?.respiratory_rate?.levels
                    )} ${averageRespiratory?.respiratory_rate?.levels}`}
              </h5>
            </>
          )}
        </div>
        <div className="col-span-12 xl:col-span-4 bg-[#FFE6F1] rounded-[12px] p-4">
          <img src={HeartBPM} alt="" width={96} height={96} />
          {averageTemperature && (
            <>
              {" "}
              <div className="py-4">
                <span className="text-[#072635] text-[16px] font-medium">
                  Heart Rate
                </span>
                <h2 className="text-[#072635] font-bold text-[32px]">
                  {" "}
                  {averageTemperature?.temperature?.value}°F
                </h2>
              </div>
              <h5 className="text-[#072635] text-[14px] font-medium">
                {averageTemperature?.temperature?.levels === "Normal"
                  ? averageTemperature?.temperature?.levels
                  : `${checkValueHightLow(
                      averageTemperature?.temperature?.levels
                    )} ${averageTemperature?.temperature?.levels}`}
              </h5>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Status;
