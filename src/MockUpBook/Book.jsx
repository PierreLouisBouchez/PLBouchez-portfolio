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
    const pattern = useTexture("3D/maps/pattern.jpg")

    pagestexture.wrapS =  RepeatWrapping;
    pagestexture.wrapT = RepeatWrapping;
    pagestexture.repeat.set(0.25, infos.depth*10   );
    pattern.wrapS =  RepeatWrapping;
    pattern.wrapT = RepeatWrapping;
    pattern.repeat.set(infos.width*8, infos.height*8  );

    const defaultMaterial = new MeshStandardMaterial({
        map: pagestexture,
    color: 0xffffff,
    roughness: 0.95,
    metalness: 0,
    });
    const defaultMaterial2 = new MeshStandardMaterial({
        map: pattern,
        color: "#cc5555",
        roughness: 0.5,
        metalness: 0,
    });
    const defaultMaterial3 = new MeshStandardMaterial({
        
        color: "#553333",
        roughness: 0.5,
        metalness: 0,
    });

    useEffect(() => {

    }, [infos])


    return (
        <group position={[0,infos?.depth/2+halfcoverdepth,0]}>
            <mesh  position={[0, infos?.depth / 2 + halfcoverdepth, 0]} ref={front} material={[defaultMaterial,defaultMaterial2,defaultMaterial2,defaultMaterial,defaultMaterial,defaultMaterial]}>
                <boxGeometry  args={[infos?.width , coverdepth, infos?.height]}  />
            </mesh>
            <mesh ref={pages} castShadow material={defaultMaterial} >
                <boxGeometry  args={[infos?.width-coverdepth, infos?.depth, infos?.height-coverdepth]} />
            </mesh>
            <mesh  rotation={[0,3.1415,0]} castShadow position={[0, -infos?.depth / 2 - halfcoverdepth, 0]} ref={back} material={[defaultMaterial2,defaultMaterial,defaultMaterial,defaultMaterial2,defaultMaterial,defaultMaterial]} >
                <boxGeometry  args={[infos?.width , coverdepth, infos?.height]} />
            </mesh>
            <mesh rotation={[-1.57079,0,0]} castShadow position={[-infos?.width * 0.5+halfcoverdepth, 0, 0]}  ref={side} material={[defaultMaterial,defaultMaterial3,defaultMaterial,defaultMaterial,defaultMaterial,defaultMaterial]} >
                <boxGeometry  args={[coverdepth, infos?.height, infos?.depth]}  />
            </mesh>
        </group>
    )
}
