// import React from 'react'
import JobTrail from "../../assets/JobTail.png";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="flex flex-row justify-between h-16">
        <div className="left-box flex flex-row p-4 pt-1">
          <Link to={"/"}>
            <img className=" w-36 h-16" src={JobTrail} alt="" />
          </Link>
        </div>

        <div className="border-2 rounded-lg text-white font-semibold min-w-[110px] text-center bg-gradient-to-r from-violet-300 to-violet-600 my-auto mx-2 px-4 py-1 ">
          <p></p>
        </div>
      </div>
    </>
  );
}

export default NavBar;
