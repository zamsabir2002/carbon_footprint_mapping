import React, { useEffect, useState } from 'react';
import '../styles/datatable.css'
import CsvToHtmlTable from './csv2htmlTable';

const DataTable = ({ siteName, address, floors, carbonFootprint }) => {
    const [data, setData] = useState('')

    useEffect(() => {
        fetch('./1.csv')
            .then(response => response.text())
            .then(responseText => {
                setData(responseText);
            });
    }, [])

    const sampleData1 = data;
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
            {/* 
                <table>
                <thead>
                    <tr>
                        <th>PHASE/STAGE OF CONSTRUCTION</th>
                        <th>Equipment Name</th>
                        <th>Work</th>
                        <th>New/Old</th>
                        <th>Fuel Type</th>
                        <th>Fuel Consumption (liters/hour or liters/day)</th>
                        <th>Hours Operated</th>
                        <th>Carbon Footprint</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Site Clearance
                        </td>
                        <td>
                            <p>Backhoe</p>
                            <p>Wheel Tractor Scrapers</p>
                            <p>Bulldozers</p>
                            <p>Dewatering Pump</p>
                            <p>Loader</p>
                            <p>Dumper</p>
                        </td>
                        <td>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            Moving Soil / Rocks
                            Dumping Soil
                        </td>
                        <td>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            Old
                            Old
                        </td>
                        <td>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            Diesel
                            Diesel
                        </td>
                        <td>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            60
                            60

                        </td>
                        <td>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            4
                            8
                        </td>
                        <td>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </td>
                    </tr>
                </tbody>
            </table> 
        */}
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