import React, { useState } from 'react';
import FullMapDisplay from './fullmap';
import './../styles/map.css'
import DistrictMapDisplay from './districtmap';

const Index = () => {
    const [fullMap, setFullMap] = useState(true)
    const [districtMap, setDistrictMap] = useState(null)
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
                {fullMap && <FullMapDisplay />}
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