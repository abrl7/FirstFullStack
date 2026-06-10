
import React from 'react'

const Username = async ({ params }) => {

  return (
    <>

      <div className="cover w-full bg-red-50 relative">
        <img className='object-cover  w-full h-[350] ' src="aakash.jpeg" alt="" />
        <div className='absolute border rounded-lg border-white -bottom-15 right-[44%]'>
          <img className='rounded-lg' src="Pp_1.JPG" width={170} height={170} alt="" />
        </div>
      </div>

      <div className="info flex flex-col gap-2 justify-center items-center my-16">
        <div className='font-bold text-3xl'>@{(await params).username}</div>
        <div className='text-slate-400'>
          creating YouTube videos that solve the most important problems
        </div>
        <div className='text-slate-400'>
          128 posts
        </div>

        <div className="payment flex gap-3 w-[80%] mt-7">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg p-10">
            {/* show the list of supporter as leaderboard */}
            <h2 className='font-bold my-5 text-2xl '>Supporters</h2>
            <ul className='mx-5 text-lg'>
              <li className='my-4 flex items-center gap-2'>
                <img className='invert' src="sup.gif" width={33} alt="" />
               <span>karan donated <span className="font-bold"> $30</span> with "i support youuuu♥️"</span>
                </li>
              <li className='my-4 flex items-center gap-2'>
                <img className='invert' src="sup.gif" width={33} alt="" />
               <span>karan donated <span className="font-bold"> $30</span> with "i support youuuu♥️"</span>
                </li>
              <li className='my-4 flex items-center gap-2'>
                <img className='invert' src="sup.gif" width={33} alt="" />
               <span>karan donated <span className="font-bold"> $30</span> with "i support youuuu♥️"</span>
                </li>
            </ul>
          </div>


          <div className="makepayment w-1/2 bg-slate-900 rounded-lg p-10">
            <h2 className='font-bold my-5 text-2xl '>Make a Payment</h2>
            <div className="flex flex-col gap-2">
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
              <button type="button" className="text-white  rounded-lg bg-gradient-to-br from-purple-700 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Pay</button>
            </div>
            {/* or choose from this amount */}
            <div className="flex gap-2 mt-5">
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $10</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $20</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username