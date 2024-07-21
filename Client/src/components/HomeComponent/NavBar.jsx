// import React from 'react'
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import "../../Styles/NavBar.css";
import profile from "../../assets/profile.png";
import axios from "axios";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  const handleSignOut = async () => {
    sessionStorage.clear();
    window.location.href = "/";
  };
  return (
    <>
      <div className="home flex flex-row justify-between h-16">
      <div className="left-box flex flex-row p-4 pt-1 items-center sm:pt-2 pl-0">
          <Link to={"/"} className="flex flex-row items-center justify-center">
              <img className=" w-38 h-14 max-sm:w-16 max-sm:h-[47px] pt-2 pl-2 " src={logo} alt="" />
              <p className="font-bold pt-2 text-4xl bg-gradient-to-tr from-violet-800 Montserrat to-pink-200 bg-clip-text text-transparent  hidden sm:block">JobTrail</p>
            </Link>
          </div>

        <div className="p-4 ">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="">
                <img className="w-10 h-10 max-sm:w-[35px] max-sm:h-[35px]" src={profile} />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  {({ focus }) => (
                    <button
                      type="submit"
                      className={classNames(
                        focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-[90px] pl-4 py-2 text-left text-sm"
                      )}
                      onClick={handleSignOut}
                    >
                      Sign out
                    </button>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </>
  );
}

export default NavBar;
