import { AccumulativeShadows, Box, CameraControls, RandomizedLight } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import { MeshStandardMaterial, SRGBColorSpace } from 'three';
import Book from './Book';
import { EffectComposer, N8AO } from '@react-three/postprocessing';
import Sizing from './Sizing';
import Images from './Images';


const menus={
    Sizing:Sizing,
    Images:Images
}

function MenuWrapper({menu, ...props }){
const Component = menus[menu] || Sizing; // fallback
  return <Component {...props} />;
}

function MockUpHome() {
    const  [currentMenu, setCurrentMenu] = useState("Sizing");
    const [bookInfos, setbookInfos] = useState({ depth: 0.53, width: 1.05, height: 1.485 ,coverdepth:0.001, hardcover:false});    

    useEffect(() => {
    const unloadCallback = (event) => {
        event.preventDefault();
        event.returnValue = ""; 
        return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
    }, []);

    return (
        <div className='h-[100vh] md:flex-row flex-col order flex bg-[#eeeeee] border-[#613a00] text-gray-800 font-Victor '>
            <div className=' md:w-1/3 w-full flex flex-col md:h-full h-1/3 pb-0 md:p-4 md:pb-4 order-1 md:text-xl justify-center '>
                <h1 className='md:relative top-0 p-2 md:p-0 absolute md:text-5xl! text-xl! justify-center  font-bold md:pb-4 text-shadow-black text-shadow-xs '>Mock A Book</h1>
                
                <div className='relative h-10 w-full  flex-row flex  items-end'>
                    <div className={`border-2 border-b-0 border-black cursor-pointer  w-32 ${currentMenu === "Sizing" ? "bg-[#ababab] h-full" : "bg-[#777777] hover:text-white/40 "} flex justify-center`} onClick={() => setCurrentMenu("Sizing")}>Scaling</div>
                    <div className={`border-2 border-b-0 border-black -translate-x-[2px] bottom-0 cursor-pointer  w-32 ${currentMenu === "Images" ? "bg-[#ababab] h-full" : "bg-[#777777] hover:text-white/40 "} flex justify-center`} onClick={() => setCurrentMenu("Images")}>Images</div>

                </div>
                <div className='w-full flex flex-col h-full overflow-y-auto p-4 border-gray-800 border-2 md:gap-y-6 gap-y-2  bg-[#ababab]'>                    
                    <MenuWrapper menu={currentMenu} bookInfos={bookInfos} setbookInfos={setbookInfos} />
                </div>
                
            </div>
            <Canvas gl={{ outputColorSpace: SRGBColorSpace }} className="h-full md:w-2/3 w-full md:order-2 order-0" shadows camera={{ position:  [-2.5, 1.2, 3] , fov: 30 }} >
                <ambientLight intensity={1} />
                <directionalLight position={[-2, 2, 2]} intensity={1} /> 
                <Suspense fallback={null}>
                <Book position={[0,0,-bookInfos?.depth/2]} rotation={[1.57,0,0]} infos={bookInfos} />
                <AccumulativeShadows position={[0,-bookInfos?.height/2,0]}  temporal  frames={30} color={"#000039"} opacity={0.5} scale={5}>
                    <RandomizedLight amount={5} radius={4} position={[1, 4, 1]} />
                </AccumulativeShadows>
                    </Suspense>
                <CameraControls makeDefault maxDistance={7} minDistance={1.5}/>
            </Canvas>


        </div>
    )
}

export default MockUpHome