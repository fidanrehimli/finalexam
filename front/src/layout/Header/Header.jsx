import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";



const Header = () => {
  return (
    <div>
        <header>
            <h1 className='headertext'>ARANOZ<span>.</span></h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"} className={(navData)=>navData.isActive? "active":""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/pages"} className={(navData)=>navData.isActive? "active":""}>Pages</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/shop"} className={(navData)=>navData.isActive? "active":""}>Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/form"} className={(navData)=>navData.isActive? "active":""}>Form</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/detail"} className={(navData)=>navData.isActive? "active":""}>Detail</NavLink>
                    </li>
                </ul>
            </nav>
            <div className='headericons'>
            <IoIosSearch />
            <CiHeart />
            <FaBasketShopping />
            </div>
            <div className='menu'>
            <IoMenu />

            </div>
        </header>

    </div>
  )
}

export default Header