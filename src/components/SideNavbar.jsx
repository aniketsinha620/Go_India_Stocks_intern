import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";

import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";

import Link from "next/link";

const SideNavbar = ({ isOpen, toggleNavbar }) => {
  const menus = [
    { name: "Disscussion Fourm", Link: "/", icon: FiMessageSquare },
    { name: "Market stories", Link: "/", icon: AiOutlineUser },
    { name: "Sentiments", Link: "/", icon: MdOutlineDashboard },
    { name: "Market", Link: "/", icon: TbReportAnalytics, margin: true },
    { name: "Sector", Link: "/", icon: FiFolder },
    { name: "WatchList", Link: "/", icon: FiShoppingCart },
    { name: "Event", Link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", Link: "/", icon: RiSettings4Line },
  ];

  return (
    <section className="flex gap-6  fixed md:relative  ">

      <div
        className={` min-h-screen  ${isOpen ? "w-72  bg-[#03045e]" : ""
          } duration-500 text-gray-100  flex`}
      >
        <div className={`duration-500  flex gap-2   ${!isOpen ? "hidden" : ""
          }`}>
          <div className="mt-4 h-[9%] md:h-[10%] md:fixed flex w-72 px-5 justify-between border-solid border-2 border-b-white border-[#03045e]">
            <div className=" gap-1 flex  align-center justify-center">
              <IoMdPerson
                size={36} />
              <h3 className="text-[20px]">Hello,User</h3>
            </div>
            <div>
              <IoNotificationsOutline
                size={26} />
            </div>
          </div>
        </div>
        <div className="mt-[100px] flex flex-col gap-4 fixed mt-4">

          {menus?.map((menu, i) => (
            <div
              href={menu?.link}
              key={i}
              className={` ${menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2  rounded-md`}
            >
              <h2
                style={{
                  transitionDelay: `${i}00ms`,
                }}
                className={`whitespace-pre duration-500  flex gap-2 ${!isOpen && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                {menu?.name}
              </h2>
            </div>
          ))}
        </div>
        <div
          className={`py-3 flex justify-end fixed top-[330px] md:top-[250px] duration-1500 ${isOpen ? "left-[250px]" : "left-0"
            } transition-all fixed bg-[#023e8a] rounded`}
        >
          <IoMdArrowDropleftCircle
            size={26}
            className="cursor-pointer"
            onClick={toggleNavbar}
          />
        </div>
      </div>
    </section>
  );
};

export default SideNavbar;
