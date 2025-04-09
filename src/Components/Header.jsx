export default function Header() {
    return (
      <div className="sticky flex  w-full h-20 ">
        <div className="flex w-full  h-full items-center justify-evenly mx-4 text-2xl text-gray-900 ">

            <div className="flex w-1/2 justify-first  ">
            <h2 className="px-3 py-1 rounded-full bg-red-300" >Pierre-Louis Bouchez</h2>
            
            </div>
            <div className="flex w-1/2 justify-evenly ">

            <h2 className="px-3 py-1 bg-blue-300 rounded-full ">Parcours </h2>
            <h2 className="px-3 py-1 bg-green-300 rounded-full ">Projets</h2>
            <h2 className="px-3 py-1 bg-yellow-300  rounded-full ">Hobbies</h2>

            </div>

        </div>
      </div>
    )
  }