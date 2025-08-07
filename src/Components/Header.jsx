import githubLogo from '/Images/github.png'; // ajuste le chemin si besoin
import LinkedinLogo from '/Images/Linkedin.png'; // ajuste le chemin si besoin
import InstagramLogo from '/Images/Instagram.png'; // ajuste le chemin si besoin

export default function Header({currentMenu,setCurrentMenu,Menus}) {

    

    return (
      <div className="flex w-[620px] mr-16 perspective-near perspective-origin-bottom-right h-[100vh] ">
        <div className="w-full h-full bg-cover bg-size-[200%] bg-no-repeat bg-right-bottom  bg-[url(/Images/Untitled.webp)]"></div>
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
        className="absolute bottom-[17rem] left-[7rem] hover:bg-white blur-xl opacity-50  flex h-[3rem] max-h-[4rem] rounded-2xl w-[4rem] cursor-pointer align-bottom z-50"/>
        
        
        <div className="absolute w-[28rem] h-[80%] p-8 text-3xl text-[#262626] blur-[0.75px] select-none" >
          <div className="font-bold w-full border-gris border-4 p-2 bg-[#AACCAA] text-5xl border-r-8 border-b-10 ">
            <div className='underline decoration-[#262626] decoration-2 underline-offset-4'>
              PIERRE-LOUIS
              </div>
              BOUCHEZ               
          </div>
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