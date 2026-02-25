import { useState } from "react";

export default function CustomFileInput({ name,handler,hidden }) {

    const handleChange = (e) => {
        const file = e.target.files[0];
        handler({e,name});

    };

    return (
        (hidden && <div className="flex items-center gap-2 w-full ">
            <label
                htmlFor={"file-upload-" + name}
                className="px-4 py-2 bg-blue-500/30 w-full border-2 flex justify-between items-center cursor-pointer hover:bg-blue-700/50 transition">Upload File</label>

            <input id={"file-upload-" + name} type="file" className="hidden" onChange={handleChange} accept="image/*" name={name} />
            
        </div>)
    );
}