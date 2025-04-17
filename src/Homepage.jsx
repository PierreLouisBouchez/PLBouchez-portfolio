import { useState } from "react";

const cards = [
    { title: "Bomberman", color: "bg-yellow-400" },
    { title: 2, color: "bg-orange-400" },
    { title: 3, color: "bg-blue-700" },
    { title: 4, color: "bg-red-700" },
    { title: 5, color: "bg-orange-400" },
    { title: 6, color: "bg-yellow-400" },
    {title: 7, color: "bg-yellow-400" },
    { title: 8, color: "bg-orange-400" },
    { title: 9, color: "bg-blue-700" },
    { title: 10, color: "bg-red-700" },
    { title: 11, color: "bg-orange-400" },
    { title: 12, color: "bg-yellow-400" },
  ];
  
  const HoverCard = ({ idproject, text,handler }) => (
    <div className={`relative select-none bg-[#bdbdbd] h-[350px] w-[350px]  outline-4 outline-gris overflow-hidden shadow-abberationrelief `} onClick={()=>{handler(idproject)}}>
      <div className="absolute inset-0 hover:bg-black/60 transition duration-300 flex items-center justify-center opacity-80 hover:opacity-100">
        <p className="text-white text-lg font-bold">{text}</p>
      </div>
    </div>
  );

export default function Projects() {

    const [currentProject,setCurrentProject]=useState(null)

    const handleClick=(id)=>{
      console.log(id);      
      
      setCurrentProject(currentProject==id?null:id);
    };

    return (
      <div className=" flex-1 perspective-normal  h-100vh overflow-hidden">
        <div className="absolute h-[100%] w-[95%]  translate-x-3 -translate-3 perspective-origin-top-left rotate-x-[2deg] rotate-y-[1deg] -rotate-z-2 transform-3d justify-center overflow-hidden p-4">
        {(
          <div className="w-full h-full p-6 border-4 border-t-8 border-r-8 border-gris shadow-abberation bg-white">
            <div className="w-full h-full border-4 border-t-8 border-r-8 border-gris overflow-hidden bg-radial from-green-950 from-20% to-[#101010]">
              <div className="text-white flex h-16 text-5xl inset-y-15 right-16 absolute  cursor-pointer text-shadow-neonblanc  " onClick={()=>{setCurrentProject(null)}}>{"-->"}</div>
              <div className="p-6 text-6xl select-none text-shadow-neonblanc">
                {currentProject}
                </div>
            </div>
          </div>
        )}

        </div>
        <div id='liste' className={`${currentProject!=null?"translate-x-full border-l-[20px] border-gris":"none"} w-[95%] bg-[#ababab] transition-transform duration-500 right-0 items-right h-[103%]  translate-x-2 -translate-4 perspective-origin-top-left rotate-x-[2deg] rotate-y-[1deg] -rotate-z-2 transform-3d justify-center overflow-y-scroll p-4 grid lg:grid-cols-3 grid-cols-2  gap-6`}>
          {cards.map((card, index) => (
            <HoverCard
            idproject={card.title}
            handler={handleClick}
            text={`Projet ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }
  