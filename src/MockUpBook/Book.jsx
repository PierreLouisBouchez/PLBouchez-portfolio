import { Box, RoundedBoxGeometry, useTexture } from '@react-three/drei'
import React, { useEffect, useMemo, useRef } from 'react'
import { BoxGeometry, ExtrudeGeometry, MeshStandardMaterial, RepeatWrapping, Shape, Vector3 } from 'three'

function resetUVs(geometry,infos) {
  const pos = geometry.getAttribute("position");
  const nor = geometry.getAttribute("normal");
  let uvs = geometry.getAttribute("uv");

let znormalize=1/infos?.height
let xnormalize=1/infos?.width
let ynormalize=1/infos?.depth


  if (!uvs) {
    const newUVs = new Float32Array(pos.count * 2);
    geometry.setAttribute("uv", new THREE.BufferAttribute(newUVs, 2));
    uvs = geometry.getAttribute("uv");
  }

  for (let i = 0; i < pos.count; i++) {
    let x = 0,
      y = 0;

    const nx = nor.getX(i),
      ny = nor.getY(i),
      nz = nor.getZ(i);


    if(nz==0 ){
        if( nx==0){

            x = ((pos.getX(i)*xnormalize) -infos?.width/2*xnormalize ) * (ny > 0 ? 1 : -1);
            y = pos.getZ(i)*znormalize * (ny > 0 ? -1 : -1);
        }else{
            x = pos.getY(i)*ynormalize;
            y = -pos.getZ(i)*znormalize;
        }
    }


    /* if (nz > 0.9) {
      x = pos.getX(i);
      y = pos.getY(i);
    } else if (nz < -0.9) {
      x = pos.getX(i);
      y = pos.getY(i);
    } else {
      if (Math.abs(nx) > Math.abs(ny)) {
        x = pos.getY(i) + 0.5;
        y = pos.getZ(i);
      } else {
        x = pos.getX(i);
        y = pos.getZ(i);
      }
    } */


    uvs.setXY(i, x, y);
  }
}

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
    const fronttexture = useTexture("3D/maps/testfront.jpg")
    const backtexture = useTexture("3D/maps/testback.jpg")
    const sidetexture = useTexture("3D/maps/testside.jpg")

    pagestexture.wrapS =  RepeatWrapping;
    pagestexture.wrapT = RepeatWrapping;
    pagestexture.repeat.set(0.25, infos.depth*10   );
    pattern.wrapS =  RepeatWrapping;
    pattern.wrapT = RepeatWrapping;
    pattern.repeat.set(90,120);
    fronttexture.wrapS =  RepeatWrapping;
    fronttexture.wrapT = RepeatWrapping;
    fronttexture.repeat.set(1,1);
    backtexture.wrapS =  RepeatWrapping;
    backtexture.wrapT = RepeatWrapping;
    backtexture.repeat.set(1,1);
    sidetexture.wrapS =  RepeatWrapping;
    sidetexture.wrapT = RepeatWrapping;
    sidetexture.repeat.set(1,1);


    const defaultMaterial = new MeshStandardMaterial({
        map: pagestexture,
    color: 0xffffff,
    roughness: 0.95,
    metalness: 0,
    });
    const frontmaterial = new MeshStandardMaterial({
        map:fronttexture,
        color: "#ffffff",
        roughness: 0.95,
        metalness: 0,
    });
    const backmaterial = new MeshStandardMaterial({
        map:backtexture,
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0,
    });
    const sidematerial = new MeshStandardMaterial({
        map:sidetexture,
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0,
    });

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
        
         geo.clearGroups();
        const positionAttribute = geo.getAttribute('position');
        const faceCount = geo.index ? geo.index.count / 3 : positionAttribute.count / 3;
  
        for (let i = 0; i < faceCount; i++) {
            let a, b, c;
  
            if (geo.index) {
                a = geo.index.getX(i * 3);
                b = geo.index.getX(i * 3 + 1);
                c = geo.index.getX(i * 3 + 2);
            } else {
                a = i * 3;
                b = i * 3 + 1;
                c = i * 3 + 2;
            }
  
            const vA = new Vector3().fromBufferAttribute(positionAttribute, a);
            const vB = new Vector3().fromBufferAttribute(positionAttribute, b);
            const vC = new Vector3().fromBufferAttribute(positionAttribute, c);
  
            const faceNormal = new Vector3()
                .crossVectors(vB.clone().sub(vA), vC.clone().sub(vA))
                .normalize();

            if(faceNormal.z === 0 && faceNormal.y >= 0 && faceNormal.x >= -0.4 && vA.y >= infos?.depth/2 && vB.y >= 0 && vC.y >= 0){
                geo.addGroup(i * 3, 3, 0);
            }else if( faceNormal.z === 0 && faceNormal.y <= 0 && faceNormal.x >= -0.4 && vA.y <= infos?.depth/2 && vB.y <= 0 && vC.y <= 0){
                geo.addGroup(i * 3, 3, 1);
            }else{
                geo.addGroup(i * 3, 3, 2);
            }


            /* if (faceNormal.z === 0 && extrudeSettings.bevelEnabled) {
                geo.addGroup(i * 3, 3, 3); // Groupe pour le matériau du bevel
            } else if (Math.abs(faceNormal.z + 1) < 0.5) {
                geo.addGroup(i * 3, 3, 0);
            } else if (Math.abs(faceNormal.z - 1) < 0.5) {
                geo.addGroup(i * 3, 3, 1);
            } else {
                geo.addGroup(i * 3, 3, 2);
            } */
        }



        resetUVs(geo,infos);
        geo.deleteAttribute("normal");
        geo.computeVertexNormals();

        return geo;
    }, [shape, infos?.height]);


    return (
        <group position={position} rotation={rotation} >
           
            <mesh position={[0,0,-infos.height/2]} geometry={geometry} material={[frontmaterial,backmaterial,sidematerial]}></mesh>
            
            <mesh ref={pages} position={[infos?.hardcover?-infos?.coverdepth/2:0,infos?.depth/2,0]} castShadow material={defaultMaterial} >
                <boxGeometry  args={[infos?.width-coverdepth, infos?.depth-infos.coverdepth, infos?.height-coverdepth]} />
            </mesh>
           
        </group>
    )
}
