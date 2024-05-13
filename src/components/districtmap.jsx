import React, { useEffect } from 'react';
import Marker from './marker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';

const DistrictMapDisplay = ({ district, setDistrict, setFullMap }) => {
    console.log('rendered')
    useEffect(() => {
        // fetch('./data/east/locations.csv')
        //     .then(response => response.text())
        //     .then(responseText => {
        //         // console.log(responseText)
        //         console.log(responseText.split('\r\n'))
        //         responseText.split('\r\n').forEach(element => {
        //             console.log(element)
        //             // console.log(element.split())
        //         });
        //     });
    })
    return (
            <div
                className='image_container'
            >
                <div
                    className='back_arrow_container'
                    onClick={()=>{
                        setDistrict(null)
                        setFullMap(true)
                    }}
                >
                    <div
                    className='back_arrow'
                    >
                        <FontAwesomeIcon 
                    icon={faLongArrowLeft} 
                    
                    style={{
                        width: '30px',
                        height: '30px'
                    }}
                    />
                    </div>
                    <div
                    className='back_arrow_text'
                    >
                    Back to Full Map
                    </div>
                </div>
                <Marker
                    pinTop="160px"
                    pinLeft="500px"
                    popUpTop="55px"
                    popUpLeft="330px"
                    floors='G+20'
                    hoverTitle="Kings Shaes Residency"
                    hoverAddress="Block 3 A, Gulistan-e-Jouhar"
                    carbonFootprint="9.1"
                // image={kings_residency}
                />
                <img
                    src={`./images/khi-${district}.png`}
                    alt="karachi_map"
                    className='map_image'
                    style={{
                        width: '600px',
                        paddingLeft: district === 'south' ? '150px' : district === 'east' ? '130px' : '100px',
                    }}
                />
            </div>
    );
}

export default DistrictMapDisplay;