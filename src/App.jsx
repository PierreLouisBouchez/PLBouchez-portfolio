import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Projects from './Homepage'

function App() {
  const [currentMenu,setCurrentMenu]=useState("Project");

  return (
    <div className='h-screen w-screen font-Victor flex flex-row bg-[#ababab] overflow-x-hidden'>
      <div className="absolute w-screen h-screen opacity-10 z-50 pointer-events-none bg-[url(/Images/Noise.jpg)]"></div>
        <Header currentMenu={currentMenu} setCurrentMenu={setCurrentMenu}/>
        
        <Projects/>    
    </div>
  )
}

export default App
