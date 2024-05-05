import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import '../styles/map.css'
import Modal from './modal';

function Marker({ pinTop, pinLeft, popUpTop, popUpLeft, desc }) {

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
                <div
                    style={{
                        padding: "4px 5px 4px 0px",
                    }}
                >
                    Title
                </div>
                <hr />
                <div
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ad libero sunt.
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