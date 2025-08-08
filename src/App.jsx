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

  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * -10; // sensibilité
    const y = (e.clientY / innerHeight - 0.5) * -10;
    setOffset({ x, y });
  };

  return (
    <div className='h-screen w-screen font-Victor flex xl:flex-row flex-col bg-[] bg-cover bg-bottom-left  overflow-clip' onMouseMove={handleMouseMove}     >
      <div className='fixed h-full w-full overflow-clip -z-50'   style={{backgroundImage: `url(${Background})`,          transform: `translate(${offset.x}px, ${offset.y}px) scale(1.05)`,}}></div>
      <div className="absolute w-screen h-screen opacity-10 z-50 pointer-events-none bg-[url(/Images/Noise.jpg)]"></div>
        
        { !isMobile && <Header currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} Menus={Menus}/>
        }
        

        { isMobile && <HeaderMobile currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} Menus={Menus}/>}
        <div className={`relative flex-1 w-[100%]  h-[100vh] overflow-hidden transition-transform duration-1000 xl:pl-4 ${currentMenu == "Project" ? "none" : "translate-x-full"}`}>

          <Projects />
        </div>
        {currentMenu == "About" && <About/>}

    </div>
  )
}

export default App
