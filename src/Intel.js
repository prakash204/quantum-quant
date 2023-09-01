import React from 'react';
import $ from "jquery";
import "datatables.net-dt/css/jquery.dataTables.min.css";
// import dataSet from "./dataSet.js";
import 'datatables.net';
import './table.css';
import './uploadCsv.css'

const { useEffect} = React;

function Intel(props) {
    // const dataSet = props.intel;
    // console.log(props);

    useEffect(() => {
        // When component loads, fill table with data
        $('#intel-table').DataTable({
        fixedColumns: {
            left: 1,
            right: 1
        },
        scrollY: 400,
        scrollX: true,
        scroller: true,
        data: props.intel,
        columns: [
            { data:"company_name",title: "Company Name" },
            { data:"employee_count",title: "Employee Count" },
            { data:"revenue",title: "Revenue" },
            { data:"description",title: "Description" },
            { data:"industry",title: "Industry" },
            { data:"founded_date",title: "Founded Dt." },
            { data:"country_address",title: "Address" },
            { data:"google_review",title: "Google Review" },
            { data:"social_media_handles",title: "Social Media" },
            { data:"domains",title: "Domain" },
        ],
        });
    }, []);

    const closeIntel = () => {
        document.getElementById("overlay-2").style.display = "none";
    }


    return (
        <div id="overlay-2">
            <div id="display-intel" class="heading">
                <span style={{backgroundColor:"white", color:"black", marginBottom:'2%'}}>
                    Gathered Intelligence
                </span>
            </div>
            <div class="container">
                <table id="intel-table" class="display nowrap"></table>
            </div>
            <div class="buttons">
                <button class="submission-button" onClick={closeIntel}>Close Intel</button>
            </div>
        </div>
    )
}

export default Intel;
