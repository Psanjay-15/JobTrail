// import React from 'react'
import JobTrail from "../../assets/JobTail.png";
import { Link } from "react-router-dom";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import profile from "../../assets/profile.png";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  return (
    <>
      <div className="flex flex-row justify-between h-16">
        <div className="left-box flex flex-row p-4 pt-1">
          <Link to={"/"}>
            <img className=" w-36 h-16" src={JobTrail} alt="" />
          </Link>
        </div>

        <div className="p-4">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="">
                <img className="w-10 h-10" src={profile} />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  {({ focus }) => (
                    <a
                      href="#"
                      className={classNames(
                        focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Profile
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <a
                      href="#"
                      className={classNames(
                        focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Support
                    </a>
                  )}
                </MenuItem>

                <form method="POST" action="#">
                  <MenuItem>
                    {({ focus }) => (
                      <button
                        type="submit"
                        className={classNames(
                          focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block w-full px-4 py-2 text-left text-sm"
                        )}
                      >
                        Sign out
                      </button>
                    )}
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </>
  );
}

export default NavBar;
