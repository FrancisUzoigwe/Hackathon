import React from 'react'
import img from "../../assets/banner_1.jpg"
import img1 from "../../assets/banner_2_f7c4d39a-676b-427b-b929-a9d939cad7ea.jpg"
import img2 from "../../assets/dummy-img_33a2605a-dfaf-4129-af85-801fe129e451.jpg"

const ImageView = () => {
  return (
    <div className='w-full flex justify-center items-center mt-5'>
        <div className='w-[90%] flex justify-between items-center'>
<div className='h-[300px] w-[300px] object-cover overflow-hidden'>
<img src={img} alt="" className='object-cover overflow-hidden'/>
</div>
<div className='h-[300px] w-[300px] object-cover overflow-hidden'>
<img src={img2} alt="" className='object-cover overflow-hidden'/>
</div>
<div className='h-[300px] w-[300px] object-cover overflow-hidden'>
<img src={img1} alt="" className='object-cover overflow-hidden'/>
</div>
        </div>
    </div>
  )
}

export default ImageView