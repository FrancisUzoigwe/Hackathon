import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart, logOut } from "../../global/redux";
import { SiShopware } from "react-icons/si";
import { addToUserCart } from "../../api/API";
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
const Header = () => {
  const dispatch = useDispatch();
  const {productID} = useParams()
  // const cart = useSelector((state: any) => state.cart)
  const [show, setShow] = useState<boolean>(false);
  const user = useSelector((state: any) => state.user);
  const onShow = () => {
    setShow(!show);
  };
  const [short, setShort] = useState<boolean>(false);
  const onShort = () => {
    setShort(!short);
  };

    const carter = useSelector((state: any) => state.cart);
    let { data, mutate }: any = useProduct();


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
        <div className="w-full  fixed  h-[50px] flex justify-center items-center transition-all duration-500 ">
          <div
            className=" w-[95%] flex items-center transition-all duration-500 justify-between"
            style={{ height: "50px", backdropFilter: "blur(10px)" }}
          >
            <div className="font-bold">
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
                  <MdOutlineMenu className="text-3xl hover:scale-[1.2] duration-300 transition-all relative items-center justify-center flex" />
                  {short ? (
                    <div className="absolute text-[13px] px-4 left-[82%]  py-2 bg-black text-white font-bold z-20 rounded-[5px] ">
                      Logout
                    </div>
                  ) : null}
                </div>
              </div>
              <div
                className="flex items-center relative justify-center "
                onMouseEnter={onShow}
                onMouseLeave={onShow}
              >
                <div className="font-bold max-sm:hidden">
                  {user.userName ? user.userName : user.email}
                </div>
                <div className="ml-2 max-sm:hidden ">
                  <FaCaretDown />
                </div>
                {show ? (
                  <div
                    className="absolute top-6 px-10 py-2 bg-black text-white font-bold z-20 rounded-[5px] "
                    onClick={() => {
                        addToUserCart(user?._id, data?._id)
                      dispatch(emptyCart());
                      dispatch(logOut());
                    }}
                  >
                    Logout
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full  fixed bg-purple-600  h-[50px] flex justify-center items-center transition-all duration-500 ">
          <div className=" w-[95%] flex items-center transition-all duration-500 justify-between text-white">
            <div className="font-bold">
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
                  <MdOutlineMenu className="text-3xl hover:scale-[1.2] duration-300 transition-all relative items-center justify-center flex" />
                  {short ? (
                    <div className="absolute text-[13px] px-4 left-[82%]  py-2 bg-black text-white font-bold z-20 rounded-[5px] ">
                      Logout
                    </div>
                  ) : null}
                </div>
              </div>
              <div
                className="flex items-center relative justify-center "
                onMouseEnter={onShow}
                onMouseLeave={onShow}
              >
                <div className="font-bold max-sm:hidden">
                  {user.userName ? user.userName : user.email}
                </div>
                <div className="ml-2 max-sm:hidden ">
                  <FaCaretDown />
                </div>
                {show ? (
                  <div
                    className="absolute top-6 px-10 py-2 bg-black text-white font-bold z-20 rounded-[5px] "
                    onClick={() => {
                    //   pushToCart();
                    addToUserCart(user?._id, data?._id)
                      dispatch(emptyCart());
                      dispatch(logOut());
                    }}
                  >
                    Logout
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
