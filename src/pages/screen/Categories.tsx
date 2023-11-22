// import React from "react";
import pix from "../../assets/pix7.jpg";
import pix1 from "../../assets/pix1.jpg";
import pix2 from "../../assets/the-adventure-begins-framed-poster.jpg";
import pix3 from "../../assets/today-is-a-good-day-framed-poster.jpg";
import pix4 from "../../assets/pix4.jpg";
import pix5 from "../../assets/pix3.jpg";
import pix6 from "../../assets/pix2.jpg";
const Categories = () => {
  return (
    <div className="flex w-full justify-center items-center bg-slate-50 max-sm:flex-wrap">
      <div className="min-h-[200px] w-[95%]  mt-3 rounded-[20px] flex justify-center items-center px-5 flex-col">
        <div className="font-semibold text-[30px]">Featured Categories</div>
        <div className="flex justify-between items-center w-full mt-4 ">
          <div className="flex flex-col  h-[120px] justify-center items-center ">
            <div className="object-cover overflow-hidden h-[120px] bg-purple-100 w-[100px] rounded-[20px] ">
              <img src={pix} alt="" className="object-cover overflow-hidden" />
            </div>
            <div className="font-bold text-[#301030]">T-Shirt</div>
          </div>
          <div className="max-sm:hidden  flex flex-col h-[120px] justify-center items-center ">
            <div className="object-cover overflow-hidden h-[120px] bg-purple-900 w-[100px] rounded-[20px] ">
              <img src={pix1} alt="" />
            </div>
            <div className="font-bold text-[#301030]">Leather Bag</div>
          </div>
          <div className="flex flex-col h-[120px] justify-center items-center ">
            <div className="object-cover overflow-hidden h-[120px] bg-purple-100 w-[100px] rounded-[20px] ">
              <img src={pix2} alt="" />
            </div>
            <div className="font-bold text-[#301030]">Sweater</div>
          </div>
          <div className="max-md:hidden flex flex-col h-[120px] justify-center items-center ">
            <div className="object-cover overflow-hidden h-[120px] bg-purple-100 w-[100px] rounded-[20px] ">
              <img src={pix3} alt="" />
            </div>
            <div className="font-bold text-[#301030]">Black Sweater</div>
          </div>
          <div className="flex flex-col h-[120px] justify-center items-center ">
            <div className=" object-cover overflow-hidden h-[120px] bg-purple-100 w-[100px] rounded-[20px] ">
              <img src={pix4} alt="" />
            </div>
            <div className="font-bold text-[#301030] ">Ball</div>
          </div>
          <div className=" max-sm:hidden  flex flex-col h-[120px] justify-center items-center ">
            <div className="object-cover overflow-hidden h-[120px] bg-purple-100 w-[100px] rounded-[20px] ">
              <img src={pix5} alt="" />
            </div>
            <div className="font-bold text-[#301030]">Glasses</div>
          </div>
          <div className=" max-sm:hidden  flex flex-col h-[120px] justify-center items-center ">
            <div className=" object-cover overflow-hidden h-[120px] bg-purple-100 w-[100px] rounded-[20px] ">
              <img src={pix6} alt="" className="hover:cursor-pointer" />
            </div>
            <div className="font-bold text-[#301030]">Wallet</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
