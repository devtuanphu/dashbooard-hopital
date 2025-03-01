import React, { useState } from "react";
import Logo from "../assets/image/TestLogo.svg";
import HomeIcon from "../assets/image/home_FILL0_wght300_GRAD0_opsz24.svg";
import GroupIcon from "../assets/image/group_FILL0_wght300_GRAD0_opsz24.svg";
import CalendarIcon from "../assets/image/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import ChatIcon from "../assets/image/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg";
import IconTransaction from "../assets/image/credit_card_FILL0_wght300_GRAD0_opsz24.svg";
import AvartarSenior from "../assets/image/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
import SettingIcon from "../assets/image/settings_FILL0_wght300_GRAD0_opsz24.png";
import MoreIcon from "../assets/image/more_vert_FILL0_wght300_GRAD0_opsz24.png";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-[18px] h-[12vh]">
      <div className="bg-white rounded-[70px]">
        <div className="flex justify-between items-center px-[32px] py-[12px]">
          <div>
            <img src={Logo} alt="" width="211px" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-gray-600 text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex gap-8 items-center">
            <div className="px-[16px] py-[11px]">
              <div className="flex items-center">
                <img src={HomeIcon} alt="" />
                <h2 className="ml-[10px] text-[14px] font-bold text-[#072635]">
                  Overview
                </h2>
              </div>
            </div>
            <div className="bg-[#01F0D0] rounded-[41px] px-[16px] py-[11px]">
              <div className="flex items-center">
                <img src={GroupIcon} alt="" />
                <h2 className="ml-[10px] text-[14px] font-bold text-[#072635]">
                  Patients
                </h2>
              </div>
            </div>
            <div className="px-[16px] py-[11px]">
              <div className="flex items-center">
                <img src={CalendarIcon} alt="" />
                <h2 className="ml-[10px] text-[14px] font-bold text-[#072635]">
                  Schedule
                </h2>
              </div>
            </div>
            <div className="px-[16px] py-[11px]">
              <div className="flex items-center">
                <img src={ChatIcon} alt="" />
                <h2 className="ml-[10px] text-[14px] font-bold text-[#072635]">
                  Message
                </h2>
              </div>
            </div>
            <div className="px-[16px] py-[11px]">
              <div className="flex items-center">
                <img src={IconTransaction} alt="" />
                <h2 className="ml-[10px] text-[14px] font-bold text-[#072635]">
                  Transactions
                </h2>
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="hidden xl:flex items-center gap-4">
            <div className="flex items-center gap-[8px] border-r border-[#EDEDED] pr-4">
              <img src={AvartarSenior} width="44px" height="44px" alt="" />
              <div>
                <h2 className="text-[#072635] text-[14px] font-bold">
                  Dr. Jose Simmons
                </h2>
                <p className="text-[14px] text-[#707070]">
                  General Practitioner
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2">
                <img src={SettingIcon} alt="" />
                <img src={MoreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg p-4 mt-2 z-99">
            <div className="px-[16px] py-[11px]">
              <div className="flex items-center">
                <img src={HomeIcon} alt="" />
                <h2 className="ml-[10px] text-[14px] font-bold text-[#072635]">
                  Overview
                </h2>
              </div>
            </div>
            <div className="bg-[#01F0D0] rounded-[41px] px-[16px] py-[11px]">
              <div className="flex items-center">
                <img src={GroupIcon} alt="" />
                <h2 className="ml-[10px] text-[14px] font-bold text-[#072635]">
                  Patients
                </h2>
              </div>
            </div>
            <div className="px-[16px] py-[11px]">
              <div className="flex items-center">
                <img src={CalendarIcon} alt="" />
                <h2 className="ml-[10px] text-[14px] font-bold text-[#072635]">
                  Schedule
                </h2>
              </div>
            </div>
            <div className="px-[16px] py-[11px]">
              <div className="flex items-center">
                <img src={ChatIcon} alt="" />
                <h2 className="ml-[10px] text-[14px] font-bold text-[#072635]">
                  Message
                </h2>
              </div>
            </div>
            <div className="px-[16px] py-[11px]">
              <div className="flex items-center">
                <img src={IconTransaction} alt="" />
                <h2 className="ml-[10px] text-[14px] font-bold text-[#072635]">
                  Transactions
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
