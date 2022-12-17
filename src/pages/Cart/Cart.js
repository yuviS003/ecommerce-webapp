import {  Slider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { SlLocationPin } from 'react-icons/sl'
import { RiDeleteBin6Line } from 'react-icons/ri'
import data from '../../data/cart-product.json'

export default function Cart() {
    const [cartProducts, setCartProducts] = useState([])
    useEffect(() => {
        setCartProducts(data)
    }, [])
    return (
        <div className="min-h-screen">
            <div className="w-[50%] min-h-[85%] m-auto mt-10 flex flex-col border border-gray-300 rounded-xl mb-5">
                <div className="w-full h-20 pl-5 flex items-center text-3xl font-medium tracking-wide border-b border-gray-300">
                    <span className='text-4xl mr-1'>{cartProducts.length}</span> Items in your Cart
                </div>
                <div className="w-full h-10 pl-2 flex items-center text-lg font-medium tracking-wide border-b border-gray-300">
                    <SlLocationPin className="mx-4 text-xl text-red-400" />
                    Deliver To:
                    <span className=" font-normal ml-1">29-B, Geeta Palli, Alambagh, Lucknow 226005</span>
                </div>
                {cartProducts.map((prod, index) => {
                    return (
                        <div className="border-b border-gray-300 border-collapse w-full h-[250px] flex justify-center items-center" key={index}>
                            <img src={prod.image} alt="prod" className='w-[175px] h-[175px]' />
                            <div className="w-[75%] h-[220px] flex flex-col justify-between px-2">
                                <div className='flex flex-col'>
                                    <div
                                        className="font-semibold text-lg h-18 overflow-hidden"
                                        title={prod.p_name}
                                    >
                                        {prod.p_name}
                                    </div>
                                    <div className="font-light text-gray-500">
                                        MRP ₹<span className=" ml-1 font-bold text-black text-lg">{prod.p_cost}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between h-20 items-center">
                                    <span className='w-[400px]'>
                                        QTY.
                                        <Slider
                                            aria-label="Quantity"
                                            defaultValue={1}
                                            // getAriaValueText={valuetext}
                                            valueLabelDisplay="auto"
                                            step={1}
                                            marks
                                            min={1}
                                            max={10}
                                            className="ml-4"
                                        />
                                    </span>
                                    <button type="button" className='w-[80px] h-[30px] flex justify-center items-center text-red-500 hover:text-red-700 cursor-pointer'><RiDeleteBin6Line className="text-lg mr-1" />Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
