import { useRef, useState } from "react";

const cards = [
  { title: "Bomberman", image: "bomberman.webp", video: "bomberman.webm", techno: ["Unreal Engine", "C++", "Blender", "Krita"] },
  { title: "Briqueton", image: "lego.webp", video: "Lego.webm",techno: ["Unreal Engine", "Blender"] },
  { title: "Make Your Stand", image: "mys.webp" ,techno: ["Unreal Engine", "ReactJS", "Blender","Pixel Streaming"]  },
  { title: "Game Jam 'One Room'", image: "flyme.webp" ,techno: ["Unreal Engine", "Blender"]  },
  { title: "Aigle", image: "aigle.webp",techno: ["Unreal Engine", "ReactJS", "Pixel Streaming"]  },
  { title: "Aigle", image: "aigle.webp" },
  { title: "Aigle", image: "aigle.webp" },
  { title: "Aigle", image: "aigle.webp" },

  { title: "Aigle", image: "aigle.webp" },
  { title: null, image: "" },

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

    <div className="relative select-none  min-h-86 h-2/3  min-w-64 w-92 outline-2 border-4 border-gris outline-gris overflow-hidden shadow-abberationrelief translate-y-6 " onClick={() => { handler(project) }}>

      {project.title && <img
        src={`${base}/projects/${project.image}`}
        alt={project.title}
        className="absolute object-cover   w-full h-full"
        loading="lazy"
      />}
      <div className="absolute inset-0 duration-300 flex items-end justify-center opacity-0 hover:opacity-100 cursor-pointer transition-opacity  hover:translate-z-24">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="absolute h-full w-full object-cover">
          <video ref={videoRef} src={`${base}/videos/${project.video}`} className="h-full object-cover" muted loop playsInline />
        </div>
        <div className="absolute h-full w-full bg-[linear-gradient(to_top,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0.2)_10%,_transparent_100%)] pointer-events-none"></div>
        <p className="absolute text-vert text-2xl pb-2 font-bold transition">{project.title}</p>
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
    <div className="relative flex-1 w-[100%]   h-100vh overflow-hidden pl-4">
      <div className="absolute h-[100%] w-[85%] ml-2  justify-center  overflow-hidden p-4  z-0">
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
      <div id='liste' className={`${currentProject ? " translate-x-[90%]  " : " "} absolute border-l-6 w-[100%] bg-[#ababab] pl-12 border-gris shadow-abberation transition-transform duration-[500ms] right-0 items-right h-[103%]  justify-center overflow-y-scroll p-4 grid z-50 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1   gap-6`}>
        {cards.map((card, index) => (
          <HoverCard
            key={index}
            project={card}
            handler={handleClick}
          />
        ))}
        <div className={`absolute top-0 -left-2 border-4 border-t-0  h-[103%] w-[25px] border-gris  bg-[#666666] `}></div>
      </div>
    </div>
  );
}
