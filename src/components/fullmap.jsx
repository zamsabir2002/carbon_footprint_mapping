import React from 'react';
import '../styles/map.css'
import kings_residency from '../assets/kings_residency.jpg'
import Marker from './marker';

function fullMap() {

    return (
        <div
            className='map_container'
        >
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
                    src="./images/map.png"
                    alt="karachi_map"
                    className='map_image map_image_2'
                    style={{
                        width: '600px',
                    }}
                />
            </div>
            {/* <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <FontAwesomeIcon icon={faMapPin} />
            </div> */}
        </div>
    );
}

export default fullMap;