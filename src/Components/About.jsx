export default function About(){

    const infos = 
        [
            {
                title: "A propos de moi",
                gridrows: 3,
                gridcols: 2,
                information: [
                    { "label": "Name", "fr": "Pierre-Louis Bouchez" },
                    { "label": "Age", "fr": "25 years" },
                    { "label": "Location", "fr": "France, Lille" },
                    { "label": "Email", "fr": "plbouchez@outlook.fr" },
                    { "label": "Languages", "fr": "France, English (fluent)" }
                ]
            },
            {
                title: "Parcours",
                gridrows: 2,
                gridcols: 2,
                information: [
                    { "label": "Name", "fr": "Pierre-Louis Bouchez" },
                
                ]
            },
        ];


    return (
        <div className=" h-full p-12"> 
        
            <div className="relative select-none h-full w-full    grid grid-cols-3 grid-rows-2 gap-4 " >
                    <h2 className="text-gris  top-0 left-0 p-4 h-full outline-2 bg-gray-300  text-2xl font-bold lg:border-2 border-gris outline-gris  lg:shadow-abberationrelief">
                        <img
                            src={`/Images/pp.png`}
                            alt={"Pierre-Louis Bouchez"}
                            className=" h-full object-cover lg:border-2 border-gris outline-gris outline-2  "
                            loading="lazy"
                        />
                    </h2>
                <h2 className="text-gris  top-0 left-0 p-4 h-full outline-2 bg-gray-300 col-start-2 col-span-2 text-2xl font-bold lg:border-2 border-gris outline-gris  lg:shadow-abberationrelief">
                    Bonjour !<br/>
                    Je m'appelle Pierre-Louis Bouchez, un développeur passionné de 25 ans basé à Lille, France. Avec une expertise en développement web et une passion pour la création de jeux vidéo, je suis toujours à la recherche de nouveaux défis et opportunités pour apprendre et grandir dans le domaine de la technologie.
                </h2>
            </div>
        </div>
    )
}