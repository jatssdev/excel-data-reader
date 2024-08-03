import React from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";

const Upload = ({ handleFileUpload }) => {
    return (
        <div className='h-[100vh] flex items-center justify-center'>
            <div className='border px-16 py-8'>
                <label htmlFor="file" >
                    <FaCloudUploadAlt className='text-6xl mx-auto' />
                    <span>Upload New File</span>
                </label>
                <input className='hidden' type="file" id='file' accept=".xlsx, .xls" onChange={handleFileUpload} />
            </div>
        </div>
    )
}

export default Upload
