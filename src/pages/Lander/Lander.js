import React from 'react'
import bg from '../../assets/pexels-allan-so-2622170.jpg'
import AllProducts from '../AllProducts/AllProducts'

export default function Lander() {
  return (
    <>
      <div className="h-screen w-full bg-black -z-10 absolute top-0 left-0 opacity-80">
        <img src={bg} alt="bg" className="w-full h-full"/>
      </div>
      <div className="z-20 text-white h-[40rem] flex flex-col justify-center items-center opacity-100">
        <span className="text-4xl font-medium">Be CREATIVE...</span>
        <span className="text-4xl font-medium">Be OPEN...</span>
        <span className="text-4xl font-medium">Be YOU...</span>
        <span className="text-9xl font-semibold">Be <i>SHOPOHOLIC!</i></span>
      </div>
      <div className="mt-10 z-[900]">
        <AllProducts />
      </div>
    </>
  )
}
