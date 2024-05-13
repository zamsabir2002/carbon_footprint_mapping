import React, { useEffect } from 'react';
import Marker from './marker';

const DistrictMapDisplay = ({ district }) => {
    console.log('rendered')
    useEffect(() => {
        fetch('./data/east/locations.csv')
            .then(response => response.text())
            .then(responseText => {
                // console.log(responseText)
                console.log(responseText.split('\r\n'))
                responseText.split('\r\n').forEach(element => {
                    console.log(element)
                    // console.log(element.split())
                });
            });
    })
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
                // image={kings_residency}
                />
                <img
                    src={`./images/khi-${district}.png`}
                    alt="karachi_map"
                    className='map_image map_image_2'
                    style={{
                        width: '600px',
                    }}
                />
            </div>
        </div>
    );
}

export default DistrictMapDisplay;