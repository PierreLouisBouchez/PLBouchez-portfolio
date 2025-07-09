import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Projects from './Homepage'
import About from './Components/About'
import Background from '/Images/Background.png'

function App() {
  const [currentMenu,setCurrentMenu]=useState("Project");

  return (
    <div className='h-screen w-screen font-Victor flex flex-row bg-[] bg-cover   overflow-x-hidden' style={{backgroundImage: `url(${Background})`}}>
      <div className="absolute w-screen h-screen opacity-10 z-50 pointer-events-none bg-[url(/Images/Noise.jpg)]"></div>
        <Header currentMenu={currentMenu} setCurrentMenu={setCurrentMenu}/>
        {currentMenu == "Project" && <Projects/>}
        {currentMenu == "About" && <About/>}

    </div>
  )
}

export default App
