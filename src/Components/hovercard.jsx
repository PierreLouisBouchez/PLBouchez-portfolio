import React, { use, useEffect, useRef } from 'react'

export default function HoverCard({ project, handler} )  {
  const base = import.meta.env.BASE_URL;
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    //videoRef.current.currentTime = 0; // Optionnel : remet à 0
  };


  return (

    <div className="relative select-none xl:bg-transparent bg-gray-300 h-auto 
    w-full aspect-square outline-2 lg:border-2 border-gris outline-gris
      lg:shadow-abberationrelief xl:translate-y- " onClick={() =>project?.link!=null ? window.open(project.link, "_blank") :  handler(project)}>

      <div className="relative h-full w-full p-2">
        <div className="xl:block hidden absolute top-0  -translate-x-1/2 left-2/3 h-4 origin-top w-0.5 bg-gris"></div>
        <div className="xl:block hidden absolute bottom-0 -translate-x-1/2 left-1/3 h-4 origin-top w-0.5 bg-gris"></div>

        <div className="relative w-full h-full border-t-4  border-r-4 border-2 border-gris">
          {project.title && project?.image &&
            <img
              src={`/projects/${project.image}`}
              alt={project.title}
              className="absolute z-0 object-cover pointer-events-none  h-full w-auto "
              loading="lazy"
            />
          }
          <div>

          {project?.logo && (
            <div className="absolute flex z-50 gap-2 object-cover pointer-events-none h-[15%] rounded-4xl backdrop-blur-xs right-2 bottom-2   w-auto">
              {project.logo.map((logo, index) => (
                <img
                  key={index}
                  src={`/Images/${logo}.webp`}
                  alt={logo}
                  className="h-full w-auto"
                  loading="lazy"
                />
              ))}
            </div>
          ) }
          </div>
          <div className="absolute  duration-300  flex items-end  z-50  w-full h-full  justify-center xl:opacity-0 xl:hover:opacity-100 cursor-pointer transition-opacity  ">
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="  h-full  w-full object-cover">
              <video ref={videoRef} src={`/videos/${project.video}`} className="h-full object-cover pointer-events-none select-none [&::-webkit-media-controls]:hidden" controls={false} muted defaultMuted loop autoPlay preload='auto'   playsInline />
            </div>
            <div className="absolute h-full bottom-0  z-10 w-full bg-[linear-gradient(to_top,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0.2)_20%,_transparent_100%)] pointer-events-none"></div>
            <p className="absolute text-vert lg:text-xl text-sm z-50 xl:pb-2 font-bold transition">{project.title}</p>
          </div>
        </div>


      </div>
    </div>



  );
}
