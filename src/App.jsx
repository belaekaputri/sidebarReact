import { Routes, Route } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import HomePage from './pages/HomePage';
import './App.css'
import SideNav from './pages/SideNav'
import AddNewPage from './pages/AddNewPage'; 



function App() {
  const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    const handleSubmit=()=>{
        if(email.current.value=="admin"&&password.current.value=="admin123"){
            localStorage.setItem("emailData","admin")
            localStorage.setItem("passwordData","admin123")
        }
    }
  return (
    <>
    {
      getEmail&&getPassword?
      <>
      <header>
       <SideNav />
      </header>
      <main>
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/news/new" element={<AddNewPage />} />
              </Routes>
            </main>
            </>
      :
    
      <div className='w-screen h-screen flex items-center justify-center '>
      <form onSubmit={handleSubmit}className='flex flex-col items-center justify-center w-1/4 h-60 rounded-lg  bg-indigo-300'>
          <input type="text" className=' outline-indigo-500 px-2 py-2 w-3/4 h-9 border-indigo-200  m-1.5 ' ref={email} placeholder='Username' />
          <input type="password" className='outline-indigo-500 px-2 py-2 w-3/4 h-9  border-indigo-400  m-1.5' ref={password} placeholder='Password' />
      <button className='bg-indigo-500 w-3/4 h-9  m-1.5'>Login</button>
  </form>
  </div>
  }
     
   
  </>
  )
}


export default App
