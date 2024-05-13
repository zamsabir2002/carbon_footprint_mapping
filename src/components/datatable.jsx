import React, { useEffect, useState } from 'react';
import '../styles/datatable.css'
import CsvToHtmlTable from './csv2htmlTable';

const DataTable = ({ data, siteName, address, floors, carbonFootprint }) => {

    return (
        <div className="table_container">
            <div
                className='table_header'
            >
                <h2>Project Details</h2>
                <div>
                    <b>Project Name:</b> {siteName}
                </div>
                <div>
                    <b>Site Location:</b> {address}
                </div>
                <div>
                    <b>No of story of Project:</b> {floors}
                </div>

            </div>

            <>
                <CsvToHtmlTable
                    data={data}
                    csvDelimiter=","
                    tableClassName="table table-striped table-hover"
                />
            </>
        </div>
    );
}

export default DataTable;