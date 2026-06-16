import { useEffect, useRef, useState } from "react";
import HoverCard from "./Components/hovercard";
import { ListProject } from "./assets/projects";
import gsap from "gsap";




export default function Projects({ CurrentMenu }) {

  const [currentProject, setCurrentProject] = useState(null);
  const [inProjectList, setInProjectList] = useState(true)
  const isMobile = window.innerWidth < 768 || window.innerHeight - window.innerWidth > 0;
  const projectListRef = useRef(null);
  const base = import.meta.env.BASE_URL;

  const handleClick = (project) => {
    setInProjectList(false);
    setCurrentProject(currentProject && currentProject?.title == project.title ? null : project);
  };

  const handleReturn = () => {
    setInProjectList(true);

  };

  useEffect(() => {
    console.log(CurrentMenu);
  }, [CurrentMenu])

  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(projectListRef.current, {
    xPercent: inProjectList ? 0 : isMobile? 100: 97,
    duration: 0.4,
    ease: inProjectList ? "power3.in" : "back.in(5)",
    
    onComplete: () => {
      if(!isMobile){
        gsap.to(projectListRef.current.firstElementChild, {x: !inProjectList ? "0px" :"25px" , scaleX: inProjectList?0:1, });
      }

      if (inProjectList) {
        setTimeout(() => {

        setCurrentProject(null);
        }, 500);
      }
    }
  });

    },[inProjectList]); 

  useEffect(() => {
    if (isMobile) return;
    const container = containerRef.current;
    
    gsap.set(projectListRef.current, {xPercent: 0});
    gsap.set(projectListRef.current.firstElementChild, {x: "25px" , scaleX: 0.25, });

  
    const handleWheel = (e) => {
      if (container) {
        e.preventDefault(); // empêche le scroll vertical par défaut
        container.scrollLeft += e.deltaY * 2; // transforme le scroll vertical en horizontal
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className=" xl:h-full h-auto  xl:pl-4">
      <div className="absolute h-[100%] xl:w-[90%] w-full xl:ml-2  justify-center  xl:p-4  z-0">
        {(
          <div className="relative w-full h-full xl:p-6 xl:border-4 xl:border-b-6 xl:border-r-8 border-gris xl:shadow-abberation bg-[#ababab] ">
            <div className="absolute h-full w-full z-0 bg-[url('/Images/Grid.png')] bg-center bg-cover opacity-30 pointer-events-none"></div>
            <div className="w-full h-full xl:border-4 z-20 xl:border-t-8 xl:border-r-8 lg:p-8 border-blur border-gris bg-radial from-green-950 from-20% to-[#101010]">
              <div className="h-full w-full flex-col lg:border-2 lg:border-vert flex lg:shadow-neonblanc ">
                <div className="h-20 items-center justify-between px-4 flex flex-row pointer-events-auto ">
                  <div className=" lg:text-4xl text-2xl select-none w-full flex justify-between text-shadow-neonblanc">
                    {currentProject?.title}
                    {currentProject?.Link && <a href={currentProject?.Link} target="_blank" className="pr-6 bold items-center cursor-pointer text-gris hover:text-white font-bold mx-2 px-4 py-1 lg:text-2xl text-sm  bg-vert rounded-4xl"> Lien -{">"} </a>}

                  </div>
                </div>
                <div className="flex flex-row justify-between h-auto w-full ">
                  {
                    currentProject?.techno && <div className="flex flex-wrap">
                      {currentProject?.techno.map((text, index) => (
                        <div className="pl-4 bold items-center lg:text-xl text-sm">{text} {(index < currentProject?.techno.length - 1 ? "|" : "")}</div>
                      ))}
                    </div>
                  }
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
                <div style={
                  !isMobile
                    ? {
                      scrollBehavior: "smooth",
                    }
                    : {}
                } ref={containerRef} className="  w-full h-[calc(100%-5)]  justify-start items-center min-h-0 xl:overflow-x-auto xl:overflow-y-clip overflow-y-scroll xl:pb-0 pb-12 cursor-pointer xl:flex flex-col xl:flex-row">
                  {currentProject?.videoInCarrousel && <video src={`/videos/${currentProject.video}`} className="xl:h-full  grow w-auto xl:mx-4 mx-2 my-2 " muted defaultMuted controls={true} loop autoPlay preload='auto' />}
                  {currentProject?.Gallery && currentProject?.Gallery.map((img, index) => (
                    <img src={"/projects/" + img} alt={"Image du projet " + currentProject?.title + " n°" + (index + 1)} className=" xl:h-full w-auto xl:mx-4 mx-2 my-2 " loading="lazy" key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
      <div id='liste' ref={projectListRef} className={`flex  flex-row relative z-50 xl:border-l-6 w-[100%] bg-[#ababab]  border-gris xl:shadow-abberation transition-transform duration-[500ms]  h-[100%] `}>




        <div className={`-z-50 absolute cursor-pointer flex   -left-[40px]  border-2 xl:border-3 h-40  xl:top-10 top-[40vh]  w-[40px] border-gris  bg-gray-300  `}>
          <span className="-rotate-90 flex translate-x-8.5 z-50 text-gris text-2xl  font-bold" onClick={() => { handleReturn() }}>
            RETOUR
          </span>

        </div>
        <div className={` xl:block hidden top-0 -left-2 border-r-4  h-full  w-[25px] border-gris z-40  bg-[#666666] `}></div>
        <div className="grid w-full grid-cols-2 xl:grid-cols-3 h-full overflow-y-scroll lg:p-4  z-40 justify-start xl:gap-6 lg:gap-4 gap-0.5 ">

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
