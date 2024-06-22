import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css'
import SideNav from './pages/SideNav'
import LoginPage from './pages/LoginPage'
import AddNewPage from './pages/AddNewPage'; 



function App() {
  
  return (
    <>
      <header>
       <SideNav/>
      </header>
    <main>
    <Routes>
    <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/news/new" element={<AddNewPage />} />
     
    </Routes>
  </main>
  </>
  )
}

export default App
