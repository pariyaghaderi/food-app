import React from 'react'
import Image from 'next/image'
export const Body4 = () => {
  return (
    <div className=' flex flex-col   justify-center  items-center w-full py-[10%] px-[10%] '>
      <p className='text-gray-800 text-4xl font-bold leading-4 md:leading-10'>MEET OUR CHEFS</p>
      <p className='text-gray-800 text-lg py-[6%]'>cantinually productize plug-and-play strategic theme areas accurate</p>
         <div className='grid gap-6 grid-cols-4 md:grid-cols-2'>

          

          <div className='flex flex-col justify-center items-center  '>
            <Image className='w-full object-cover h-96 rounded-3xl     '
          width="600" height="600" alt='chef'
          src="/images/chef.jpg"/>
          <p className='text-gray-800 py-5 font-bold text-lg'>Rebecca</p>
          </div> 
          

          <div className='flex flex-col justify-center items-center'>
            <Image className='w-full object-cover h-96 rounded-3xl     '
          width="600" height="600" alt='chef'
          src="/images/chef7.jpg"/>
          <p className='text-gray-800 py-5 font-bold text-lg'>Souma</p>

          </div>
        

          <div className='flex flex-col justify-center items-center'>
            <Image className='w-full object-cover h-96 rounded-3xl     '
          width="600" height="600" alt='chef'
          src="/images/chef3.jpg"/>
          <p className='text-gray-800 py-5 font-bold text-lg'>Galibis</p>
          
          </div>
       

          <div  className='flex flex-col justify-center items-center'>
            <Image className='w-full object-cover h-96 bg-top rounded-3xl     '
          width="600" height="800" alt='chef'
          src="/images/chef12.jpg"/>
          <p className='text-gray-800 py-5 font-bold text-lg'>ken shin</p>
          
          </div>

          
         
          </div>
          <p className='bg-orange-500 w-28 text-center  py-2 rounded-3xl  my-5'>see more</p>

          
     </div>  
  )
}



{/* <div className='bg-yellow-100 py-12 w-full rounded-2xl'>
        <Image className='w-full object-contain rounded-3xl     '
           width="600" height="600" alt='fooddish'
           src="/images/food5.png"/>
        </div> */}