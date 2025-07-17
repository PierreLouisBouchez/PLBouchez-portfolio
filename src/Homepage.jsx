import { useRef, useState } from "react";

const cards = [
  { title: "Bomberman", image: "bomberman.webp", video: "bomberman.webm", techno: ["Unreal Engine", "C++", "Blender", "Krita"] },
  { title: "Briqueton", image: "lego.webp", video: "Lego.webm", techno: ["Unreal Engine", "Blender"] },
  { title: "Make Your Stand", image: "mys.webp", techno: ["Unreal Engine", "ReactJS", "Blender", "Pixel Streaming"] },
  { title: "Game Jam 'One Room'", image: "flyme.webp", techno: ["Unreal Engine", "Blender"] },
  { title: "Aigle", image: "aigle.webp", techno: ["Unreal Engine", "ReactJS", "Pixel Streaming"] },
  { title: "Aigle", image: "aigle.webp" },
  { title: "Aigle", image: "aigle.webp" },
  { title: "Aigle", image: "aigle.webp" },

  { title: "Aigle", image: "aigle.webp" },

  { title: "Aigle", image: "aigle.webp" },

  { title: "Aigle", image: "aigle.webp" }

];

const HoverCard = ({ project, handler }) => {
  const base = import.meta.env.BASE_URL;
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0; // Optionnel : remet à 0
  };
  return (

    <div className="relative select-none h-auto w-full aspect-square outline-2 border-2 border-gris outline-gris  shadow-abberationrelief translate-y-6 " onClick={() => { handler(project) }}>

      <div className="relative h-full w-full p-2">
        <div className="absolute top-0 -translate-x-1/2 left-2/3 h-4 origin-top w-0.5 bg-gris"></div>
                <div className="absolute bottom-0 -translate-x-1/2 left-1/3 h-4 origin-top w-0.5 bg-gris"></div>

        <div className="relative w-full h-full border-t-4  border-r-4 border-2 border-gris">
          {project.title &&
            <img
              src={`${base}/projects/${project.image}`}
              alt={project.title}
              className="absolute z-0 object-cover pointer-events-none  h-full w-auto "
              loading="lazy"
            />
          }
          <div className="absolute  duration-300  flex items-end  z-50  w-full h-full  justify-center opacity-0 hover:opacity-100 cursor-pointer transition-opacity  ">
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="  h-full  w-full object-cover">
              <video ref={videoRef} src={`${base}/videos/${project.video}`} className="h-full object-cover " muted loop playsInline />
            </div>
            <div className="absolute h-full bottom-0  z-10 w-full bg-[linear-gradient(to_top,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0.2)_20%,_transparent_100%)] pointer-events-none"></div>
            <p className="absolute text-vert text-2xl z-50 pb-2 font-bold transition">{project.title}</p>
          </div>
        </div>


      </div>
    </div>



  );
};


export default function Projects() {

  const [currentProject, setCurrentProject] = useState(null)

  const handleClick = (project) => {
    console.log(project);

    setCurrentProject(currentProject && currentProject?.title == project.title ? null : project);
  };

  return (
    <div className=" h-full overflow-hidden pl-4">
      <div className="absolute h-[100%] w-[90%] ml-2  justify-center  overflow-hidden p-4  z-0">
        {(
          <div className="w-full h-full p-6 border-4 border-b-6 border-r-8 border-gris shadow-abberation bg-[#ababab] ">
            <div className="absolute h-full w-full bg-[url('/Images/Grid.png')] bg-center bg-cover opacity-30"></div>

            <div className="w-full h-full border-4 border-t-8 border-r-8 p-8 border-blur border-gris overflow-hidden bg-radial from-green-950 from-20% to-[#101010]">
              <div className="h-full w-full flex-col border-2 border-vert flex shadow-neonblanc ">

                <div className="h-24 items-center justify-between px-4 flex flex-row pointer-events-auto ">

                  <div className=" text-6xl select-none text-shadow-neonblanc">
                    {currentProject?.title}
                  </div>
                  <div className="text-vert flex  text-5xl  right-32  cursor-pointer  text-shadow-neonblanc z-5  " onClick={() => { setCurrentProject(null) }}>{"<--"}</div>
                </div>
                <div className="flex w-full h-full">
                  <div className="w-2/3">
                  </div>
                  <div className="border-l-2  border-t-2 pt-6 border-vert  shadow-neonblanc  w-1/3">
                    {
                      currentProject?.techno && <div className=" relative ">
                        {currentProject?.techno.map((text) => (
                          <div className="px-6 items-center text-xl">- {text}</div>
                        ))}
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
      <div id='liste' className={`${currentProject ? " translate-x-[97%]  " : " "}flex  flex-row relative border-l-6 w-[100%] bg-[#ababab]  border-gris shadow-abberation transition-transform duration-[500ms]  h-[100%] z-50 `}>
        <div className={` top-0 -left-2 border-r-4  h-full w-[25px] border-gris  bg-[#666666] `}></div>

        <div className="grid w-full 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 overflow-y-scroll p-4  gap-6">

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
