import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { TbReportAnalytics } from "react-icons/tb";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineSecurity } from "react-icons/md";
import { MdSettingsAccessibility } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

function Sidebar({className}) {
  const [open, setopen] = useState(false);
  const [dropdown, setdropdown] = useState(false);

  const Links = [
    {
      name: "Dashboard",
      link: "/",
      icon: MdDashboard,
    },
    {
      name: "User",
      link: "/ExternalApi",
      icon: FaRegUser,
    },
    {
      name: "Message",
      link: "/Movie",
      icon: FaRegMessage,
    },
    {
      name: "Analytics",
      link: "/",
      icon: TbReportAnalytics,
    },
    {
      name: "Saved",
      link: "/",
      icon: AiOutlineHeart,
    },
    {
      name: "Cart",
      link: "/",
      icon: FiShoppingCart,
    },
    {
      name: "Setting",
      link: "/",
      icon: RiSettings4Line,
      subLinks: [
        {
          name: "General",
          link: "/",
          icon: MdSettingsAccessibility,
        },
        {
          name: "Security",
          link: "/",
          icon: MdOutlineSecurity,
        },
      ],
    },
    {
      name: "Logout",
      link: "/",
      icon: IoMdLogOut,
      margin: true,
    },
  ];

  const Toggle = () => {
    setopen(!open);
  };
  const ToggleDropdown = () => {
    setdropdown(!dropdown);
  };

  useEffect(() => {
    if (window.innerWidth >= 1024) return setopen(true);
  }, []);

  return (
    <>
      <aside
        className={`bg-[#0b3a3b] dark:bg-slate-600  ${
          open ? "w-72" : "w-16 "
        } 
        min-h-screen max-h-fit ${className}  text-gray-100 px-4 duration-[800ms] ease-in-out delay-[60ms] rounded-r-xl font-popins
       `}
      >
        <div
          className={`flex justify-center items-center mt-3 pl-[1px] ${
            !open && "bg-gray-400 rounded-2xl duration-500 delay-[750ms]"
          }  `}
        >
          <img src="/img/Logo.png" alt="logo" />
        </div>

        <div
          className="hidden py-3 md:flex justify-end cursor-pointer mt-[2px]"
          onClick={Toggle}
        >
          {open ? <RxCross2 size={26} /> : <HiMenuAlt3 size={26} />}
        </div>

        <div className="flex flex-col gap-4 mt-4 md:mt-0 relative">
          {Links.map((menu, id) => {
            return (
              <>
                <NavLink
                  to={menu?.link}
                  id={id}
                  onClick={menu.name === "Setting" ? ToggleDropdown : undefined}
                  className={({ isActive }) =>
                    `${menu?.margin && "mt-4"} ${
                      isActive ? " " : "text-gray-100"
                    } group flex gap-3.5 items-center text-sm font-[600] py-2 px-[6px] cursor-pointer hover:bg-gray-800 rounded-lg`
                  }
                >
                  <div> {React.createElement(menu?.icon, { size: "20" })} </div>

                  <h2
                    style={{ transitionDelay: `${id + 3}00ms` }}
                    className={`whitespace-pre duration-500  flex w-full justify-between items-center ${
                      !open &&
                      " opacity-0 duration-300 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {menu?.name}
                    {menu.name === "Setting" && <IoMdArrowDropdown size={20} />}
                  </h2>
                  <h2
                    className={` ${
                      open && "hidden"
                    } absolute left-40 bg-white text-gray-900  font-semibold whitespace-pre  rounded-xl drop-shadow-xl w-0 overflow-hidden group-hover:left-14 group-hover:px-2 group-hover:py-1 group-hover:duration-500 group-hover:delay-75 group-hover:w-fit`}
                  >
                    {menu.name}
                  </h2>
                </NavLink>

                {menu.name === "Setting" && (
                  <div className={dropdown ? "block" : "hidden"}>
                    {menu.subLinks.map((submenu, subId) => (
                      <NavLink
                        to={submenu.link}
                        key={subId}
                        className={({ isActive }) =>
                          `${
                            isActive ? "" : ""
                          } text-gray-100 group flex gap-3.5 items-center text-sm font-[600] py-2 px-[6px] cursor-pointer hover:bg-gray-800 rounded-lg`
                        }
                      >
                        <div>
                          {" "}
                          {React.createElement(submenu?.icon, {
                            size: "20",
                          })}{" "}
                        </div>

                        <h2
                          style={{ transitionDelay: `${subId + 10}99ms` }}
                          className={`whitespace-pre duration-600 ${
                            !open && " opacity-0 translate-x-28 overflow-hidden"
                          }`}
                        >
                          {submenu.name}
                        </h2>
                        <h2
                          className={` ${
                            open && "hidden"
                          } absolute left-40 bg-white text-gray-900  font-semibold whitespace-pre  rounded-xl drop-shadow-xl w-0 overflow-hidden group-hover:left-14 group-hover:px-2 group-hover:py-1 group-hover:duration-500 group-hover:delay-75 group-hover:w-fit`}
                        >
                          {submenu.name}
                        </h2>
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            );
          })}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
