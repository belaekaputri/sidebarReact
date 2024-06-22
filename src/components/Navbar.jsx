/* eslint-disable no-unused-vars */
import React from 'react'
import {FaHome, FaPoll, FaRegEnvelope} from 'react-icons/fa'
import { FaBars,FaBell,FaSearch,FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Navbar = ({SidebarToggle,setSidebarToggle}) => {
  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
}
  return (
    <nav className='bg-indigo-500 px-4 py-3 flex justify-between' >
      <div className='flex items-center text-xl'>
        <FaBars className='text-white me-4 cursor-pointer' onClick={()=>setSidebarToggle(!SidebarToggle)}/>
      </div>
      
      <div className='flex items-center gap-x-5'>
      
      <div className='relative' >
        <button className='text-white  group'>
            <FaUserCircle className='w-6 h-6 mt-1'/>
            <div className='z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
                <ul className='py-2 text-sm text-gray-950'>
                    <li> <div className='py-2 text-sm text-gray-950' onClick={handleClick}>Logout</div></li>
                </ul>
            </div>
        </button>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
