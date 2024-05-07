import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faMapPin } from '@fortawesome/free-solid-svg-icons'
import '../styles/map.css'
import kings_residency from '../assets/kings_residency.jpg'
import Marker from './marker';

function MapDisplay() {

    return (
        <div
            className='map_container'
        >
            <div
                className='map_heading'
            >
                Carbon Footprinting Analysis <FontAwesomeIcon icon={faMapMarkerAlt} />
                <FontAwesomeIcon icon={faMapPin} />
            </div>

            <div
                className='image_container'
            >
                <Marker
                    pinTop="168px"
                    pinLeft="282px"
                    popUpTop="77px"
                    popUpLeft="291px"
                    floors='G+20'
                    hoverTitle="Kings Shaes Residency"
                    hoverAddress="Block 3 A, Gulistan-e-Jouhar"
                    carbonFootprint="9.1"
                    image={kings_residency}
                />
                <img
                    src="./images/map.jpeg"
                    alt="Map of Karachi"
                    className='map_image'
                />
            </div>
            <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <FontAwesomeIcon icon={faMapPin} />
            </div>
        </div>
    );
}

export default MapDisplay;