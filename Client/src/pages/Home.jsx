import { Link } from "react-router-dom";
import JobTrail from ".././assets/JobTail.png";
import "../Styles/Home.css";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import demo from "../assets/demo.png";

function Home() {
  return (
    <>
      <div className=" home bg-gradient-to-br  from-gray-200 via-gray-100 via-40%  to-gray-200 text-white h-4/6 ">
        {/* <NavBar />
         */}
        <div className="flex flex-row justify-between h-16 max-sm:justify-between">
          <div className="left-box flex flex-row p-4 pt-1">
            <Link to={"/"}>
              <img className=" w-36 h-16 max-sm:w-32 h-14" src={JobTrail} alt="" />
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
        <div className=" home first-div  text-center py-20 m-auto p-auto flex flex-col justify-center items-center w-3/5 max-sm:pb-10 mx-auto px-auto w-5/6 ">
          <p className=" font-bold text-8xl bg-gradient-to-tr from-indigo-700 Montserrat to-indigo-300 bg-clip-text text-transparent text-center max-sm:text-center max-sm:text-6xl 	">
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
            className="border-1 shadow-2xl rounded-xl p-3 bg-background max-sm:p-1  "
            alt=""
          />
        </div>
        </div>


        <div className="flex flex-row gap-2 mt-20 pb-10 h-4/5 max-sm:flex-col">

          <div className=" w-2/5 m-auto px-12 flex flex-col align-middle max-sm:w-3/5 max-sm:items-center">
            <div className="flex max-sm:items-center">
              <img className="w-44 h-24 pt-3 max-sm:flex w-52 h-24 align-middle items-center " src={JobTrail} />
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

          <div  className="w-3/5 flex flex-row max-sm:flex max-sm:flex-row justify-around">
          <div className=" w-2/5 px-10 mt-7 max-sm:px-5 ">
            <p className=" text-gray-600 font-semibold text-xl pb-5 ">
              Product
            </p>
            <ul className="flex flex-col  text-gray-400 font-semibold leading-loose">
              <li className="hover:text-gray-500 cursor-pointer">Updates</li>
              <li className="hover:text-gray-500 cursor-pointer">Downloads</li>
              <li className="hover:text-gray-500 cursor-pointer">Pricing</li>
              <li className="hover:text-gray-500 cursor-pointer">Community</li>
            </ul>
          </div>

          <div className=" w-2/5 px-10 mt-7 max-sm:px-5 max-sm:w-1/4">
            <p className=" text-gray-600 font-semibold text-xl pb-5 ">
              Support
            </p>
            <ul className="flex flex-col  text-gray-400 font-semibold  leading-loose">
              <li className="hover:text-gray-500 cursor-pointer">
                Help center
              </li>
              <li className="hover:text-gray-500 cursor-pointer">
                Account information
              </li>
              <li className="hover:text-gray-500 cursor-pointer">About</li>
              <li className="hover:text-gray-500 cursor-pointer">Contact Us</li>
            </ul>
          </div>

          <div className=" w-2/5 px-10 mt-7 max-sm:px-5 max-sm:w-3/5">
            <p className=" text-gray-600 font-semibold text-xl pb-5 ">
              Help and Solutions
            </p>
            <ul className="flex flex-col  text-gray-400 font-semibold leading-loose">
              <li className="hover:text-gray-500 cursor-pointer">
                Talk to support
              </li>
              <li className="hover:text-gray-500 cursor-pointer">
                Support Docs
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
