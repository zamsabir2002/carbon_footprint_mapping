import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import '../styles/map.css'
import DataTable from './datatable'
import Modal from './modal';

function Marker({ pinTop, pinLeft, popUpTop, popUpLeft, floors , hoverTitle, hoverAddress, carbonFootprint, image}) {

    const [displayDiv, setDisplayDiv] = useState(false)
    const [modalDisplay, setModalDisplay] = useState(false)

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
                modalDisplay={modalDisplay}
                setModalDisplay={setModalDisplay}
                DataTable={
                <DataTable
                    siteName={hoverTitle}
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
            >   
                <img src={image} style={{padding: "4px 5px 4px 0px", height: "150px", alignSelf: "center", borderRadius: "15px"}} alt="Logo" />
                <div
                    style={{
                        padding: "4px 5px 4px 0px",
                        fontWeight: 'bold'
                    }}
                >
                    {hoverTitle}
                </div>
                <hr />
                <div>
                    📍 {hoverAddress}
                </div>
                <hr />
                <div>
                    Carbon Footprint: {carbonFootprint}
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
                onMouseLeave={(e) => {
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
                        color: 'blue',
                    }}
                />
            </div>
        </div >
    );
}

export default Marker;