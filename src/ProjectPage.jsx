import { useEffect, useRef, useState } from "react";
import HoverCard from "./Components/hovercard";

const cards = [
  { title: "Game Jam 'One\u00A0Room'", image: "flyme.webp", logo: "unreal.webp", techno: ["Unreal Engine", "Blender"],Description:"Projet réalisé en trio courant 2025. Dans ce projet je me suis principalement occupé de la partie 3d (Environnement, Player, Level Design), pendant que mes coéquipiers se sont occupés du Gameplay et de l'Audio. Le But du jeu est de trouver et délivrer les mouches caché dans la pièce, en esquivant les pièges" },
  { title: "Briqueton", image: "lego.webp", video: "Lego.webm", logo: "unreal.webp", techno: ["Unreal Engine", "Blender"], Description:"Projet réalisé en 2024 à l'occasion d'un challenge proposé par le Youtuber @MATHIEU_YT. Dans ce projet je me suis principalement occupé de la partie 3d (Environnement, Player, Level Design), pendant que mon coéquipier s'est occupé du Gameplay et de l'Audio." },
  { title: "Bomberman", image: "bomberman.webp", video: "bomberman.webm", logo: "unreal.webp", techno: ["Unreal Engine", "C++", "Blender", "Krita"] },
  { title: "Make Your Stand", image: "mys.webp", logo: "unreal.webp", techno: ["Unreal Engine", "ReactJS", "Blender", "Pixel Streaming"] },
  { title: "Aigle", image: "aigle.webp", logo: "react.webp", techno: ["Unreal Engine", "ReactJS", "Pixel Streaming"] },
  { title: "Restootab", image: "restootab.webp",video: "restootab.webm", logo: "react.webp", techno: ["Blender", "ReactJS","Shopify"] },
  { title: "Ville Renouvelée", image: "roubaix.webp",video:"Roubaix.webm",logo: "unreal.webp", techno: ["Unreal Engine", "Blender"] },

];



export default function Projects({ CurrentMenu }) {

  const [currentProject, setCurrentProject] = useState(null);
  const [inProjectList, setInProjectList] = useState(true)

  const base = import.meta.env.BASE_URL;

  const handleClick = (project) => {
    console.log(project);
    setInProjectList(false);
    setCurrentProject(currentProject && currentProject?.title == project.title ? null : project);
  };

  const handleReturn = () => {
    setInProjectList(true);
    setTimeout(() => {
      setCurrentProject(null);
    }, 500);
    //setCurrentProject(currentProject && currentProject?.title == project.title ? null : project);
  };

  useEffect(() => {
    console.log(CurrentMenu);
  }, [CurrentMenu])


  return (
    <div className=" h-full overflow-hidden xl:pl-4">
      <div className="absolute h-[100%] xl:w-[90%] w-full xl:ml-2  justify-center  overflow-hidden xl:p-4  z-0">
        {(
          <div className="relative w-full h-full xl:p-6 xl:border-4 xl:border-b-6 xl:border-r-8 border-gris xl:shadow-abberation bg-[#ababab] ">

            <div className="absolute h-full w-full z-0 bg-[url('/Images/Grid.png')] bg-center bg-cover opacity-30 pointer-events-none"></div>

            <div className="w-full h-full xl:border-4 z-20 xl:border-t-8 xl:border-r-8 lg:p-8 border-blur border-gris overflow-hidden bg-radial from-green-950 from-20% to-[#101010]">
              
              
              
              
              
              <div className="h-full w-full flex-col lg:border-2 lg:border-vert flex lg:shadow-neonblanc ">
                <div className="h-20 items-center justify-between px-4 flex flex-row pointer-events-auto ">

                    <div className=" lg:text-4xl text-2xl select-none  text-shadow-neonblanc">
                      {currentProject?.title}
                    </div>
                    <div className="text-vert  xl:block hidden  lg:text-5xl text-2xl right-32  cursor-pointer  text-shadow-neonblanc z-5  " onClick={() => { handleReturn() }}>{"<--"}</div>
                  </div>
                  <div className="flex flex-col h-auto w-full py-2">
                    {
                      currentProject?.techno && <div className="flex flex-wrap">
                        {currentProject?.techno.map((text,index) => (
                          <div className="pl-4 bold items-center lg:text-xl text-sm">{text } {(index < currentProject?.techno.length-1 ? "|": "")}</div>
                        ))}
                      </div>
                    }
                  </div>
                
                  <div className="flex w-full h-1/4 ">
                    <img
                      src={`/projects/${currentProject?.image}`}
                      alt={"Image du projet " + currentProject?.title}
                      className="  h-full xl:p-4 p-2  rounded-xl  "
                      loading="lazy"
                    />
                    <div className="flex flex-col xl:w-2/3  h-full justify-start items-center p-2 text-sm xl:text-lg rounded-xl ">{currentProject?.Description}</div>
                  </div>


                  <div className="w-full   text-center text-5xl font-bold mt-4 text-shadow-neonblanc">

                  </div>

                  {/* <div className=" w-full h-auto py-4 justify-start items-start min-h-0 xl:overflow-x-scroll overflow-y-auto  cursor-pointer flex flex-col xl:flex-row">
                     <img
                      src={`/projects/${currentProject?.image}`}
                      alt={currentProject?.title}
                      className=" h-full p-2 rounded-xl "
                      loading="lazy"
                    /> 
                    
                  </div> */}
              </div>








            </div>
          </div>
        )}

      </div>
      <div id='liste' className={`${!inProjectList ? " xl:translate-x-[97%] translate-x-[100%]  " : " "}flex  flex-row relative xl:border-l-6 w-[100%] bg-[#ababab]  border-gris xl:shadow-abberation transition-transform duration-[500ms]  h-[100%] z-50 `}>
        <div className={`absolute  xl:hidden  -left-[45px] z-20 border-2 h-1/6 rounded-l-2xl bottom-1/8  w-[45px] border-gris  bg-gray-300  `}>
          <span className="-rotate-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gris text-xl font-bold" onClick={() => { handleReturn() }}>

            RETOUR
          </span>

        </div>




        <div className={` xl:block hidden top-0 -left-2 border-r-4  h-full  w-[25px] border-gris  bg-[#666666] `}></div>

        <div className="grid w-full grid-cols-2 xl:grid-cols-3 h-full overflow-y-scroll lg:p-4  justify-start xl:gap-6 lg:gap-4 gap-0.5 ">

          {cards.map((card, index) => (
            <HoverCard
              key={index}
              project={card}
              handler={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
