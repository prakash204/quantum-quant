import React from "react";
import axios from 'axios';
import './uploadCsv.css';
import './App.css';
import Intel from './Intel.js'
// import data2 from './dataSet2.js';
const { useState } = React;


function UploadCsv() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [intelType, setIntelType] = useState("company");
    const [button1Type, setButton1Type] = useState("active");
    const [button2Type, setButton2Type] = useState("inactive");
    const [intel,setIntel] = useState([]);
    const [intelLoaded, setintelLoaded] = useState(false);
    
    const onFileChange = (event) => {
        console.log(event.target.files[0]);
        setSelectedFile(event.target.files[0]);
    }
    const onFileUpload = (event) => {
        //send data to backend
        if (selectedFile === null) {
            alert("Upload data as csv file or enter data manually");
            return false;
        }

        const formData = new FormData();

        formData.append(
            "myfile",
            selectedFile,
            selectedFile.name
        )
        formData.append('intel-type',intelType)

        console.log(formData);
        console.log(intelType)
        console.log(selectedFile);

        axios.post('backend_url', formData, {headers: {
            'Content-Type': 'multipart/form-data'
          }})
        .then((res) => {
            setIntel(res.data);
            setintelLoaded(true);
        })
        .catch((err) => {
            console.log(err);
            alert(err);
        });

        // setIntel(data2);
        // setintelLoaded(true);
        if (intelLoaded) {
            document.getElementById("overlay-2").style.display = "block";
        }
    }

    const selectIntelType = (event) => {
        setIntelType(event.target.name);
        if (event.target.name === "company") {
            setIntelType("company")
            setButton1Type("active")
            setButton2Type("inactive")
        } else {
            setIntelType("individual")
            setButton1Type("inactive")
            setButton2Type("active")
        }
    }

    function scrollToManualInput() {
        const element = document.getElementById('manual-input');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    function scrollToIntel() {
        const element = document.getElementById('display-intel');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
        <div id="overlay">
            <span class="loader"></span>
        </div>
        {intelLoaded ? <Intel intel={intel}/> : '' }
        
        <div class="content">
        <div class="heading">
        <span>Upload CSV File as per requirement</span>
        </div>
            <div className="upload">
                <div class="intel-type-selection">
                <div style={{padding:"3%"}}>
                    <span>Intel Type: </span>
                </div>
                    <div class="intel-type-button">
                        <button name="company" class={`${button1Type}-button`} onClick={selectIntelType}>Company</button>
                    </div>
                    <div class="intel-type-button">
                        <button name="individual" class={`${button2Type}-button`} onClick={selectIntelType}>Individual</button>
                    </div>
                </div>
                <div class="buttons">
                    <input class="file-input"type="file" accept=".csv" onChange={onFileChange} />
                </div>
                {/* <button class="upload-button" onClick={onFileUpload}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#152f59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload-cloud">
                    <polyline points="16 16 12 12 8 16"></polyline>
                    <line x1="12" y1="12" x2="12" y2="21"></line>
                    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                    <polyline points="16 16 12 12 8 16"></polyline>
                </svg>
                </button> */}
                <div class="buttons">
                    <button class="submission-button" onClick={onFileUpload}>Gather Data</button>
                </div>
                <a href="#" onClick={scrollToManualInput}><span>Want to enter details manually ?</span></a>
            </div>
        </div>
        </>
    )
}

export default UploadCsv;