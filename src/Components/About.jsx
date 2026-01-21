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
        <div className=" h-full xl:p-12"> 
        
            <div className="relative select-none h-full w-full    grid xl:grid-cols-3 grid-cols-2 grid-rows-2 xl:gap-4 " >
                    <h2 className="text-gris grid-item h-full xl:col-auto col-span-2 items-center flex justify-center  ">
                        <img
                            src={`/Images/pp.webp`}
                            alt={"Pierre-Louis Bouchez"}
                            className=" h-full w-full object-cover lg:border-2 border-gris outline-gris outline-2  "
                            loading="lazy"
                        />
                    </h2>
                <div className="text-gris relative grid-item h-full p-8 col-span-2 ">
                    Hello  !<br/>
                    Je suis Pierre-Louis Bouchez, un développeur passionné de {new Date().getFullYear() - 1999 -(new Date() < new Date(new Date().getFullYear(), 2, 11)) + " "} ans.
                    <br/> 
                     
                <div className="text-gris hover:text-gris/50 scale-y-100  absolute bottom-1 right-1 flex justify-center items-center w-auto cursor-pointer ">Suivant {"   "} <div className="px-4  scale-x-200 scale-y-50"> V</div> </div>
                </div>
            </div>
        </div>
    )
}