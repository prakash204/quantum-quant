import React from "react";
import './table.css';
import axios from 'axios';
import Intel from './Intel'
const { useState} = React;

function Table() {
    const [intel, setIntel] = useState([]);
    const [intelLoaded, setintelLoaded] = useState(false);
    const [tableRows, setTableRows] = useState([
        { company_name: "", site_url: "", linkedin_url : ""}
    ]);
    const [counter, setCounter] = useState(3);
    function addRow() {
        setCounter(counter + 1);
        setTableRows([...tableRows, {company_name: "", site_url: "", linkedin_url:""}]);
    }

    function delRow() {
        setTableRows(tableRows.slice(0, counter - 1));
        setCounter(counter-1);
    }

    const changeCompanyName =(event)=> {
        const newTableData = [...tableRows];
        newTableData[event.target.name].company_name = event.target.value;
        setTableRows([...newTableData]);
    }

    const changeSiteUrl =(event)=> {
        const newTableData = [...tableRows];
        newTableData[event.target.name].site_url = event.target.value;
        setTableRows([...newTableData]);
    }

    const changeLinkedInUrl =(event)=> {
        const newTableData = [...tableRows];
        newTableData[event.target.name].linkedin_url = event.target.value;
        setTableRows([...newTableData]);
    }

    const gatherIntel = (event) => {
        //send data to backend
        //get data from backend api
        axios.post('backend_url', tableRows, {headers: {
            'Content-Type': 'application/json'
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

    return (
        <div class="content">
            {intelLoaded ? <Intel intel={intel}/> : ""}
            <div id="manual-input" class="heading">
                <span>Add Data Manually</span>
            </div>
        <div className="container-2">
            <div class="tables">
                <div class="fixed-column">
                    <table>
                    <thead>
                            <tr>
                                <th>No.</th>
                                <th>Company Name</th>
                                <th>LinkedIn URL</th>
                                <th>Site URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows.map((tableData, index) => (
                                <tr key={index} id={index}>
                                    <td>{index+1}</td>
                                    <td>
                                        <input type="text" value={tableData.company_name} name={index} onChange={changeCompanyName}/>
                                    </td>
                                    <td>
                                        <input type="text" value={tableData.linkedin_url} name={index} onChange={changeLinkedInUrl}/>
                                    </td>
                                    <td>
                                        <input type="text" value={tableData.site_url} name={index} onChange={changeSiteUrl}/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <button class="add-data" onClick={addRow}>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg> Add More Data
            </button>
            <button class="add-data" onClick={gatherIntel}>Gather Data</button>
        </div>
        </div>
    )
}

export default Table;