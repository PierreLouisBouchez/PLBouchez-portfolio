import { Box } from '@react-three/drei'
import React, { useRef } from 'react'
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


export default function Book({depth=0.2}) {
  const pages = useRef(null)
  const front = useRef(null)
  const back = useRef(null)
  const side = useRef(null)

  return (
    <mesh >
        <Box position={[0,depth/2+0.0025,0]} args={[1.005,0.005,1.505]} ref={front} material={defaultMaterial2} />
        <Box args={[1,depth,1.5]} ref={pages} material={defaultMaterial} />
        <Box position={[0,-depth/2-0.0025,0]} args={[1.005,0.005,1.505]} ref={back} material={defaultMaterial2} />
        <Box args={[0.005,depth,1.505]} position={[-0.5,0,0]} ref={pages} material={defaultMaterial2} />

    </mesh>
  )
}
