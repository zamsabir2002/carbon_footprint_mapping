import React from 'react';
import '../styles/datatable.css'
import CsvToHtmlTable from './csv2htmlTable';
const DataTable = ({siteName, address, floors, carbonFootprint}) => {
    const sampleData1 = `
    Model,mpg,cyl,disp,hp,drat,wt,qsec,vs,am,gear,carb
    Mazda RX4,21,6,160,110,3.9,2.62,16.46,0,1,4,4
    Mazda RX4 Wag,21,6,160,110,3.9,2.875,17.02,0,1,4,4
    Datsun 710,22.8,4,108,93,3.85,2.32,18.61,1,1,4,1
    Hornet 4 Drive,21.4,6,258,110,3.08,3.215,19.44,1,0,3,1
    Hornet Sportabout,18.7,8,360,175,3.15,3.44,17.02,0,0,3,2
    Valiant,18.1,6,225,105,2.76,3.46,20.22,1,0,3,1
    Duster 360,14.3,8,360,245,3.21,3.57,15.84,0,0,3,4
`;
    return (
        <div className="table_container">
            <div
                style={{
                    width: '100%',
                    textAlign: 'center',
                }}
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
            {/* <table>
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
            </table> */}
            <div>
                <CsvToHtmlTable
                     data={sampleData1}
                     csvDelimiter=","
                     tableClassName="table table-striped table-hover"
                />
            </div>
        </div>
    );
}

export default DataTable;