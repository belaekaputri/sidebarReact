
import Dashboard from '../components/Dashboard'
import Sidebarr from '../components/Sidebarr'
import { useState } from 'react';
function SideNav() {

  const [SidebarToggle,setSidebarToggle]= useState(false);
  return (
    <div>
     <Sidebarr SidebarToggle={SidebarToggle}/>
     <Dashboard SidebarToggle={SidebarToggle} setSidebarToggle={setSidebarToggle}/>
    </div>
  )
}

export default SideNav
