import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Projects from './ProjectPage'
import About from './Components/About'
import HeaderMobile from './Components/HeaderMobile'
import Hobby from './Components/Hobby'
import MainPage from './Components/MainPage'
import { Route, Routes } from 'react-router-dom'
import MockUpHome from './MockUpBook/MockUpHome'

function App() {  
  

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<MainPage />} />
      <Route path="/MockABook" element={<MockUpHome />} />
    </Routes>
  )
}

export default App
