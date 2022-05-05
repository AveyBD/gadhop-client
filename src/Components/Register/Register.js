import {
  faEnvelope,
  faHatCowboy,
  faLock,
  faUnlock,
  faUserAltSlash,
  faUserPlus,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin";

const Register = () => {
  const navigate = useNavigate();
  const handleToLogin = () => {
    navigate("/login");
  };
  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white min-h-screen w-screen flex flex-col justify-center items-center">
      <div className="bg-green-100 border-t-2 border-gray-50 rounded-xl shadow-none sm:shadow-lg px-8 sm:px-12 w-full xs:w-full sm:w-8/12 md:w-7/12 lg:w-7/12 xl:w-2/6 h-screen sm:h-auto py-8">
        <div className="text-center w-full font-bold text-3xl text-gray-600 p-4">
          Register Your Account
        </div>
        <div
          className="w-full bg-gray-200 my-3"
          style={{ height: "1px" }}
        ></div>
        <form onSubmit={handleRegister}>
          <div className="flex flex-col gap-4 px-0 py-4">
            <div>
              <FontAwesomeIcon
                className="font-medium text-xl text-gray-600 absolute py-2.5 w-11"
                icon={faUserTie}
              ></FontAwesomeIcon>
              <input
                className="py-2 pl-10 border rounded bg-green-50 border-green-300 w-full"
                placeholder="Your Name"
                type="text"
                required
              />
            </div>
            <div>
              <FontAwesomeIcon
                className="font-medium text-xl text-gray-600 absolute py-2.5 w-11"
                icon={faEnvelope}
              ></FontAwesomeIcon>
              <input
                className="py-2 pl-10 border rounded bg-green-50 border-green-300 w-full"
                placeholder="Email address"
                type="email"
                required
              />
            </div>
            <div>
              <FontAwesomeIcon
                className="font-medium text-xl text-gray-600 absolute py-2.5 w-11"
                icon={faLock}
              ></FontAwesomeIcon>
              <input
                className="py-2 bg-green-50 pl-10 border rounded border-green-300 w-full"
                placeholder="Password"
                type="password"
                required
              />
            </div>
            <div className="w-full flex flex-row gap-2">
              <button
                className="border border-green-500 hover:bg-green-500 hover:text-white duration-100 ease-in-out w-6/12 text-green-500 p-0 flex flex-row justify-center items-center gap-1"
                type="submit"
              >
                <FontAwesomeIcon
                  className="w-5"
                  icon={faUserPlus}
                ></FontAwesomeIcon>
                Register
              </button>
              <button
                onClick={handleToLogin}
                className="border border-green-500 hover:bg-green-500 hover:text-white duration-100 ease-in-out w-6/12 text-green-500 p-2 flex flex-row justify-center items-center gap-1"
              >
                <FontAwesomeIcon
                  className="w-5"
                  icon={faUnlock}
                ></FontAwesomeIcon>
                Login
              </button>
            </div>
            <div className="w-full flex flex-row justify-end">
              <a href="#">Forgot password</a>
            </div>
          </div>
        </form>
        {<SocialLogin></SocialLogin>}
      </div>
    </div>
  );
};

export default Register;
