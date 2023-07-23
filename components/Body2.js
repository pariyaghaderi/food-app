import React from 'react'
import Image from 'next/image'

const Body2 = () => {
  return (
    <div className=' min-h-screen flex justify-center items-center px-[10%]'>
        
        <div className='grid  gap-16 grid-cols-2 md:grid-cols-1'>
          {/* 1.............. */}
            <div className='flex flex-col justify-center items-start space-y-5'>
                <p className='font-bold text-gray-800 text-2xl text-left
                w-full'>HICH QUAKITY FOOD <br></br>MATERIAL </p>
            
            <p className='text-gray-800 pr-[10%]'>continually productize plug-and-play strategic theme areas and accurate alignaments.compellingly incubate out-of-the-box systems without interoperable sources.assertively procrastinate just in time content via fully researched bandwidth competently </p>
            <p className='bg-orange-500 w-1/4 md:w-1/3 text-center whitespace-nowrap p-2 rounded-3xl my-6'>READ MORE</p>

            </div>

            {/* 2................. */}
            <div>
          <Image className='w-full object-contain  scale-110 rounded-3xl    '
          width="600" height="600" alt='fooddish'
          src="/images/food4.jpg"/>
          
                </div>
            {/* 3............ */}
           <div> <Image className='w-full object-contain rounded-3xl  '
          width="600" height="600" alt='fooddish'
          src="/images/food1.jpg"/>
          </div>

           {/* 4.......................... */}
           <div className='flex flex-col justify-center items-start'>
            <p className='font-bold text-gray-800 text-2xl '> VARIOUS MENUS YOU CAN </p>
           <p className=' text-gray-800  '><br>
           </br>PICK'contiually productize plug-and-play strategig theme areas and accurate alignmanets.
            compellingly incubate out-of-the-box systems without interoperable source. assertively
             procrastinate just in time content via fully reseached bandwidth competently
             </p>
           <p className='bg-orange-500 w-1/4 text-center  whitespace-nowrap md:w-1/3  p-2 rounded-3xl text-md my-6'>READ MORE</p> 
           
           

           </div>



          

          

        </div>


    </div>
  )
}

export default Body2
