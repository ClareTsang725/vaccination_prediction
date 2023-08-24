// modules
import React, { useState } from 'react';
// css
import "./DatasetPreviewer.css";

export default function DatasetPreviewer() {
    const [fileContent, setFileContent] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const content = e.target.result;
                setFileContent(content);
            };

            reader.readAsText(file);
        }
    };


    return (
        <div className='dataset-previewer'>
            <input type="file" onChange={handleFileChange} />
            <pre>{fileContent}</pre>
        </div>
    )
}