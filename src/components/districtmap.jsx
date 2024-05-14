import React, { useEffect, useState } from 'react';
import Marker from './marker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import malir from './images/khi-malir.png'
import east from './images/khi-east.png'
import west from './images/khi-west.png'
import central from './images/khi-central.png'
import south from './images/khi-south.png'

const DistrictMapDisplay = ({ district, setDistrict, setFullMap }) => {

    const [locations, setLocations] = useState([])
    const mapLocations = {
        'malir': malir,
        'east': east,
        'west': west,
        'central': central,
        'south': south,
    }

    useEffect(() => {
        if (district !== 'west') {
            setLocations([])
            fetch(`./data/${district}/location.csv`)
                .then(response => response.text())
                .then(responseText => {
                    setLocations(responseText.split('\n'))
                });
        }
        else {
            setLocations([])
        }
    }, [district])

    return (
        <div
            className='image_container'
        >
            <div
                className='back_arrow_container'
                onClick={() => {
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

            {
                locations.map((each_loc, idx) => {
                    // console.log(idx, each_loc)
                    // places = each_loc.split(',')
                    return (
                        <Marker
                            district={district}
                            pinTop={each_loc.split(',')[0]}
                            pinLeft={each_loc.split(',')[1]}
                            popUpTop={each_loc.split(',')[2]}
                            popUpLeft={each_loc.split(',')[3]}
                            index={idx}
                            floors='G+20'
                            hoverTitle="Kings Shaes Residency"
                            hoverAddress="Block 3 A, Gulistan-e-Jouhar"
                            carbonFootprint="100.1"
                        />
                    )
                }
                )
            }
            {/* <Marker
                pinTop="360px"
                pinLeft="180px"
                popUpTop="235px"
                popUpLeft="195px"
                floors='G+20'
                hoverTitle="Kings Shaes Residency"
                hoverAddress="Block 3 A, Gulistan-e-Jouhar"
                carbonFootprint="9.1"
            // image={kings_residency}
            /> */}
            <img
                src={mapLocations[district]}
                alt="karachi_map"
                className='map_image'
                style={{
                    width: '600px',
                    paddingLeft: district === 'south' ? '150px' : district === 'east' ? '130px' : '100px',
                }}
                loading="eager"
            />
        </div>
    );
}

export default DistrictMapDisplay;