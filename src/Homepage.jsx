import { useState } from "react";

const cards = [
    { title: "Make Your Stand x Squeegee", image: "mys.png" },
    { title: "Aigle", image: "aigle.png" },{ title: "Aigle", image: "aigle.png" },{ title: "Aigle", image: "aigle.png" },{ title: "Aigle", image: "aigle.png" },
  ];
  
  const HoverCard = ({ project, handler }) => {
    const base = import.meta.env.BASE_URL;

    return (
      
  <div     className="relative select-none bg-center bg-cover bg-no-repeat min-h-86 h-2/3  min-w-64 w-92 outline-4 outline-gris overflow-hidden shadow-abberationrelief translate-y-6 "   onClick={()=>{handler(project.title)}}>
    <img
          src={`${base}/projects/${project.image}`}
          alt={project.title}
          className="object-cover object-top  w-full h-full"
          loading="lazy"
        />
    <div className="absolute inset-0 hover:bg-black/60 transition duration-300 flex items-center justify-center opacity-0 hover:opacity-100  hover:translate-z-24">
      <p className="text-white text-lg font-bold">{project.title}</p>
    </div>
  </div>



    );
  };
  

export default function Projects() {

    const [currentProject,setCurrentProject]=useState(null)

    const handleClick=(id)=>{
      console.log(id);      
      
      setCurrentProject(currentProject==id?null:id);
    };

    return (
      <div className=" flex-1 perspective-normal perspective-origin-top-left  h-100vh overflow-hidden">
        <div className="absolute h-[100%] w-[95%]  translate-x-3 -translate-3 rotate-x-[2deg] rotate-y-[1deg] transform-3d justify-center overflow-hidden p-4">
        {(
          <div className="w-full h-full p-6 border-4 border-t-8 border-r-8 border-gris shadow-abberation bg-[#ababab] ">
            <div className="w-full h-full border-4 border-t-8 border-r-8 border-gris overflow-hidden bg-radial from-green-950 from-20% to-[#101010]">
              <div className="text-white flex h-16 text-5xl inset-y-15 right-16 absolute  cursor-pointer text-shadow-neonblanc  " onClick={()=>{setCurrentProject(null)}}>{"-->"}</div>
              <div className="p-6 text-6xl select-none text-shadow-neonblanc">
                {currentProject}
                </div>
            </div>
          </div>
        )}

        </div>
        <div id='liste' className={`${currentProject!=null?"translate-x-full border-l-[20px] ":"none border-l-4"} w-[95%] bg-[#ababab] border-gris shadow-abberation transition-transform duration-500 right-0 items-right h-[103%]  translate-x-2 -translate-4 ] rotate-x-[2deg] rotate-y-[1deg]  transform-3d justify-center overflow-y-scroll p-4 grid  2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1   gap-6`}>
          {cards.map((card, index) => (
            <HoverCard
            key={index}
            project={card}
            handler={handleClick}
            />
          ))}
        </div>
      </div>
    );
  }
  