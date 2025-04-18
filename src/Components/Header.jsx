import githubLogo from '/Images/github.png'; // ajuste le chemin si besoin


export default function Header({currentMenu,setCurrentMenu}) {

    const Menus=
      [
        {"title":"ABOUT ME","code":"About"},
        {"title":"PROJECT","code":"Project","subCategories":[{"title":"Game dev","code":"Games"},{"title":"Web dev","code":"Web"}]},
        {"title":"HOBBY","code":"Hobby"}

      ]
    ;

    return (
      <div className="flex w-[620px] ">
        <div className="w-full h-full bg-cover bg-size-[200%] bg-no-repeat bg-right-bottom  bg-[url(/Images/Untitled.png)]"></div>
        <a href='https://github.com/PierreLouisBouchez' 
        target="_blank" 
        className="absolute bottom-[3.3rem] left-[3.7rem] flex h-[6.6rem] rounded-2xl cursor-pointer w-[6.6rem] hover:translate-1 transition-transform align-bottom">

          <img src={githubLogo} alt="Logo GitHub" />
        </a>
        
        
        
        
        
        
        
        <div className="absolute w-[90%] h-[80%] p-8 text-3xl text-[#262626] blur-[0.75px] select-none" >
          <h2 className="text-4xl font-bold w-72">
            PIERRE-LOUIS BOUCHEZ 
          </h2>
          <div className="flex flex-col pt-7 ">
          {Menus.map((menu, index) => (
            <div key={index}>
              <h2
                className="hover:text-gray-600 py-2 cursor-pointer"
                onClick={() => setCurrentMenu(menu.code)}
              >
                {(menu.code === currentMenu ? ">" : " ") + menu.title}
              </h2>

              {menu.code === currentMenu && menu.subCategories &&
                menu?.subCategories.map((item, id) => (
                  <h3 className="hover:text-gray-600 py-2 cursor-pointer text-2xl pl-6" key={id}>{item.title}</h3>
                ))
              }
            </div>
          ))}
          </div>
        </div>
      </div>
    )
  };