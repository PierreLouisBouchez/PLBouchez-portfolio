import { Box, CameraControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useState } from 'react'
import { MeshStandardMaterial } from 'three';
import Book from './Book';

function MockUpHome() {

   const[ bookInfos,setbookInfos] = useState({depth:0.2});

  return (
    <div className='h-[100vh] flex-row flex bg-[#f3efba] border-[#613a00] text-gray-800 font-Victor p-8'>
        <div className=' flex-col w-1/3 h-full p-4 border-gray-800 border-2  bg-[#f8ecde]'>
            <h1 className='relative   font-bold pb-8'>Mock A Book</h1>
            <div className='h-auto bg-amber-100   w-full flex-col flex p-2 gap-4 border-2'>

            <span>Depth : {(bookInfos?.depth*10).toFixed(2) } cm </span>
            <input className='border-2 h-full justify-items-center rounded-none  ' type='range' min={0.1} max={1} step={0.01} value={bookInfos?.depth} onChange={(e)=>setbookInfos({depth:e.target.value})}  /> 
            </div>

        </div>
        <Canvas className="h-full w-2/3" shadows camera={{ position: [1, 2, 1], fov: 50 }} >
             <hemisphereLight intensity={0.75} color={0xffff88} />
            <directionalLight position={[-1,4,2]}intensity={2} />
            <Book depth={bookInfos.depth}/>
            <CameraControls/>
        </Canvas>
        

    </div>
  )
}

export default MockUpHome