import React from 'react'

export default function HeaderMobile({ currentMenu, setCurrentMenu, Menus }) {
  return (
    <div className="font-bold h-34 w-full border-gris lg:border-b-8 border-b-2  bg-[#AACCAA]  text-[#262626] ">
      <h2
        className="hover:text-gray-600 w-full cursor-pointer border-b-2 flex px-4 py-2 text-3xl items-center justify-center"
      > Pierre-Louis BOUCHEZ
      </h2>
      <div className="flex justify-between  bg-gray-300 py-2 text-2xl">
        {Menus.map((menu, index) => (
          <div key={index} className='  justify-start '>
            <h2 className="hover:text-gray-600 px-2 cursor-pointer"
              onClick={() => setCurrentMenu(menu.code)}>
              {(menu.code === currentMenu ? ">" : " ") + menu.title}
            </h2>

          </div>
        ))}
      </div>
    </div>
  )
}
