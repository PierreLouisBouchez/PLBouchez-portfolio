import React from 'react'




const presets = {
    A6: { width: 1.05, height: 1.485, detail: "10.5cm x 14.85cm" },
    A5: { width: 1.48, height: 2.1, detail: "14.8cm x 21cm" },
    A4: { width: 2.1, height: 2.97, detail: "21cm x 29.7cm" },
    Royal: { width: 1.6, height: 2.4, detail: "16cm x 24cm" },
    Poche: { width: 1.1, height: 1.8, detail: "11cm x 18cm" },
    BD: { width: 2.4, height: 3.2, detail: "24cm x 32cm" }
};

export default function Sizing({bookInfos,setbookInfos}) {
    return (
    <>
        <div className=' relative flex mt-4'>
            <span className='font-bold'>Preset</span>
            <div className='px-2 '>
                <select className='bg-green-300/50 border-2 ' onChange={(e) => { const tmp = presets[e.target.value]; if (tmp) { setbookInfos({ ...bookInfos, width: tmp.width, height: tmp.height }) } }} >
                    <option className='' key={"Aucun"} >Select a preset</option>

                    {presets && Object.keys(presets).map((item) => (
                        <option key={item} value={item}>{item}:{presets[item]?.detail}</option>
                    ))}
                </select>
            </div>
        </div>
        <div className='h-auto bg-gray-300   w-full flex-col flex p-2  border-2'>
            <span>Width : {(bookInfos?.width * 10).toFixed(2)} cm </span>
            <input className='py-2 h-full justify-items-center rounded-none  ' type='range' min={1} max={3} step={0.01} value={bookInfos?.width} onChange={(e) => setbookInfos({ ...bookInfos, width: parseFloat(e.target.value) })} />

            <span>Height : {(bookInfos?.height * 10).toFixed(2)} cm </span>
            <input className='py-2  h-full justify-items-center rounded-none  ' type='range' min={1} max={4} step={0.01} value={bookInfos?.height} onChange={(e) => setbookInfos({ ...bookInfos, height: parseFloat(e.target.value) })} />
        </div>
        <div className='h-auto bg-gray-300 w-full flex-col flex p-2 border-2'>
            <span>Depth : {(bookInfos?.depth * 10).toFixed(2)} cm ≈ {Math.ceil(bookInfos?.depth * 1250)} pages </span>
            <input className='py-2  h-full justify-items-center rounded-none  ' type='range' min={0.05} max={1} step={0.01} value={bookInfos?.depth} onChange={(e) => setbookInfos({ ...bookInfos, depth: parseFloat(e.target.value) })} />
            <div className='py-4 flex items-center h-auto '><span>Hardcover (Work in progress) :    </span><input checked={bookInfos?.hardcover} className='ml-2 overflow-hidden w-6 items-center mt-1 h-full custom-checkbox ' type='checkbox' onChange={(e) => { setbookInfos({ ...bookInfos, hardcover: e.target.checked, coverdepth: e.target.checked ? 0.01 : 0.001 }); }} /></div>
            {bookInfos?.hardcover && (<>
                <span>Cover thickness : {(bookInfos?.coverdepth * 10).toFixed(2)} cm  </span>
                <input className='py-2  h-full justify-items-center rounded-none  ' type='range' min={0.01} max={0.025} step={0.001} value={bookInfos?.coverdepth} onChange={(e) => setbookInfos({ ...bookInfos, coverdepth: parseFloat(e.target.value) })} />
            </>)}
        </div></>
    )
}
