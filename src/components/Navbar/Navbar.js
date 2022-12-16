import React from 'react'
import { Link } from 'react-router-dom'
import NavLogo from '../../assets/nav-logo_preview_rev_1.png'

export default function Navbar() {
    return (
        <nav className='h-[70px] flex items-center justify-between border-gray-400 border-b sticky top-0 w-full pl-2 pr-10 bg-white'>
            <div className="max-h-fit max-w-fit flex items-center cursor-pointer">
                <img src={NavLogo} alt="navLogo" className="w-[50px]" />
                <span className="text-xl mx-1 ml-2 tracking-widest font-semibold">SHOPOHOLIC</span>
            </div>
            <ul id="nav-links" className="flex min-w-fit">
                <Link to="/">
                    <li className="mx-10 cursor-pointer text-lg  hover:underline">HOME</li>
                </Link>
                <Link to="/offers">
                    <li className="mx-10 cursor-pointer text-lg  hover:underline">OFFERS</li>
                </Link>
                <Link to="/sale">
                    <li className="mx-10 cursor-pointer text-lg  hover:underline">SALE</li>
                </Link>
                <Link to="/contact">
                    <li className="mx-10 cursor-pointer text-lg  hover:underline">CONTACT</li>
                </Link>

            </ul>
        </nav>
    )
}
