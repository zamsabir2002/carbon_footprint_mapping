import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Marker from './marker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import malir from './images/khi-malir.png';
import east from './images/khi-east.png';
import west from './images/khi-west.png';
import central from './images/khi-central.png';
import south from './images/khi-south.png';

const mapLocations = {
    'malir': malir,
    'east': east,
    'west': west,
    'central': central,
    'south': south,
};

const preloadImages = (images) => {
    for (const key in images) {
        const img = new Image();
        img.src = images[key];
    }
};

const DistrictMapDisplay = ({ district, setDistrict, setFullMap }) => {
    const [locations, setLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        preloadImages(mapLocations);
    }, []);

    useEffect(() => {
        if (district !== 'west') {
            setLocations([]);
            setIsLoading(true);
            fetch(`./data/${district}/location.csv`)
                .then(response => response.text())
                .then(responseText => {
                    setLocations(responseText.split('\n'));
                    setIsLoading(false);
                });
        } else {
            setLocations([]);
            setIsLoading(false);
        }
    }, [district]);

    const handleBackClick = useCallback(() => {
        setDistrict(null);
        setFullMap(true);
    }, [setDistrict, setFullMap]);

    const renderedMarkers = useMemo(() => (
        locations.map((each_loc, idx) => {
            const [pinTop, pinLeft, popUpTop, popUpLeft] = each_loc.split(',');
            return (
                <Marker
                    key={idx}
                    district={district}
                    pinTop={pinTop}
                    pinLeft={pinLeft}
                    popUpTop={popUpTop}
                    popUpLeft={popUpLeft}
                    index={idx}
                    floors='G+20'
                    hoverTitle="Kings Shaes Residency"
                    hoverAddress="Block 3 A, Gulistan-e-Jouhar"
                    carbonFootprint="100.1"
                />
            );
        })
    ), [locations, district]);

    return (
        <div className='image_container'>
            <div className='back_arrow_container' onClick={handleBackClick}>
                <div className='back_arrow'>
                    <FontAwesomeIcon
                        icon={faLongArrowLeft}
                        style={{ width: '30px', height: '30px' }}
                    />
                </div>
                <div className='back_arrow_text'>
                    Back to Full Map
                </div>
            </div>
            {renderedMarkers}
            {isLoading ? (
                <div>Loading...</div> // You can replace this with a spinner or placeholder image
            ) : (
                <img
                    src={mapLocations[district]}
                    alt="karachi_map"
                    className='map_image'
                    style={{
                        width: '600px',
                        paddingLeft: district === 'south' ? '150px' : district === 'east' ? '130px' : '100px',
                    }}
                    loading="lazy"
                />
            )}
        </div>
    );
};

export default React.memo(DistrictMapDisplay);
