import React from 'react'
import Image from 'next/image'

export const Body3 = () => {
  return (
    
    <div className=' pb-12 pt-28 px-[10%]'>
        <div className='flex flex-row-reverse md:flex-col-reverse w-full px-[10%]'>
            <div className='w-1/2 md:w-full flex justify-end items-end '>
             <p className='bg-orange-500 w-1/4 text-center md:w-full  p-2 whitespace-nowrap rounded-3xl  my-5'>see more</p>

            </div>

            <div className='w-1/2 md:w-full '>
            <h3 className=' text-left font-bold text-gray-800 text-3xl '>EXTRAOADINARY TASTE <br></br>AND EXPERIENCE'</h3>
            <p className='text-gray-800 leading-6 pt-6'>continually productize plug-and-play strategic theme ares and accurate</p>
        
            </div>
            {/* ................................................... */}
            
           
        </div>
   
       <div className=' flex  justify-center items-center w-full py-[10%] px-[10%]'>
        <div className='grid gap-6 grid-cols-3 md:grid-cols-1'>
        <div className='flex flex-col'>
       <div className='bg-yellow-100 py-12 w-full rounded-2xl'>
       <Image className='w-full object-contain rounded-3xl     '
          width="600" height="600" alt='fooddish'
          src="/images/food6.png"/>
       </div>
          <p className='text-gray-800 font-bold text-lg py-7  text-center rounded-lg  '>Beef-potato </p>
          <p className='text-gray-800 leading-1'>continually productize plug-and-play <br></br>strategic theme areas and accurate .</p>

        </div>
{/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,2............................ */}
    <div className='flex flex-col'>
    <div className='bg-yellow-100 py-12 w-full rounded-2xl'>
       <Image className='w-full object-contain rounded-full     '
          width="600" height="600" alt='fooddish'
          src="/images/food5.png"/>
       </div>
          <p className='text-gray-800 font-bold text-lg py-7  text-center rounded-lg  '>Gado-gado </p>
          <p className='text-gray-800 leading-1'>continually productize plug-and-play <br></br>strategic theme areas and accurate .</p>

        </div>
       
       <div className='flex flex-col'>
       <div className='bg-yellow-100 py-12 w-full rounded-2xl'>
         <Image className='w-full object-contain  '
          width="600" height="600" alt='fooddish'         
           src="/images/food7.png"/>
          
          </div>
          <p className='text-gray-800 font-bold text-lg py-7  text-center rounded-lg  '>piatos salad </p>
          <p className='text-gray-800 leading-1'>continually productize plug-and-play <br></br>strategic theme areas and accurate .</p>
       </div>
       </div>
       
    </div>

    </div>  
    
    )
}
