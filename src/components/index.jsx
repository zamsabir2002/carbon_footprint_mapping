import React, { useState } from 'react';
import FullMapDisplay from './fullmap';
import './../styles/map.css'
import DistrictMapDisplay from './districtmap';

const Index = () => {
    const [fullMap, setFullMap] = useState(true)
    const [districtMap, setDistrictMap] = useState(null)
    console.log('currr', districtMap)
    return (
        <>
            <div
                className='container'
            >
                <div
                    className='heading'
                >
                    Carbon Footprinting Analysis
                </div>
                {
                fullMap && 
                <FullMapDisplay 
                    districtMap={districtMap}
                    setDistrictMap={setDistrictMap}
                />
                }
                {
                    !!districtMap && <DistrictMapDisplay
                        district={districtMap}
                    />
                }
            </div>
        </>
    );
}

export default Index;


{/* <Marker
                    pinTop="168px"
                    pinLeft="282px"
                    popUpTop="77px"
                    popUpLeft="291px"
                    floors='G+20'
                    hoverTitle="Kings Shaes Residency"
                    hoverAddress="Block 3 A, Gulistan-e-Jouhar"
                    carbonFootprint="9.1"
                    image={kings_residency}
                /> */}