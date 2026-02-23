import { Box } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import { BoxGeometry, MeshStandardMaterial } from 'three'

const defaultMaterial = new MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.95,
    metalness: 0,
});
const defaultMaterial2 = new MeshStandardMaterial({
    color: 0x0fffff,
    roughness: 0.95,
    metalness: 0,
});


export default function Book({ infos }) {
    const pages = useRef(null)
    const front = useRef(null)
    const back = useRef(null)
    const side = useRef(null)
    useEffect(() => {

    }, [infos])


    return (
        <group>
            <mesh  position={[0, infos?.depth / 2 + 0.0025, 0]} ref={front} material={defaultMaterial2}>
                <boxGeometry  args={[infos?.width , 0.005, infos?.height]}  />
            </mesh>
            <mesh ref={pages} material={defaultMaterial} >
                <boxGeometry  args={[infos?.width-0.005, infos?.depth, infos?.height-0.005]} />
            </mesh>
            <mesh position={[0, -infos?.depth / 2 - 0.0025, 0]} ref={back} material={defaultMaterial2} >
                <boxGeometry  args={[infos?.width , 0.005, infos?.height]} />
            </mesh>
            <mesh position={[-infos?.width * 0.5+0.0025, 0, 0]}  ref={side} material={defaultMaterial2} >
                <boxGeometry  args={[0.005, infos?.depth, infos?.height]}  />
            </mesh>
        </group>
    )
}
