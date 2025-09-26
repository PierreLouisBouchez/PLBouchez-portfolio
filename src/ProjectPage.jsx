import { useEffect, useRef, useState } from "react";
import HoverCard from "./Components/hovercard";
import { ListProject } from "./assets/projects";




export default function Projects({ CurrentMenu }) {

  const [currentProject, setCurrentProject] = useState(null);
  const [inProjectList, setInProjectList] = useState(true)
  const isMobile = window.innerWidth < 768 || window.innerHeight - window.innerWidth > 0;

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

  const containerRef = useRef(null);

  useEffect(() => {
    if(isMobile) return;
    const container = containerRef.current;

    const handleWheel = (e) => {
      if (container) {
        e.preventDefault(); // empêche le scroll vertical par défaut
        container.scrollLeft += e.deltaY *2; // transforme le scroll vertical en horizontal
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className=" xl:h-full h-auto overflow-hidden xl:pl-4">
      <div className="absolute h-[100%] xl:w-[90%] w-full xl:ml-2  justify-center  overflow-hidden xl:p-4  z-0">
        {(
          <div className="relative w-full h-full xl:p-6 xl:border-4 xl:border-b-6 xl:border-r-8 border-gris xl:shadow-abberation bg-[#ababab] ">
            <div className="absolute h-full w-full z-0 bg-[url('/Images/Grid.png')] bg-center bg-cover opacity-30 pointer-events-none"></div>
            <div className="w-full h-full xl:border-4 z-20 xl:border-t-8 xl:border-r-8 lg:p-8 border-blur border-gris overflow-clip bg-radial from-green-950 from-20% to-[#101010]">
              <div className="h-full w-full flex-col lg:border-2 lg:border-vert flex lg:shadow-neonblanc ">
                <div className="h-20 items-center justify-between px-4 flex flex-row pointer-events-auto ">
                    <div className=" lg:text-4xl text-2xl select-none  text-shadow-neonblanc">
                      {currentProject?.title}
                    </div>
                    <div className="text-vert  xl:block hidden  lg:text-5xl text-2xl right-32  cursor-pointer  text-shadow-neonblanc z-5  " onClick={() => { handleReturn() }}>{"<--"}</div>
                  </div>
                  <div className="flex flex-row justify-between h-auto w-full py-2">
                    {
                      currentProject?.techno && <div className="flex flex-wrap">
                        {currentProject?.techno.map((text,index) => (
                          <div className="pl-4 bold items-center lg:text-xl text-sm">{text } {(index < currentProject?.techno.length-1 ? "|": "")}</div>
                        ))}
                      </div>
                    }
                    {currentProject?.Link && <a href={currentProject?.Link} target="_blank"className="pr-6 bold items-center cursor-pointer text-gris hover:text-white font-bold mx-2 px-4 py-1 lg:text-2xl text-sm  bg-vert rounded-4xl"> Lien -{">"} </a>}
                  </div>                
                  <div className="flex  h-1/4 items-center justify-between  ">
                    <img
                      src={`/projects/${currentProject?.image}`}
                      alt={"Image du projet " + currentProject?.title}
                      className="  xl:h-full xl:p-4 p-2 h-[75%] justify-center items-center  "
                      loading="lazy"
                    />
                    <div className="flex flex-col xl:w-auto w-3/4 h-full justify-start items-center p-2 text-sm xl:text-lg rounded-xl ">{currentProject?.Description}</div>
                  </div>
                  <div   style={
    !isMobile
      ? {
          scrollBehavior: "smooth",
        }
      : {}
  }     ref={containerRef} className="  w-full h-[calc(100%-5)]  justify-start items-center min-h-0 xl:overflow-x-auto xl:overflow-y-clip overflow-y-scroll xl:pb-0 pb-12 cursor-pointer xl:flex flex-col xl:flex-row">
                     {currentProject?.Gallery && currentProject?.Gallery.map((img, index) => (
                        <img src={"/projects/"+img} alt={"Image du projet " + currentProject?.title + " n°" + (index + 1)} className=" xl:h-full w-auto xl:mx-4 mx-2 my-2 " loading="lazy" key={index} />
                     ))}
                    
                  </div> 
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

          {ListProject.map((card, index) => (
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
