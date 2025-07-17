import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Projects from './Homepage'
import About from './Components/About'
import Background from '/Images/Background.webp'

function App() {
  const [currentMenu,setCurrentMenu]=useState("Project");

  return (
    <div className='h-screen w-screen font-Victor flex flex-row bg-[] bg-cover bg-bottom-left  overflow-x-hidden' style={{backgroundImage: `url(${Background})`}}>
      <div className="absolute w-screen h-screen opacity-10 z-50 pointer-events-none bg-[url(/Images/Noise.jpg)]"></div>
        <Header currentMenu={currentMenu} setCurrentMenu={setCurrentMenu}/>
        <div className={`relative flex-1 w-[100%]  h-[100vh] overflow-hidden transition-transform duration-1000 pl-4 ${currentMenu == "Project" ? "none" : "translate-x-full"}`}>

          <Projects />
        </div>
        {currentMenu == "About" && <About/>}

    </div>
  )
}

export default App
