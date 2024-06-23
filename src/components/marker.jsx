import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import '../styles/map.css'
import DataTable from './datatable'
import Modal from './modal';

function Marker({
    district,
    index,
    pinTop,
    pinLeft,
    popUpTop,
    popUpLeft,
    image
}) {

    const [displayDiv, setDisplayDiv] = useState(false)
    const [modalDisplay, setModalDisplay] = useState(false)

    const [projectSite, setProjectSite] = useState('')
    const [floors, setFloors] = useState('')
    const [carbonFootprint, setCarbonFootprint] = useState('')
    const [hoverAddress, setHoverAddress] = useState('')
    const [data, setData] = useState('')
    
    // console.log(`./data/new_data/${district}/${district}-${index}.csv`)
    useEffect(() => {
        fetch(`./data/new_data/${district}/${district}-${index}.csv`)
            .then(response => response.text())
            .then(responseText => {
                let listResponse = responseText.split('\n')
                let projectDetails = listResponse.slice(0, 4)
                setProjectSite(projectDetails[0].split(',')[1])
                setHoverAddress(projectDetails[1].split(',')[1])
                setFloors(projectDetails[2].split(',')[1])
                setCarbonFootprint(projectDetails[3].split(',')[1])
                setData(listResponse.slice(4, -1).join('\n'));
            });
    }, [district])

    return (
        <div
            tabIndex={"0"}
            onKeyDown={(e) => {
                if (e.keyCode === 27 || e.key === "Escape") {
                    setModalDisplay(false)
                }
            }}
        >

            <Modal
                district={district}
                modalDisplay={modalDisplay}
                setModalDisplay={setModalDisplay}
                DataTable={
                    <DataTable
                        data={data}
                        siteName={projectSite}
                        address={hoverAddress}
                        carbonFootprint={carbonFootprint}
                        floors={floors}
                    />
                }
            />

            <div
                className='popup_div'
                style={{
                    top: popUpTop,
                    left: popUpLeft,
                    display: displayDiv ? "block" : "none",
                }}
                onMouseEnter={() => {
                    setDisplayDiv(true)
                }}
                onMouseLeave={() => {
                    setDisplayDiv(false)
                }}

                onClick={() => {
                    setModalDisplay(true)
                    setDisplayDiv(false)
                }}
            >
                <img
                    src={`./data/new_data/images/${projectSite}.jpg`}
                    style={{
                        padding: "4px 5px 4px 0px",
                        height: "150px",
                        alignSelf: "center",
                        borderRadius: "15px"
                    }}
                    alt="Logo"
                />
                <div
                    style={{
                        padding: "4px 5px 4px 0px",
                        fontWeight: 'bold'
                    }}
                >
                    {projectSite}
                </div>
                <hr />
                <div>
                    📍 {hoverAddress}
                </div>
                <hr />
                <div>
                    Carbon Footprint: {carbonFootprint} / 1000 PPM
                </div>
            </div>
            <div
                className='pin_point'
                style={{
                    top: pinTop,
                    left: pinLeft,
                }}

                onMouseEnter={() => {
                    setDisplayDiv(true)
                }}
                onMouseLeave={() => {
                    setDisplayDiv(false)
                }}

                onClick={() => {
                    setModalDisplay(true)
                    setDisplayDiv(false)
                }}
            >
                <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    size="xl"
                    style={{
                        fontSize: '1.7rem',
                        color: carbonFootprint > 1000 ? 'red' : 'green',
                    }}
                />
            </div>
        </div >
    );
}

export default Marker;