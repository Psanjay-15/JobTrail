import { Link } from "react-router-dom";
import logo from ".././assets/logo.png";

import "../Styles/Home.css";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import demo from "../assets/demo.png";

function Home() {
  return (
    <>
      <div className=" home bg-gradient-to-br  from-gray-200 via-gray-100 via-40%  to-gray-200 text-white h-fit ">
        {/* <NavBar />
         */}
        <div className="flex flex-row justify-between h-16 max-sm:justify-between sm:w-full">
          <div className="left-box flex flex-row p-4 pt-1 flex items-center sm:pt-2 pl-0">
          <Link to={"/"} className="flex flex-row items-center justify-center">
              <img className=" w-38 h-14 max-sm:w-16 pt-2 pl-2 " src={logo} alt="" />
              <p className="font-bold pt-2 text-4xl bg-gradient-to-tr from-violet-800 Montserrat to-pink-200 bg-clip-text text-transparent  hidden sm:block">JobTrail</p>
            </Link>
          </div>
          <div>
            <Link to={"/register"}>
              <button className="home mr-2 mt-4  text-gray-400 font-semibold w-fit text-right hover:border-b-2 border-gray-200">
                Sign Up
              </button>

              <span className=" text-gray-400">/</span>
            </Link>

            <Link to={"/login"}>
              <button className="home ml-2 mr-6 mt-4  text-gray-400 font-semibold w-fit text-left hover:border-b-2 border-gray-200">
                Sign In
              </button>
            </Link>
          </div>
        </div>
        <div>
        <div className=" home first-div  text-center py-20 m-auto p-auto flex flex-col justify-center items-center w-3/5 max-sm:pb-10 mx-auto px-auto ">
          <p className=" font-bold text-8xl bg-gradient-to-tr from-violet-800 Montserrat to-pink-200 bg-clip-text text-transparent text-center max-sm:text-center max-sm:text-5xl 	">
            Track Your Application More Efficiently
          </p>

          <div className="sm:w-5/6">
          <p className="home my-10  w-2/3 m-auto text-gray-400 font-semibold max-sm:w-5/6 mb-5">
            JobTrail allows you to trak your job application more efficiently.
            It provides you better functionality that makes the tracking process
            easy
          </p>
          </div>
        </div>

        <div className="w-3/4 justify-center m-auto max-sm:w-5/6 h-5/6">
          <img
            src={demo}
            className=" border-[1px] w-auto shadow-2xl rounded-xl  bg-background max-sm:p-1  "
            alt=""
          />
        </div>
        </div>


        <div className="lg:flex lg:flex-row items-center justify-center gap-2 py-20 h-4/5 max-sm:flex max-sm:flex-col ">

          <div className=" w-2/5 flex flex-col items-center">
            <div className="flex flex-row items-center justify-center">
              <img className="w-30 h-16" src={logo} />
            <p className="font-bold text-4xl bg-gradient-to-tr from-violet-800 Montserrat to-pink-200 bg-clip-text text-transparent ">JobTrail</p>
            </div>
            <p className="justify-center items-center pt-4 text-gray-500 font-semibold max-sm:text-center">
              The best platform for Application tracking
            </p>
            <div className="pt-7 flex flex-row gap-3">
              <Link to={"/instagram.com"} target="_blank">
                <img src={instagram} alt="" className="w-8 cursor-pointer" />
              </Link>

              <Link>
                <img src={twitter} alt="" className="w-8 cursor-pointer" />
              </Link>

              <Link>
                <img src={facebook} alt="" className="w-8 cursor-pointer" />
              </Link>
            </div>
          </div>

          <div  className=" w-3/5 flex flex-row justify-around max-sm:w-full max-sm:flex max-sm:flex-row max-sm:justify-around">
          <div className=" w-auto pt-7 max-sm:text-sm max-sm:px-2 ">
            <p className=" text-gray-600 font-semibold text-xl pb-5 sm:text-small max-sm:text-sm max-sm:px-auto">
              Product
            </p>
            <ul className="flex flex-col  text-gray-400 font-semibold leading-loose">
              <li className="hover:text-gray-500 cursor-pointer">Updates</li>
              <li className="hover:text-gray-500 cursor-pointer">Downloads</li>
              <li className="hover:text-gray-500 cursor-pointer">Pricing</li>
              <li className="hover:text-gray-500 cursor-pointer">Community</li>
            </ul>
          </div>

          <div className=" w-auto pt-7  max-sm:text-sm max-sm:px-2">
            <p className=" text-gray-600 font-semibold text-xl pb-5 max-sm:text-sm  ">
              Support
            </p>
            <ul className="flex flex-col  text-gray-400 font-semibold  leading-loose">
              <li className="hover:text-gray-500 cursor-pointer">
                Help center
              </li>
              <li className="hover:text-gray-500 cursor-pointer">
                Account 
              </li>
              <li className="hover:text-gray-500 cursor-pointer">About</li>
              <li className="hover:text-gray-500 cursor-pointer">Contact Us</li>
            </ul>
          </div>

          <div className=" w-auto  pt-7  max-sm:text-sm max-sm:px-2">
            <p className=" text-gray-600 font-semibold text-xl pb-5 max-sm:text-sm">
              Help and Solutions
            </p>
            <ul className="flex flex-col  text-gray-400 font-semibold leading-loose">
              <li className="hover:text-gray-500 cursor-pointer">
                Support 
              </li>
              <li className="hover:text-gray-500 cursor-pointer">
                Documents
              </li>

              <li className="hover:text-gray-500 cursor-pointer">
                System status
              </li>
              <li className="hover:text-gray-500 cursor-pointer">Policy</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
