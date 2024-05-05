import React from 'react';
import '../styles/datatable.css'
const DataTable = () => {
    return (
        <div className="container">
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
        </div>
    );
}

export default DataTable;