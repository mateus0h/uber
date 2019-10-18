import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyA50ZdOQtWDS2DdZc437qAQXWTxrQflT2g"
        strokeWidth={3}
        strokeColor="#222"
    />
);

export default Directions;