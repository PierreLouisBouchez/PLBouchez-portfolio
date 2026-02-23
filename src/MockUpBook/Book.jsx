import { Box, RoundedBoxGeometry, useTexture } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import { BoxGeometry, MeshStandardMaterial, RepeatWrapping } from 'three'



export default function Book({ infos }) {
    const pages = useRef(null)
    const front = useRef(null)
    const back = useRef(null)
    const side = useRef(null)
    const coverdepth=infos?.coverdepth ?? 0.002
    const halfcoverdepth=coverdepth/2

    const pagestexture = useTexture("3D/maps/pages.jpg")

    pagestexture.wrapS =  RepeatWrapping;
    pagestexture.wrapT = RepeatWrapping;
    pagestexture.repeat.set(0.25, infos.depth*10   );
    const defaultMaterial = new MeshStandardMaterial({
        map: pagestexture,
    color: 0xffffff,
    roughness: 0.95,
    metalness: 0,
    });
    const defaultMaterial2 = new MeshStandardMaterial({
        color: "#cc5555",
        roughness: 0.5,
        metalness: 0,
    });

    useEffect(() => {

    }, [infos])


    return (
        <group>
            <mesh  position={[0, infos?.depth / 2 + halfcoverdepth, 0]} ref={front} material={[defaultMaterial,defaultMaterial2,defaultMaterial2,defaultMaterial,defaultMaterial,defaultMaterial]}>
                <boxGeometry  args={[infos?.width , coverdepth, infos?.height]}  />
            </mesh>
            <mesh ref={pages} material={defaultMaterial} >
                <boxGeometry  args={[infos?.width-coverdepth, infos?.depth, infos?.height-coverdepth]} />
            </mesh>
            <mesh position={[0, -infos?.depth / 2 - halfcoverdepth, 0]} ref={back} material={[defaultMaterial,defaultMaterial2,defaultMaterial,defaultMaterial2,defaultMaterial,defaultMaterial]} >
                <boxGeometry  args={[infos?.width , coverdepth, infos?.height]} />
            </mesh>
            <mesh position={[-infos?.width * 0.5+halfcoverdepth, 0, 0]}  ref={side} material={[defaultMaterial,defaultMaterial2,defaultMaterial,defaultMaterial,defaultMaterial,defaultMaterial]} >
                <boxGeometry  args={[coverdepth, infos?.depth, infos?.height]}  />
            </mesh>
        </group>
    )
}
