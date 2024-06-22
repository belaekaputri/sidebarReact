/* eslint-disable no-unused-vars */
import { BsClipboardData } from "react-icons/bs";
import { LuFileInput } from "react-icons/lu";
import {FaHome, FaPoll, FaRegEnvelope} from 'react-icons/fa'
import React from 'react'
import AddNewPage from '../pages/AddNewPage';
import { FaBars,FaBell,FaSearch,FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Sidebarr = ({SidebarToggle}) => {
  return (
    <div className={`${SidebarToggle?" hidden ":"block"} w-64 bg-indigo-500 fixed h-full px-4 py-2`} > 
      <div className='my-2 mb-4'>
        <h1 className='text-2x text-white font-bold'>Admin Dashboard</h1>
      </div>
      <hr />
      <ul className='mt-3 text-white font-bold'>
         <li className='mb-2 rounded hover:shadow hover:bg-indigo-300 py-2'> <Link to="/home" className='px-3'><BsClipboardData className='inline-block w-6 h-6 mr-2 -mt-2'></BsClipboardData>News</Link>
         </li>
        
         <li className='mb-2 rounded hover:shadow hover:bg-indigo-300 py-2'> 
         <Link to="/news/new" className='px-3'><LuFileInput className='inline-block w-6 h-6 mr-2 -mt-2'  />Entry News</Link>
         </li>
          
      </ul>
    </div>
  )
}

export default Sidebarr
