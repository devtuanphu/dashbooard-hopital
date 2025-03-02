import React from "react";
import BirthIcon from "../assets/image/BirthIcon.svg";
import FemaleIcon from "../assets/image/FemaleIcon.svg";
import PhoneIcon from "../assets/image/PhoneIcon.svg";
import InsuranceIcon from "../assets/image/InsuranceIcon.svg";
import Layer2 from "../assets/image/Layer 2.png";
import TableResults from "./TableResults";
import { convertDateOfBirth } from "../config/config";

const DetailPatients = ({ jessicaData }) => {
  return (
    <>
      {jessicaData && (
        <>
          {" "}
          <div className="bg-[#FFFFFF] rounded-[16px] ">
            <div className="px-[84px] pt-[32px] flex justify-center">
              <img
                src={jessicaData?.profile_picture}
                width="200px"
                height="200px"
                alt=""
              />
            </div>
            <h2 className="text-center pt-[24px] font-bold text-[24px]">
              {jessicaData?.name}
            </h2>
            <div className="py-[40px] px-[20px]">
              <div className="flex flex-col gap-6">
                <div className="flex gap-[16px]">
                  <div>
                    <img src={BirthIcon} width={42} height={42} alt="" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-medium text-[#072635]">
                      Date Of Birth
                    </h4>
                    <p className="text-[14px] font-bold text-[#072635]">
                      {convertDateOfBirth(jessicaData?.date_of_birth)}
                    </p>
                  </div>
                </div>
                <div className="flex gap-[16px]">
                  <div>
                    <img src={FemaleIcon} width={42} height={42} alt="" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-medium text-[#072635]">
                      Gender
                    </h4>
                    <p className="text-[14px] font-bold text-[#072635]">
                      {jessicaData?.gender}
                    </p>
                  </div>
                </div>
                <div className="flex gap-[16px]">
                  <div>
                    <img src={PhoneIcon} width={42} height={42} alt="" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-medium text-[#072635]">
                      Contact Info.
                    </h4>
                    <p className="text-[14px] font-bold text-[#072635]">
                      {jessicaData?.phone_number}
                    </p>
                  </div>
                </div>
                <div className="flex gap-[16px]">
                  <div>
                    <img src={PhoneIcon} width={42} height={42} alt="" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-medium text-[#072635]">
                      Emergency Contacts
                    </h4>
                    <p className="text-[14px] font-bold text-[#072635]">
                      {jessicaData?.emergency_contact}
                    </p>
                  </div>
                </div>
                <div className="flex gap-[16px]">
                  <div>
                    <img src={InsuranceIcon} width={42} height={42} alt="" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-medium text-[#072635]">
                      Insurance Provider
                    </h4>
                    <p className="text-[14px] font-bold text-[#072635]">
                      {jessicaData?.insurance_type}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center pb-[32px]">
              <button className="px-[40px] py-[11px] bg-[#01F0D0] text-[#072635] font-bold text-[14px] rounded-[41px]">
                Show All Information
              </button>
            </div>
          </div>
          <div className="pt-[20px]">
            <TableResults lab_results={jessicaData?.lab_results} />
          </div>
        </>
      )}
    </>
  );
};

export default DetailPatients;
