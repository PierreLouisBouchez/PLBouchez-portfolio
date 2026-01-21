import githubLogo from '/Images/github.png'; // ajuste le chemin si besoin
import LinkedinLogo from '/Images/Linkedin.png'; // ajuste le chemin si besoin
import InstagramLogo from '/Images/Instagram.png'; // ajuste le chemin si besoin
import { useEffect, useState } from 'react';

export default function Header({currentMenu,setCurrentMenu,Menus}) {
    const [intensity,setIntensity] = useState(0)
    const [indexColor,setIndexColor]= useState(0);
    const colors=["red","blue","green","yellow","purple"]

    useEffect(() => {
      const strobe =setInterval(()=>{
        
        setIntensity(value=>(value+50)%100);
      },500)
    
      return () => {
        clearInterval(strobe);     
      }
    }, [intensity]);
    

    return (
      <div className="flex w-[620px] mr-16 perspective-near perspective-origin-bottom-right h-[100vh] ">
        <div className="w-full h-full bg-cover bg-size-[200%] bg-no-repeat bg-right-bottom  bg-[url(/Images/Untitled.webp)] ">      </div>

        <div className={` absolute  cursor-grab h-6 w-6 rounded-full ${intensity<50?"blur-xs bg-white border-5 border-red-700":"bg-red-900 blur-xs"}  bottom-[1.3rem] left-[29.35rem] `}  >
        </div>
        <div>
          <svg className='absolute bottom-[7.1rem] left-[27.7rem] blur-[0.5px]' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" role="img" aria-labelledby="title">
{/*               <circle cx="50" cy="50" r="1.6" fill="#222"/>
 */}              <line x1="50" y1="35" x2="50" y2="16" stroke="#262626" stroke-width="6" stroke-linecap="sqaure">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="4s" repeatCount="indefinite" calcMode="discrete"
                      keyTimes="0;0.083;0.166;0.25;0.333;0.416;0.5;0.583;0.666;0.75;0.833;0.916;1"
                      values="0 50 50;30 50 50;60 50 50;90 50 50;120 50 50;150 50 50;180 50 50;210 50 50;240 50 50;270 50 50;300 50 50;330 50 50;360 50 50"/>              
                  </line>
            </svg>
        </div>
        







        <a href='https://github.com/PierreLouisBouchez' 
        target="_blank" 
        className="absolute bottom-[3.3rem]  left-[3.7rem] flex h-[6.6rem] max-h-[6.6rem] rounded-2xl cursor-pointer w-[6.6rem] hover:-translate-z-1 transition-transform align-bottom">

          <img src={githubLogo} className='w-full h-full' alt="Logo GitHub" />
        </a>
        
        <a href='https://linkedin.com/in/pierre-louis-bouchez/' 
        target="_blank" 
        className="absolute bottom-[3.3rem] left-[10.7rem] flex h-[6.6rem] max-h-[6.6rem] rounded-2xl cursor-pointer w-[6.6rem] hover:-translate-z-1 transition-transform align-bottom">

          <img src={LinkedinLogo} className='w-full h-full' alt="Logo GitHub" />
        </a>
        
        <a href='https://www.instagram.com/paouis__/' 
        target="_blank" 
        className="absolute bottom-[3.3rem] left-[17.7rem] flex h-[6.6rem] max-h-[6.6rem] rounded-2xl cursor-pointer w-[6.6rem] hover:-translate-z-1 transition-transform align-bottom">
          <img src={InstagramLogo} className='w-full h-full' alt="Logo GitHub" />
        </a>

        <a href='https://letterboxd.com/paouis/' 
        target="_blank" 
        className="absolute bottom-[17rem] left-[9.5rem] hover:bg-white blur-xl opacity-50  flex h-[3rem] max-h-[4rem] rounded-2xl w-[4rem] cursor-pointer align-bottom z-50"/>
        
        
        <div className="absolute w-[28rem] h-[80%] p-8 text-3xl text-[#262626] blur-[0.75px] select-none" >
          <h1 className="font-bold w-full border-gris border-4 p-2 bg-[#AACCAA] text-xl border-r-8 border-b-10 ">
              PIERRE-LOUIS<br/>BOUCHEZ               
          </h1>
          <div className="flex flex-col pt-7 items">
          {Menus.map((menu, index) => (
            <div key={index}>
              <h2
                className="hover:text-gray-600 py-2 cursor-pointer"
                onClick={() => setCurrentMenu(menu.code)}
              >
                {(menu.code === currentMenu ? ">" : " ") + menu.title}
              </h2>
            </div>
          ))}
          </div>
        </div>
      </div>
    )
  };