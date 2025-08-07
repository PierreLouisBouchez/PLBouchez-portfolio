import { useEffect, useRef, useState } from "react";
import HoverCard from "./Components/hovercard";

const cards = [
  { title: "Briqueton", image: "lego.webp", video: "Lego.webm", techno: ["Unreal Engine", "Blender"] },
  { title: "Bomberman", image: "bomberman.webp", video: "bomberman.webm", techno: ["Unreal Engine", "C++", "Blender", "Krita"] },
  { title: "Make Your Stand", image: "mys.webp", techno: ["Unreal Engine", "ReactJS", "Blender", "Pixel Streaming"] },
  { title: "Game Jam 'One\u00A0Room'", image: "flyme.webp", techno: ["Unreal Engine", "Blender"] },
  { title: "Aigle", image: "aigle.webp", techno: ["Unreal Engine", "ReactJS", "Pixel Streaming"] },
  { title: "Aigle", image: "", techno: ["Unreal Engine", "ReactJS", "Pixel Streaming"] },
  { title: "Aigle", image: "", techno: ["Unreal Engine", "ReactJS", "Pixel Streaming"] },


];



export default function Projects({CurrentMenu}) {

  const [currentProject, setCurrentProject] = useState(null)
  const base = import.meta.env.BASE_URL;

  const handleClick = (project) => {
    console.log(project);

    setCurrentProject(currentProject && currentProject?.title == project.title ? null : project);
  };

  useEffect(() => {
    console.log(CurrentMenu);
  }, [CurrentMenu])
  

  return (
    <div className=" h-full overflow-hidden xl:pl-4">
      <div className="absolute h-[100%] xl:w-[90%] w-full xl:ml-2  justify-center  overflow-hidden xl:p-4  z-0">
        {(
          <div className="w-full h-full xl:p-6 xl:border-4 xl:border-b-6 xl:border-r-8 border-gris xl:shadow-abberation bg-[#ababab] ">
            <div className="absolute h-full w-full z-0 bg-[url('/Images/Grid.png')] bg-center bg-cover opacity-30 pointer-events-none"></div>

            <div className="w-full h-full xl:border-4 z-20 xl:border-t-8 xl:border-r-8 lg:p-8 border-blur border-gris overflow-hidden bg-radial from-green-950 from-20% to-[#101010]">
              <div className="h-full w-full flex-col lg:border-2 lg:border-vert flex lg:shadow-neonblanc ">

                <div className="h-24 items-center justify-between px-4 flex flex-row pointer-events-auto ">

                  <div className=" lg:text-4xl text-2xl select-none text-shadow-neonblanc">
                    {currentProject?.title}
                  </div>
                  <div className="text-vert flex   lg:text-5xl text-2xl right-32  cursor-pointer  text-shadow-neonblanc z-5  " onClick={() => { setCurrentProject(null) }}>{"<--"}</div>
                </div>
                {
                  currentProject?.techno && <div className="flex flex-wrap">
                    {currentProject?.techno.map((text) => (
                      <div className="px-6 items-center lg:text-xl text-sm">- {text}</div>
                    ))}
                  </div>
                }
                <div className="h-full w-full overflow-scroll">
                  <div className="w-full flex flex-wrap  h-auto cursor-pointer">
                    <img
                      src={`${base}/projects/${currentProject?.image}`}
                      alt={currentProject?.title}
                      className="  h-auto w-1/2  "
                      loading="lazy"
                    />
                    <div className="flex flex-col w-1/2 h-full justify-center items-center">ijikiki</div>
                    <div className="flex flex-col w-1/2 h-full justify-center items-center">ijikiki</div>

                    <img
                      src={`${base}/projects/${currentProject?.image}`}
                      alt={currentProject?.title}
                      className=" flex h-auto w-1/2 right-0"
                      loading="lazy"
                    />
                    <img
                      src={`${base}/projects/${currentProject?.image}`}
                      alt={currentProject?.title}
                      className="  h-auto w-1/2 "
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
      <div id='liste' className={`${currentProject ? " xl:translate-x-[97%] translate-x-[100%]  " : " "}flex  flex-row relative xl:border-l-6 w-[100%] bg-[#ababab]  border-gris xl:shadow-abberation transition-transform duration-[500ms]  h-[100%] z-50 `}>
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
