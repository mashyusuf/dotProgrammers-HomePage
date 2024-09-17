import React from 'react'
import star from '../../assets/star.png'
import boy from '../../assets/boy.png'
import image1 from '../../assets/1.1.png'
import img2 from '../../assets/2.2.png'
import star3 from '../../assets/3.3.png'
import star4 from '../../assets/4.4.png'
import star5 from '../../assets/5.5.png'
export default function Portfolio() {
  return (
    <div className='container mx-auto'>
        {/*image section*/ }
       <div className="relative flex flex-col items-center justify-center">
  <div>
    <img className="w-12 h-12 absolute left-40  md:left-96" src={star} alt="" />
  </div>
  <div>
    <img className="w-80 h-80" src={boy} alt="" />
  </div>
</div>


{/**portfolio section */}
    <div>
    <div>
        <h1 className='text-3xl text-center'>Our Portfolio</h1>
        <div className="flex justify-center items-center">
 
 <div className="divider divider-error flex justify-center items-center w-96">
   <img className='w-5' src={star} alt="Star" />
 </div>
</div>
    </div>
    <div className='flex justify-center space-x-3'>
        <p>app</p>
        <p>mobile App</p>
        <p>app</p>
        <p>Website Application</p>
        <p>Website</p>
       
    </div>
    </div>

    <div className="flex flex-col mt-10 mb-10 sm:grid justify-center  items-center sm:grid-cols-4 border-2 shadow-lg px-4 py-4 gap-4">
  <img src={image1} alt="" className="w-60 h-60 object-cover border shadow-lg" />
  <img src={img2} alt="" className="w-60 h-60 object-cover border shadow-lg" />
  <img src={star3} alt="" className="w-60 h-60 object-cover border shadow-lg" />
  <img src={star4} alt="" className="w-60 h-60 object-cover border shadow-lg" />
  <img src={star5} alt="" className="w-60 h-60 object-cover border shadow-lg" />
</div>


    </div>
  )
}
