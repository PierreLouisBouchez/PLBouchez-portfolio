import { Box, RoundedBoxGeometry, useTexture } from '@react-three/drei'
import React, { useEffect, useMemo, useRef } from 'react'
import { BoxGeometry, ExtrudeGeometry, MeshStandardMaterial, RepeatWrapping, Shape } from 'three'

function SoftCover(width, depth, coverdepth=0.01, hardcover=false) {
    const shape = new Shape();
    const hCoffset=0.05;
    shape.lineTo(width/2, 0);
    shape.lineTo(width/2, coverdepth);
    if(hardcover){
        shape.lineTo(-width/2+coverdepth+hCoffset, coverdepth);
        shape.quadraticCurveTo(-width/2+coverdepth+hCoffset*0.2, coverdepth-0.01,-width/2+coverdepth, coverdepth);
            shape.quadraticCurveTo(-width/2-hCoffset*0.3, depth/2,-width/2+coverdepth, depth-coverdepth);

        shape.quadraticCurveTo(-width/2+coverdepth+hCoffset*0.2, depth-coverdepth+0.01,-width/2+coverdepth+hCoffset, depth-coverdepth);

    }else{
        shape.lineTo(-width/2+coverdepth, coverdepth);
        shape.lineTo(-width/2+coverdepth, depth-coverdepth);
    }
    
    
    shape.lineTo(width/2, depth-coverdepth);


    shape.lineTo(width/2, depth);    
        if(!hardcover){
            shape.lineTo(-width/2, depth);
            shape.lineTo(-width/2, 0);

        }else{

            shape.lineTo(-width/2+hCoffset*1.5, depth);
            
            shape.quadraticCurveTo(-width/2+hCoffset*0.6, depth-0.5*coverdepth,-width/2+hCoffset/4, depth);
            shape.lineTo(-width/2, depth);
            shape.quadraticCurveTo(-width/2-0.04, depth*0.5,-width/2, 0);
            shape.lineTo(-width/2+hCoffset/4, 0);
            shape.quadraticCurveTo(-width/2+hCoffset*0.6, 0.5*coverdepth,-width/2+hCoffset*1.5, 0);
        }


    return shape;
}

export default function Book({ position, rotation,infos }) {
    const pages = useRef(null)
    const front = useRef(null)
    const back = useRef(null)
    const side = useRef(null)
    const coverdepth=infos?.coverdepth ?? 0.002
    const halfcoverdepth=coverdepth/2

    const pagestexture = useTexture("3D/maps/pages.jpg")
    const pattern = useTexture("3D/maps/pattern2.jpg")

    pagestexture.wrapS =  RepeatWrapping;
    pagestexture.wrapT = RepeatWrapping;
    pagestexture.repeat.set(0.25, infos.depth*10   );
    pattern.wrapS =  RepeatWrapping;
    pattern.wrapT = RepeatWrapping;
    pattern.repeat.set(90,120);


    const defaultMaterial = new MeshStandardMaterial({
        map: pagestexture,
    color: 0xffffff,
    roughness: 0.95,
    metalness: 0,
    });
    const defaultMaterial2 = new MeshStandardMaterial({
        map:pattern,
        color: "#ff7755",
        roughnessMap: pattern,
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

    console.log("height : " ,infos?.height)

    const shape = SoftCover(infos?.width, infos?.depth,infos?.coverdepth,infos?.hardcover);

    

    const extrudeSettings = { 
            depth: infos?.height, 
            bevelEnabled:  infos?.hardcover, 
            bevelThickness: 0.005,
            bevelSize: 0.005,
            curveSegments: 16 
        };

    const geometry = useMemo(() => {
        const geo = new ExtrudeGeometry(shape, extrudeSettings);
        geo.computeVertexNormals();
        return geo;
    }, [shape, infos?.height]);


    return (
        <group position={position} rotation={rotation} >
           
            <mesh position={[0,0,-infos.height/2]} geometry={geometry} material={defaultMaterial2}></mesh>
            
            <mesh ref={pages} position={[infos?.hardcover?-infos?.coverdepth/2:0,infos?.depth/2,0]} castShadow material={defaultMaterial} >
                <boxGeometry  args={[infos?.width-coverdepth, infos?.depth-infos.coverdepth, infos?.height-coverdepth]} />
            </mesh>
           
        </group>
    )
}
