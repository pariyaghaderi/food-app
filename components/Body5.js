import React from 'react'
import Image from 'next/image'

export const Body5 = () => {
  return ( 
    <div className='pb-16'>
 {/* <div className=' flex flex-col   justify-center items-center w-full py-[10%] px-[10%]'>
      <Image className='w-full object-cover h-96 rounded-3xl'
    width="600" height="600" alt='chef'
    src="/images/food3.jpg"/>
    <p></p>
   </div> */}
  
  <div className=' relative inline-block py-10 w-full px-[10%]'>
  <Image className='w-full object-cover h-96 rounded-3xl'
    width="600" height="600" alt='chef'
    src="/images/food3.jpg"/>

<div className='z-20 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-[#00000070] w-1/2 h-1/2 px-4 py-2 rounded'>
               <div className='flex flex-col'>
                <p className=' text-center text-4xl font-bold leading-10 md:text-lg'>JOIN US AND GET <br></br>DISCONT UP TO 50 %</p>
                <div className=' flex just items-center  space-x-2 py-6 md:flex-col md:space-y-6'>
                  <p className='bg-white  py-2 w-5/6 md:w-full  rounded-full  text-gray-400 text-center titems-center'>your email here</p>
                  <p className='bg-yellow-400 w-1/6 rounded-3xl md:w-full py-2 text-center items-center'>sign in</p>

                </div>
                </div> 
  </div>

  </div>

    </div>

   
  )
}
{/* <div className='relative inline-block  max-h-96 transition delay-150 border-4 duration-300 brightness-50 hover:brightness-100  ease-in-out rounded-xl scale-100 hover:scale-125 shadow-2xl z-0 hover:z-10'>
               <Image src='/images/p1.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4 bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                  مشاوره خانواده
                     <div className='group w-full'>
                        <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                    </div>
                  </button>
            </div> */}