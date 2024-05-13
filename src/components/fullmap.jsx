import React from 'react';
import '../styles/map.css'
import kings_residency from '../assets/kings_residency.jpg'
import Marker from './marker';
import LegendDisplay from './legend';

function fullMap({districtMap, setDistrictMap}) {

    return (
        <div
            className='map_container'
        >
            <LegendDisplay 
                district={districtMap}
                setDistrict={setDistrictMap}
            />
            <div
                className='image_container'
            >
                <img
                    src="./images/map.png"
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

export default fullMap;