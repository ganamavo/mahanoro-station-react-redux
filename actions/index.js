function getTrips() {
    return async(dispatch) => {
        const res = await fetch(`https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json`);
        const trips = await res.json();
        return dispatch({
            type: "GET_SONGS",
            payload: trips
        })
    }
}


export { getTrips }