import React from "react";
import view from "../../assets/img11.webp";

const View = () => {
  return (
    <div
      className="w-full h-[500px] overflow-hidden object-cover relative"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${view})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        WebkitBackgroundSize:"cover",
        
      }}
    >
            <div className=" h-full w-full bg-slate-900 flex justify-center items-center "
            style={{backgroundColor: "rgba(29, 30, 31, 0.7)"}}>
<div className="z-99 text-white flex items-center justify-center w-[90%] h-full  text-[18px] font-light">
<div className="flex flex-col justify-center items-center  h-[300px] w-[900px] ">
  
<div className="uppercase flex justify-center  font-medium text-[40px]  w-[80%] ">WELCOME TO OUR SHOP</div>
<div className="w-[430px] text-center mt-5 text-[13px] ">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
<div className="flex w-[340px] justify-between items-center mt-5">
    <div className=" bg-white w-[180px] h-[50px] text-black text-[15px] font-normal flex justify-center items-center ">VIEW COLLECTIONS</div>
    <div className="bg-white w-[120px] h-[50px] text-black text-[15px] font-normal flex justify-center items-center ">SHOW NOW</div>
</div>
</div>
</div>
        </div>
    </div>
  );
};

export default View;
