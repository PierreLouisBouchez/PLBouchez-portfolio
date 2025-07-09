import { useRef, useState } from "react";

const cards = [
  { title: "Bomberman", image: "bomberman.png" , video: "bomberman.webm" },
  { title: "Briqueton", image: "lego.png", video: "Lego.webm" },
  { title: "Make Your Stand x Squeegee", image: "mys.png" },
  { title: "Aigle", image: "aigle.png" },
  { title: "Aigle", image: "aigle.png" },
  { title: "Aigle", image: "aigle.png" },
  { title: "Aigle", image: "aigle.png" },
  { title: "Aigle", image: "aigle.png" },

  { title: "Aigle", image: "aigle.png" },
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

    <div className="relative select-none  min-h-86 h-2/3  min-w-64 w-92 outline-2 border-4 border-gris outline-gris overflow-hidden shadow-abberationrelief translate-y-6 " onClick={() => { handler(project.title) }}>

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

  const handleClick = (id) => {
    console.log(id);

    setCurrentProject(currentProject == id ? null : id);
  };

  return (
    <div className=" flex-1 max-w-2/3 perspective-normal perspective-origin-top-left  h-100vh overflow-hidden pl-4">
      <div className="absolute h-[100%] w-[90%] ml-2 translate-x-3 -translate-3 rotate-x-[2deg] rotate-y-[1deg] transform-3d justify-center  overflow-hidden p-4">
        {(
          <div className="w-full h-full p-6 border-4 border-B-6border-r-8 border-gris shadow-abberation bg-[#ababab] ">
            <div className="absolute h-full w-full bg-[url('/Images/Grid.png')] bg-center bg-cover opacity-30"></div>

            <div className="w-full h-full border-4 border-t-8 border-r-8 p-8 border-blur border-gris overflow-hidden bg-radial from-green-950 from-20% to-[#101010]">
              <div className="h-full w-full border-2 border-vert flex shadow-neonblanc ">

              <div className="text-vert flex h-16 text-5xl inset-y-32 right-32 absolute cursor-pointer text-shadow-neonblanc  " onClick={() => { setCurrentProject(null) }}>{"-->"}</div>
              <div className="p-6 text-6xl select-none text-shadow-neonblanc">
                {currentProject}
              </div>
              </div>
            </div>
          </div>
        )}

      </div>
      <div id='liste' className={`${currentProject != null ? "translate-x-full  " : "none"}  border-l-6 w-[97%] bg-[#ababab] pl-12 border-gris shadow-abberation transition-transform duration-[1000ms] right-0 items-right h-[103%]  translate-x-8 -translate-4  rotate-x-[2deg] rotate-y-[1deg]  transform-3d justify-center overflow-y-scroll p-4 grid  2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1   gap-6`}>
        {cards.map((card, index) => (
          <HoverCard
          key={index}
          project={card}
          handler={handleClick}
          />
        ))}
        <div className={`absolute top-0 -left-2 border-4  h-[103%] w-[35px] border-gris  bg-[#666666] z-50`}></div>
      </div>
    </div>
  );
}
