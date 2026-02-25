import React, { useState } from 'react'
import CustomFileInput from './CustomFileInput'

function Images({bookInfos,setbookInfos}) {

    const [editmode,setEditmode]=useState(null);
    
    const handleFileInput=({e,name})=>{
         
        const file = e.target.files[0];
        if(!file) return;
        const url = URL.createObjectURL(file);
        setbookInfos({...bookInfos,[name]:url});
    }

    const deleteImage=(name)=>{
        setbookInfos({...bookInfos,[name]:null});
    }

    console.log(bookInfos);


    return (
        <div className='flex flex-col grow w-full gap-y-2'>
            
            
            
            {editmode && (<div className='absolute bg-black/50 top-0 left-0 z-30 size-full p-4'>
                <div className='w-1/2 flex flex-col relative h-full overflow-y-auto p-4 items-center justify-center border-gray-800 border-2 md:gap-y-6 gap-y-2  bg-[#ababab]'>
                    <div onClick={()=> setEditmode(null)} className='absolute top-2 size-10 right-2 cursor-pointer flex items-center justify-center p-2 border-2 bg-red-600/50 '>
                    <svg className='size-full scale-150' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
                    </div>
                    <div className='relative w-7/8 h-full items-center justify-center flex  border-2 bg-[#616161] p-12'>

                    <img className='  object-contain h-full ' src={bookInfos[editmode] }/>
                    </div>
                </div>
            </div>)}




            <div className='h-auto flex-row bg-gray-300 justify-between items-center w-full flex p-2  border-2'>
                Format 
                <div className='h-auto  flex p-2 cursor-pointer bg-amber-600/50 border-2'>
                3 files
                </div>
                <div className='h-auto bg-gray-300 cursor-not-allowed opacity-50 flex p-2  border-2'>
                Full cover file
                </div>
            </div>
            <div className='h-auto bg-gray-300  z-10 w-full flex-col flex p-2  border-2'>
                <h2>Front cover (Ratio : {(bookInfos?.height/bookInfos?.width).toPrecision(2)})</h2>
                <CustomFileInput className='w-1/2 bg-blue-500/30 hover:bg-blue-700/40' name={"front"}  handler={handleFileInput} hidden={bookInfos.front == null} />
                <div className='w-full flex items-center gap-x-4'>

                <img className={` border-2 h-40 ${bookInfos?.front ? "visible":"hidden"} `} src={bookInfos?.front}/>
                {bookInfos?.front && <div className='flex flex-col gap-2'>
                <div onClick={()=> setEditmode("front")} className="text-bold text-2xl size-10 items-center justify-center flex z-50 border-2 cursor-pointer hover:bg-orange-600/60 bg-orange-500/60" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M7 17V1H5v4H1v2h4v10a2 2 0 0 0 2 2h10v4h2v-4h4v-2m-6-2h2V7a2 2 0 0 0-2-2H9v2h8z"/></svg>                    
                </div>
                <div className="text-bold text-2xl size-10 items-center justify-center flex z-50 border-2 cursor-pointer hover:bg-red-600/60 bg-red-500/60" onClick={(e) =>  deleteImage("front") }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                </div>
                </div>}
                </div>
            </div>
            <div className='h-auto bg-gray-300  z-10 flex  w-full flex-col  p-2  border-2'>
                <h2>Side (Ratio : {(bookInfos?.height/bookInfos?.depth).toPrecision(2)})</h2>
                <CustomFileInput className=" bg-red-500/30 hover:bg-red-700/40" name={"side"} handler={handleFileInput} hidden={bookInfos?.side== null} />
                                <div className='w-full flex items-center gap-2'>

                <img className={` border-2 h-40 ${bookInfos?.side ? "visible":"hidden"} `} src={bookInfos?.side} />
                {bookInfos?.side && <div className='flex flex-col gap-2'>
                <div onClick={()=> setEditmode("side")} className="text-bold text-2xl size-10 items-center justify-center flex z-50 border-2 cursor-pointer hover:bg-orange-600/60 bg-orange-500/60" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M7 17V1H5v4H1v2h4v10a2 2 0 0 0 2 2h10v4h2v-4h4v-2m-6-2h2V7a2 2 0 0 0-2-2H9v2h8z"/></svg>                    
                </div>
                <div className="text-bold text-2xl size-10 items-center justify-center flex z-50 border-2 cursor-pointer hover:bg-red-600/60 bg-red-500/60" onClick={(e) =>  deleteImage("side") }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                </div>
                </div>
                }
                </div>
            </div>
            <div className='h-auto bg-gray-300 z-10 flex w-full flex-col  p-2  border-2'>
                <h2>Back cover (Ratio : {(bookInfos?.height/bookInfos?.width).toPrecision(2)})</h2>
                <CustomFileInput className=" bg-green-500/30 hover:bg-green-700/40" name={"back"} handler={handleFileInput} hidden={bookInfos?.back== null} />
                <div className='w-full flex items-center gap-2'>

                <img className={` border-2 h-40 ${bookInfos?.back ? "visible":"hidden"} `} src={bookInfos?.back} />
                {bookInfos?.back && <div className='flex flex-col gap-2'>
                <div onClick={()=> setEditmode("back")} className="text-bold text-2xl size-10 items-center justify-center flex z-50 border-2 cursor-pointer hover:bg-orange-600/60 bg-orange-500/60" >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M7 17V1H5v4H1v2h4v10a2 2 0 0 0 2 2h10v4h2v-4h4v-2m-6-2h2V7a2 2 0 0 0-2-2H9v2h8z"/></svg>                    
                </div>
                <div className="text-bold text-2xl size-10 items-center justify-center flex z-50 border-2 cursor-pointer hover:bg-red-600/60 bg-red-500/60" onClick={(e) =>  deleteImage("back") }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                </div>
                </div>
                }
                </div>
            </div>
        </div>
    )
}

export default Images