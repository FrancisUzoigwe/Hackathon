import { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { SiShopware } from "react-icons/si";

const RegisterScreen = () => {
  const [show, setShow] = useState<boolean>(false);
  const onShow = () => {
    setShow(!show);
  };

  const [view, setView] = useState<boolean>(false);
  const onView = () => {
    setView(!view);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-purple-300">
      <div className="w-[400px] max-sm:w-[290px] h-[370px] bg-white rounded-md flex flex-col items-center hover:shadow-md hover:scale-105 transition-all duration-500 hover:cursor-pointer">
        <div className="mt-3 font-bold">
          <SiShopware className="text-4xl" />
        </div>
        <div className="font-bold text-[20px]">Signup on FlexiBuy</div>
        <div className="w-[85%] max-sm:w-[90%] h-[40px] border relative rounded-md mt-4">
          <div className="w-[10%] bg-white -mt-3 ml-[14px] font-bold ">
            Email:
          </div>
          <input type="text " className="w-full outline-none pl-3" />
          <div className="flex justify-end text-[12px] text-red-500">
            Provide a valid email address
          </div>
        </div>
        <div className="w-[85%] max-sm:w-[90%] h-[40px] border relative rounded-md mt-10">
          <div className="w-[10%] bg-white -mt-3 ml-[14px] font-bold ">
            Password:
          </div>
          <div
            className="absolute right-2 top-[30%]"
            onClick={() => {
              onShow();
            }}
          >
            {show ? (
              <FiEyeOff className="hover:cursor-pointer transition-all duration-300 hover:scale-[1.2]" />
            ) : (
              <FiEye className="hover:cursor-pointer transition-all duration-300 hover:scale-[1.2]" />
            )}
          </div>
          <input
            type={`${show ? "text" : "password"}`}
            className="w-full outline-none pl-3"
          />
          <div className="flex justify-end text-[12px] text-red-500">
            Password must be at least 6 characters long
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="w-[95%] flex items-center justify-between mt-3">
              <input
                type="checkbox"
                className="w-[15px] h-[15px]"
                onClick={(e: any) => {
                  e.target.view;
                  onView();
                }}
              />
              <div className="text-[13px] font-bold">
                Agree to Terms and Conditions
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center mt-5">
            <button
              className={`px-4 py-2 rounded-md ${
                view ? "bg-purple-600 text-white" : "bg-gray-500 text-white"
              } transition-all duration-300 text-[14px] font-bold`}
              type="submit"
              disabled={!view}
            >
              Signup
            </button>
          </div>
          <div className="w-full flex items-center justify-center mt-2">
            <div className="text-[14px] flex ">
              Already have an account?{" "}
              <Link to="/sign-in">
                <div className="ml-2 text-red-500">Signin</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
