import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { SiShopware } from "react-icons/si";
import { Link } from "react-router-dom";
const Header = () => {
  const [short, setShort] = useState<boolean>(false);
  const onShort = () => {
    setShort(!short);
  };

  const [scroll, setScroll] = useState<boolean>(false);
  const onScroll = () => {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", onScroll);
  return (
    <div className="flex items-center justify-center w-full h-[50px]">
      {scroll ? (
        <div
          className="w-full z-30 fixed transition-all duration-300 h-[55px] flex justify-center items-center"
          style={{
            backdropFilter: "blur(10px)",
            height: "50px",
            width: "100%",
          }}
        >
          <div className=" w-[95%] flex items-center transition-all duration-300 justify-between ">
            <div className=" font-bold hover:cursor-pointer">
              <SiShopware className="text-3xl" />
            </div>
            <div className="flex items-center hover:cursor-pointer">
              <div className="flex flex-col items-center">
                <div
                  className="hidden max-sm:block max-sm:flex-col  "
                  onClick={() => {
                    onShort();
                  }}
                >
                  <MdOutlineMenu className="text-2xl hover:scale-[1.2] duration-300 transition-all relative items-center justify-center flex max-sm:text-2xl" />
                </div>
              </div>
              <div className="flex items-center relative justify-center ">
                <Link to="/sign-in">
                  <button className="max-sm:hidden px-4 py-2 rounded-md bg-purple-600 text-white font-bold">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full z-30 fixed bg-purple-600  transition-all duration-300 h-[55px] flex justify-center items-center">
          <div className=" w-[95%] flex items-center transition-all duration-300 justify-between">
            <div className="text-white font-bold hover:cursor-pointer">
              <SiShopware className="text-3xl" />
            </div>
            <div className="flex items-center hover:cursor-pointer">
              <div className="flex flex-col items-center">
                <div
                  className="hidden max-sm:block max-sm:flex-col  "
                  onClick={() => {
                    onShort();
                  }}
                >
                  <MdOutlineMenu className="text-2xl hover:scale-[1.2] duration-300 transition-all relative items-center justify-center flex text-white max-sm:text-2xl" />
                </div>
              </div>
              <div className="flex items-center relative justify-center ">
                <Link to="/sign-in">
                  <button className="max-sm:hidden px-4 py-2 rounded-md bg-white text-purple-600 font-bold">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
