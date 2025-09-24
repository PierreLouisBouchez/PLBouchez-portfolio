import React, { useEffect, useState } from 'react'



export default function Hobby() {
    const images=[
        {"name":"/2D/berserk.heic"},
        {"name":"/2D/elf.heic"},
        {"name":"/2D/ahsoka.jpg"},
        {"name":"/2D/cyberpunk.heic"},
        {"name":"/2D/Jecki.heic"},
        {"name":"/2D/yae.jpg"},
        {"name":"/2D/arcane.jpg","ratio":"square"},
        {"name":"/2D/martini.webp", "col":"full"},
        {"name":"/2D/multipla.jpg","ratio":"square"},
        {"name":"/2D/mustang.jpg","ratio":"square"},
        {"name":"/2D/portal.jpg","ratio":"square"},
    ];

const [columns, setColumns] = useState(3);
  // Mise à jour responsive du nombre de colonnes
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 640) setColumns(1);
      else if (width < 1024) setColumns(2);
      else setColumns(3);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Distribution des images dans les colonnes
  const distributeImages = () => {
    const cols = Array.from({ length: columns }, () => []);
    
    images.forEach((image, index) => {
      const colIndex = index % columns;
      cols[colIndex].push(image.name);
    });

    return cols;
  };

  const imageColumns = distributeImages();

  return (
    <div className="p-4 h-full overflow-scroll">
      <div className="flex gap-4 h-full ">
        {imageColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex-1 space-y-4">
            {column.map((image, imageIndex) => (
              <div key={imageIndex} className="grid-item p-0 overflow-hidden ">
                <img 
                  src={image.src || image.url || image} 
                  alt={image.alt || `Image ${imageIndex}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />                
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
