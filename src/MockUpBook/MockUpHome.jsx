import { AccumulativeShadows, Box, CameraControls, RandomizedLight } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useState } from 'react'
import { MeshStandardMaterial } from 'three';
import Book from './Book';
import { EffectComposer, N8AO } from '@react-three/postprocessing';


const presets = {
    A6: { width: 1.05, height: 1.485, detail: "10.5cm x 14.85cm" },
    A5: { width: 1.48, height: 2.1, detail: "14.8cm x 21cm" },
    A4: { width: 2.1, height: 2.97, detail: "21cm x 29.7cm" },
    Royal: { width: 1.6, height: 2.4, detail: "16cm x 24cm" },
    Poche: { width: 1.1, height: 1.8, detail: "11cm x 18cm" },
    BD: { width: 2.4, height: 3.2, detail: "24cm x 32cm" }
};

function MockUpHome() {

    const [bookInfos, setbookInfos] = useState({ depth: 0.2, width: 1, height: 1.5 });

    return (
        <div className='h-[100vh] md:flex-row flex-col order flex bg-[#eeeeee] border-[#613a00] text-gray-800 font-Victor '>
            <div className='p-4 md:w-1/3 w-full order-1 text-xl'>
                <div className='flex flex-col h-full p-4 border-gray-800 border-2 gap-y-2  bg-[#ababab]'>
                    <h1 className='relative md:text-5xl! text-xl!  font-bold pb-2 text-shadow-black text-shadow-xs '>Mock A Book</h1>
                    <div className='h-auto bg-gray-300 w-full flex-col flex p-2 border-2'>
                        <span>Depth : {(bookInfos?.depth * 10).toFixed(2)} cm </span>
                        <input className='py-2  h-full justify-items-center rounded-none  ' type='range' min={0.05} max={1} step={0.01} value={bookInfos?.depth} onChange={(e) => setbookInfos({ ...bookInfos, depth: e.target.value })} />
                    </div>
                    <div className=' relative flex mt-4'>
                        <span className='font-bold'>Preset : </span>
                        <div className=' border-1'>
                            <select className='bg-green-300/50 border-1' onChange={(e) => { const tmp = presets[e.target.value]; if (tmp) { setbookInfos({ ...bookInfos, width: tmp.width, height: tmp.height }) } }} >
                                <option key={"Aucun"} >Select a preset</option>

                                {presets && Object.keys(presets).map((item) => (
                                    <option key={item} value={item}>{item}:{presets[item]?.detail}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='h-auto bg-gray-300   w-full flex-col flex p-2  border-2'>
                        <span>Width : {(bookInfos?.width * 10).toFixed(2)} cm </span>
                        <input className='py-2 h-full justify-items-center rounded-none  ' type='range' min={1} max={3} step={0.01} value={bookInfos?.width} onChange={(e) => setbookInfos({ ...bookInfos, width: e.target.value })} />
                    </div>
                    <div className='h-auto bg-gray-300  w-full flex-col flex p-2 border-2'>
                        <span>Height : {(bookInfos?.height * 10).toFixed(2)} cm </span>
                        <input className='py-2  h-full justify-items-center rounded-none  ' type='range' min={1} max={4} step={0.01} value={bookInfos?.height} onChange={(e) => setbookInfos({ ...bookInfos, height: e.target.value })} />
                    </div>
                </div>
            </div>
            <Canvas className="h-full md:w-2/3 w-full md:order-2 order-0" shadows camera={{ position: [2, 2.5, 2], fov: 35 }} >
                <hemisphereLight intensity={1} color={0xffff88} />
                <directionalLight position={[-1, 4, 2]} intensity={3} />
                <Book infos={bookInfos} />
                <AccumulativeShadows  temporal  frames={10} color={"#000039"} opacity={0.25} scale={3}>
                    <RandomizedLight amount={10} radius={6} position={[-1, 3, 2]} />
                </AccumulativeShadows>
                <CameraControls />
            </Canvas>


        </div>
    )
}

export default MockUpHome