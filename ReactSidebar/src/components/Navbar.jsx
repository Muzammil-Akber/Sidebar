import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import useOutsideClick from "../CustomHooks/useoutsideclick";
import CustomInput from "../ReuseableCcomponents/Input";

const Navbar = () => {
  const [dropdown, Setdropdown] = useState(false);
  const dropdownRef = useOutsideClick(() => Setdropdown(false));
  const handledropdown = () => {
    Setdropdown(!dropdown);
  };

  return (
    <div className="bg-gray-700  w-full  p-4 rounded-2xl  text-gray-100       flex justify-between  items-center">
      <div>
        <h1 className="font-bold text-xs whitespace-pre lg:text-xl font-popins">
          Fitwell Hub
        </h1>
      </div>

      <div className="flex gap-2 items-center justify-center">
        <div className="hidden sm:flex">
          <CustomInput
            type="text"
            placeholder="Search here"
            className={`placeholder:text-gray-700 text-black`}
          />
        </div>

        <div className="hidden sm:block  hover:bg-white/70 px-2 py-1.5 rounded-lg ">
          <MdOutlineLightMode size={20} />
        </div>

        <div>
          <IoNotifications size={20} />
        </div>
        <div className="flex flex-col">
          <div
            ref={dropdownRef}
            className="flex gap-2 items-center justify-center"
            onClick={handledropdown}
          >
            <img
              src="/img/muzammil.png"
              alt=""
              width={30}
              height={30}
              className="rounded-full"
            />
            <IoMdArrowDropdown size={20} />
          </div>

          {dropdown && (
            <div className=" bg-white rounded-xl w-44 p-2 h-32 absolute top-[72px] right-2 text-black">
              <ul className="py-2 flex flex-col gap-1">
                <li className="list">Profile</li>
                <li className="list">Setting</li>
                <li className="list">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
