import React from "react";
import facebook from "..//assets/facebook.png";
import twitter from "..//assets/twitter.png";
import google from "..//assets/google.png";

const Login = () => {
  return (
    <div>
      <div className="min-h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center  ">
        <div className="flex flex-col  w-[420px] h-[700px] bg-white drop-shadow-md border-2 rounded-md">
          <div className="flex justify-center">
            <h1 className="text-3xl sm:text-5xl mt-9 sm:mt-12">Login</h1>
          </div>
          <div className="flex flex-col mx-7 sm:mx-10 mt-10">
            <label className="text-gray-500" for="email">
              Username
            </label>{" "}
            <input
              className="px-4 py-2 mt-2 border-b-2 outline-0"
              type="email"
              name="email"
              value=""
              placeholder="Type your username"
            />
            <label className="text-gray-500 mt-8" for="email">
              Password
            </label>{" "}
            <input
              className="px-4 py-2 mt-2 border-b-2 outline-0"
              type="email"
              name="email"
              value=""
              placeholder="Type your password"
            />
            <div className="flex w-full mt-2 flex-row-reverse">
              <a className="text-gray-500" href="#forget pasword">
                Forget password?
              </a>
            </div>
            <div>
              <button
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full py-1 sm:py-2 mt-7 rounded-3xl text-white text-xl sm:text-2xl"
                type="button"
                onclick="https://www.facebook.com/"
              >
                Login
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <h1 className=" text-gray-500">Or Sign Up Using </h1>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex place-content-evenly mx-7 sm:mx-10 mt-8 w-2/4 align-middle	 ">
              <a href="https://www.facebook.com/">
                {" "}
                <img
                  className="h-[46px] sm:h-[61px] w-[46px] sm:w-[61px] -mt-[3px] rounded-[100%]"
                  src={facebook}
                  alt="facebook"
                />
              </a>
              <a href="https://www.facebook.com/">
                {" "}
                <img
                  className="h-10 sm:h-14 w-10 sm:w-14  rounded-[100%]"
                  src={twitter}
                  alt="twitter"
                />
              </a>
              <a href="https://www.facebook.com/">
                {" "}
                <img
                  className="h-10 sm:h-14 w-10 sm:w-14  rounded-[100%]"
                  src={google}
                  alt="google"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
