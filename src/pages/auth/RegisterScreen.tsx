import { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingScreen from "../screen/LoadingScreen";
import { registeUser } from "../../api/authApi";
import { useNavigate } from "react-router-dom";

const RegisterScreen = () => {
  const [show, setShow] = useState<boolean>(false);
  const onShow = () => {
    setShow(!show);
  };

  const [view, setView] = useState<boolean>(false);
  const onView = () => {
    setView(!view);
  };

  const navigate = useNavigate();

  const Schema = yup.object({
    userName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onHandleSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const { userName, email, password } = data;
    registeUser({ userName, email, password }).then((res: any) => {
      navigate("/sign-in");
      setLoading(false);
    });
  });

  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div className="w-full h-screen flex justify-center items-center bg-purple-500 relative">
      {loading && <LoadingScreen />}
      <form
        className="w-[400px] max-sm:w-[290px] h-[390px] bg-white rounded-md flex flex-col items-center hover:shadow-md hover:scale-105 transition-all duration-500 hover:cursor-pointer"
        onSubmit={onHandleSubmit}
      >
        <div className="mt-3 font-bold">
          <SiShopware className="text-4xl" />
        </div>
        <div className="font-bold text-[20px]">Signup on FlexiBuy</div>
        <div className="w-[85%] max-sm:w-[90%] h-[40px] border relative rounded-md mt-4">
          <div className="w-[10%] bg-white -mt-3 ml-[14px] font-bold ">
            UserName:
          </div>
          <input
            type="text "
            className="w-full outline-none pl-3"
            {...register("userName")}
          />
          {errors.userName?.message && (
            <div className="flex justify-end text-[12px] text-red-500">
              Provide a name
            </div>
          )}
        </div>
        <div className="w-[85%] max-sm:w-[90%] h-[40px] border relative rounded-md mt-4">
          <div className="w-[10%] bg-white -mt-3 ml-[14px] font-bold ">
            Email:
          </div>
          <input
            type="text "
            className="w-full outline-none pl-3"
            {...register("email")}
          />
          {errors.email?.message && (
            <div className="flex justify-end text-[12px] text-red-500">
              Provide a valid email address
            </div>
          )}
        </div>
        <div className="w-[85%] max-sm:w-[90%] h-[40px] border relative rounded-md mt-5">
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
            {...register("password")}
          />
          {errors.password?.message && (
            <div className="flex justify-end text-[12px] text-red-500">
              Password must be at least 6 characters long
            </div>
          )}
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
      </form>
    </div>
  );
};

export default RegisterScreen;
