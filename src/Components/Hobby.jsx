import React, { useEffect, useState } from 'react'



export default function Hobby() {

    const [images, setImages] = useState([]);

    useEffect(() => {
        // Liste des fichiers connue à l’avance
        const illus = [
            "berserk.heic",
            "ahsoka.jpg",
            "Jecki.heic",
            "elf.heic",
            "yae.jpg",
            "cyberpunk.heic",
            "arcane.jpg",
        ];

        // Génération des chemins relatifs
        setImages(illus.map(f => `/2D/${f}`));
    }, []);



  return (
        <div className="h-full scroll-auto overflow-y-scroll  p-12"> 
            <div className="relative select-none h-full w-full    grid grid-cols-3  gap-4 " >
                <div className='grid-item text-gris grid'>
                    Illustation/dessin
                </div><div></div>
      <div></div>
                {images.map((src, i) => (
                    <img key={i} src={src} alt={`Illustration ${i}`} className="grid-item p-0 shadow-lg" />
                ))}
            </div>
        </div>
  )
}
