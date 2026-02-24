import { useState } from "react";

export default function CustomFileInput({ name }) {
    const [fileName, setFileName] = useState("Upload File");

    const handleChange = (e) => {
        const file = e.target.files[0];
        setFileName(file ? file.name : "Upload File");
    };

    return (
        <div className="flex items-center gap-2 w-full">
            <label
                htmlFor={"file-upload-" + name}
                className="px-4 py-2 bg-blue-500/30 w-full border-2 flex justify-between items-center cursor-pointer hover:bg-blue-700/50 transition">{fileName}</label>

            <input id={"file-upload-" + name} type="file" className="hidden" onChange={handleChange} name={name} />
            
            {fileName != "Upload File" ? (<div className="text-bold text-2xl size-10 items-center justify-center flex z-50 border-2 cursor-pointer hover:bg-red-600/60 bg-red-500/60" onClick={(e) => { setFileName("Upload File"); }}>
                X
            </div>) : (<></>)}      
        </div>
    );
}