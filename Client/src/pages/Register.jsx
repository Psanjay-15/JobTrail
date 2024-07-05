// takes username fullname password and email
import { useState } from "react";
import google from "../assets/google.png";
// import "Register.css";i

import wallpaper from "../assets/wallpaper.jpg";
import "../Styles/Register.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [fullName, setFullName] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleRegister = () => {
    if (!fullName || !userName || !email || !password) {
      alert("All fields are required");
      return;
    }

    const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

    axios
      .post(
        BASE_URL + "/users/register",
        {
          username: userName,
          fullname: fullName,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        sessionStorage.setItem("accessToken", res.data.data.accessToken);
        sessionStorage.setItem("email", res.data.data.createdUser.email);
        sessionStorage.setItem("userName", res.data.data.createdUser.username);
        window.location.href = "/";
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-gradient-to-br from-gray-950   via-blue-900 via-50%  to-gray-950 	">
        <div className="main flex  items-center justify-center h-screen  ">
          <div className="form h-3/5 border-0 flex flex-row rounded-xl w-2/4 gradient-drop-shadow">
            <div className="w-2/4 border-l-0 rounded-l-lg bg-white ">
              <h1 className="flex justify-center font-bold text-3xl pt-4 text-black">
                Create Account
              </h1>
              <div className="social-container flex justify-center items-center align-middle mt-4 ">
                <button className="signInWithGoogle flex flex-row text-sky-900 justify-center fMontserrat gap-2 border-2 rounded-full py-2 px-6 text-xs font-semibold hover:bg-indigo-100 hover:border-blue-950">
                  <img className="h-4 w-4 flex items-center" src={google} />
                  SIGN IN WITH GOOGLE
                </button>
              </div>
              <span className="flex justify-center mt-4 text-xs text-black ">
                or Use your email for registration
              </span>

              <div className="flex flex-col  m-2 mx-8  text-xs">
                <input
                  className="fullname border-2 p-2 bg-slate-200 mt-4 my-2"
                  placeholder="Name"
                  type="text"
                  required
                  onChange={(e) => setFullName(e.target.value)}
                />
                <input
                  className="username border-2  bg-slate-200  p-2 my-2"
                  placeholder="UserName"
                  type="text"
                  required
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  className="email border-2  bg-slate-200  p-2 my-2"
                  placeholder="Email"
                  type="text"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="password border-2  bg-slate-200  p-2 my-2"
                  placeholder="Password"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex justify-center ">
                <button
                  className="authButton border-2 px-8 py-2 my-4 text-white rounded-full text-xs font-medium bg-indigo-900 hover:bg-indigo-800 "
                  onClick={handleRegister}
                >
                  SIGN UP
                </button>
              </div>
              <div className="flex justify-center mt-4 text-xs">
                <p>
                  Already have an Account?{" "}
                  <Link to={"/login"}>
                    <span className="text-blue-900 font-medium cursor-pointer">
                      SIGN IN
                    </span>
                  </Link>
                </p>
              </div>
            </div>

            <div className="w-2/4">
              <img
                className="object-cover h-full w-full border-r-1 rounded-r-lg"
                src={wallpaper}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
