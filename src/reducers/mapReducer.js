import { GET_CURRENT_USER_LOCATION, SHOW_TRADIE_MAP } from '../constants';

var initialState = {
    currentLocation: {
        lat: 40.7224017,
        lng: -73.9896719
    },
    allLocations: [],
    currentUserLocation: []
}

export default (state = initialState, action) => {

    let updated = Object.assign({}, state);
    let position = {}
    let newPosition = {}
    switch (action.type) {

    case GET_CURRENT_USER_LOCATION:

        updated.currentLocation.lat = action.payload.latitude;
        updated.currentLocation.lng = action.payload.longitude;

        position.lat = action.payload.latitude;
        position.lng = action.payload.longitude;

        newPosition.position = position;
        updated.allLocations.push(newPosition);
        updated.currentUserLocation.push(newPosition)
        return updated;

    case SHOW_TRADIE_MAP:

    const trade = action.payload.data.payload;
    console.log(trade)
    //console.log('trade data from map reducer')
    //console.log(trade[0].geoPosition)
    let newPositionArray = [];
    trade.forEach(item => {
        let position = {};
        let geoPosition = {};
        console.log(item.geoPosition.position)
        position.lat = Number(item.geoPosition.position.lat);
        position.lng = Number(item.geoPosition.position.lng);

        geoPosition.position = position;
        newPositionArray.push(geoPosition)
    });
 
   
    updated.allLocations = [...updated.currentUserLocation, ...newPositionArray];

    console.log(updated)

    return updated;

    default: 
        return updated;

    }

}
