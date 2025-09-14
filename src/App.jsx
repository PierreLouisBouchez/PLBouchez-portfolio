import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Projects from './ProjectPage'
import About from './Components/About'
import Background from '/Images/Background.webp'
import HeaderMobile from './Components/HeaderMobile'
import Hobby from './Components/Hobby'

function App() {
  const [currentMenu,setCurrentMenu]=useState("Project");
  const isMobile = window.innerWidth < 768 || window.innerHeight - window.innerWidth > 0;

  const Menus=
      [
        {"title":"ABOUT ME","code":"About"},
        {"title":"PROJECTS","code":"Project","subCategories":[{"title":"Game dev","code":"Games"},{"title":"Web dev","code":"Web"}]},
        {"title":"HOBBY","code":"Hobby"}

      ]
    ;

  

  return (
    <div className={`h-screen w-screen font-Victor flex xl:flex-row flex-col bg-[url(/Images/Background.webp)] bg-cover bg-bottom-left  overflow-clip`}    >
      <div className="absolute w-screen h-screen opacity-10 z-50 pointer-events-none bg-[url(/Images/Noise.jpg)]"></div>
        
        { !isMobile && <Header currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} Menus={Menus}/>
        }
        

        { isMobile && <HeaderMobile currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} Menus={Menus}/>}
        
        <div className='flex-1 relative flex overflow-hidden'>

          <div className={`absolute w-[100%]  h-[100vh] overflow-hidden transition-transform duration-1000 xl:pl-4 ${currentMenu == "Project" ? "none" : "translate-x-full"}`}>
            <Projects />
          </div>
          <div className={`absolute  w-[100%]  h-[100vh] overflow-hidden transition-transform duration-1000 xl:pl-4 ${currentMenu == "About" ? "none" : "translate-x-full"}`}>

            {currentMenu == "About" && <About/>}
          </div>
          <div className={`absolute  w-[100%]  h-[100vh] overflow-hidden transition-transform duration-1000 xl:pl-4 ${currentMenu == "Hobby" ? "none" : "translate-x-full"}`}>

            {currentMenu == "Hobby" && <Hobby/>}
          </div>
        </div>
    </div>
  )
}

export default App
