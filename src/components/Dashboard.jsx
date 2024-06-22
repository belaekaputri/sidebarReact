/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'
// eslint-disable-next-line react/prop-types
const Dashboard = ({SidebarToggle,setSidebarToggle}) => {
  return (
    <div className={`${SidebarToggle? "":"ml-64 " } `}>
     <Navbar SidebarToggle={SidebarToggle} setSidebarToggle={setSidebarToggle} />
    </div>
  )
}

export default Dashboard
