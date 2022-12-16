import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import Rating from '@mui/material/Rating';
import data from '../../data/products.json'



export default function AllProducts() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        console.log(data)
        setProducts(data)
        console.log(products)
    }, [])
    return (
        <div className="h-screen p-5">
            <span className='text-2xl ml-2 tracking-widest'>Funny Stickers and Goofy Magnets</span>
            <Carousel itemsToShow={4}>
                {products.map((prod, index) => {
                    return (
                        <div className="h-[400px] w-full flex flex-col justify-center items-center" key={index}>
                            <img src={prod.image} alt="img" className='w-[200px]' />
                            <div className="flex flex-col my-1 min-w-[200px]">
                                <Rating name="read-only" value={prod.p_rating} readOnly />
                                <span
                                    className='text-lg m-1'
                                    title={prod.p_name}
                                >
                                    {prod.p_name.split('').slice(0, 12).join('')}...
                                </span>
                                <span className="flex pl-2">
                                    ₹
                                    <span className="text-3xl">{prod.p_cost.split('.')[0]}</span>
                                    .
                                    <span className="">{prod.p_cost.split('.')[1]}</span>
                                </span>
                                <button type="button" className='w-[200px] bg-yellow-400 text-lg flex justify-center items-center m-2 p-1 rounded-md border border-gray-200 hover:bg-yellow-300'>Add to Cart</button>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}


