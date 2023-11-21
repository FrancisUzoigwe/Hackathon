import React from 'react';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import pix from "../../assets/slider_2.jpg"
import pix1 from "../../assets/slider_3.jpg"
import img from "../../assets/slider_2 (1).jpg"

const SampleNextArrow = (props: any) =>{
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "",
          position: "absolute",
          top: 300,
          right: 10,
        }}
        onClick={onClick}
      />
    );
  }
  
  const SamplePrevArrow = (props: any) =>{
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "",
          position: "absolute",
          top: 300,
          left: 10,
          zIndex: 10,
        }}
        onClick={onClick}
      />
    );
  }

const HeroPage = () => {

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
 <div>
    <div className='small:hidden'>
    <Slider {...settings} >
<img src={pix} alt="" className='relative small:hidden'/>
<img src={pix1} alt="" className='relative small:hidden'/>
    </Slider>
   </div>
<img src={img} alt="" className='hidden small:flex' />
 </div>
//      <div className='flex w-full justify-center items-center bg-slate-50'>

      
//          <div className='flex-col h-[500px] w-[95%] flex justify-center items-center px-5'>
            
//             <div className='text-[30px] font-extrabold w-[250px] bg-red-200'>Don't Miss Out on
// Tasty Grocery Deals!</div>
// <div>img</div>
//         </div> 
//    </div>
  )
}

export default HeroPage