import React from 'react'
import Image from 'next/image'

const Body = () => {
  return (
    <div className='p-[5%]'>
      <div className='w-full  flex flex-col'>
      <h2 className=' w-full text-center  leading-normal  text-4xl font-bold text-gray-900 '>
 EXTRAORDINARY TASTE<br></br>AND EXPERIENCE</h2>


<p className='leading-5 mt-8 w-full bg-green text-sm  text-center text-gray-900 '>continually productize plu-and-play strategic theme areas and accurate</p>
 </div>

{/* //  hero................... */}

<div className='flex items-center md:flex-col  justify-center w-full text-xs px-12 space-x-4 py-20'>


<div className=' bg-green- h-full md:w-full w-1/2 flex flex-col space-y-5'>
    <h3 className='w-full text-canter text-2xl leading-normal 
    font-bold text-gray-900'> WE MAKE SURE YOUR FOOD<br></br>ARRIVE-ON-TIME</h3>
    <p className='text-xl leading-7  text-gray-600  mt-4'>continually productize plug-and-play strategic them<br></br> areas abd accurate alignments.compelilngly incubate<br></br>out-of-the-box systems without interoperable sources.<br></br>assertively procrastinate just in time content. </p>
    <p className='bg-orange-500 w-1/4 md:w-1/3 text-center text-md font-bold p-3 rounded-2xl my-6'>SIGNUP</p>
 </div>
<div className='w-1/2 md:w-full py-20'>

        <Image className='w-full object-contain rounded-3xl'
          width="600" height="600" alt='fooddish'
          src="/images/dl.jpg"/>
  
</div>


</div>





    </div>
 
  )
}
export default Body
