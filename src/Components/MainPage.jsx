import { useState } from "react";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Projects from "../ProjectPage";
import Hobby from "./Hobby";
import About from "./About";



function MainPage() {
  const [currentMenu,setCurrentMenu]=useState("Project");
  const isMobile = window.innerWidth < 768 || window.innerHeight - window.innerWidth > 0;

  const Menus=
      [
        {"title":"ABOUT ME","code":"About"},
        {"title":"PROJECTS","code":"Project","subCategories":[{"title":"Game dev","code":"Games"},{"title":"Web dev","code":"Web"}]},
        {"title":"2D & 3D","code":"Hobby"}

      ]
    ;

  

  return (
    <div className={`h-screen w-screen font-Victor flex xl:flex-row flex-col bg-[url(/Images/Background.webp)] bg-cover bg-bottom-left  overflow-clip`}    >
      <div className="absolute w-screen h-screen opacity-10 z-50 pointer-events-none bg-[url(/Images/Noise.jpg)]"></div>
        
        { !isMobile && <Header currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} Menus={Menus}/>
        }
        

        { isMobile && <HeaderMobile currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} Menus={Menus}/>}
        
        <div className='flex-1 relative flex '>

          <div className={`absolute w-[100%]  h-[100vh]  transition-transform duration-1000 xl:pl-4 ${currentMenu == "Project" ? "none" : "translate-x-full"}`}>
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

export default MainPage
