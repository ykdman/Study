import { useState, useEffect } from "react";

import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import { useFetch } from "../hooks/useFetch.js";

// async function fetchPlaces() {
//   setIsFetching(true);

//   try {
//     const places = await fetchAvailablePlaces();

//     navigator.geolocation.getCurrentPosition((position) => {
//       const sortedPlaces = sortPlacesByDistance(
//         places,
//         position.coords.latitude,
//         position.coords.longitude
//       );
//       setAvailablePlaces(sortedPlaces);
//       setIsFetching(false);
//     });
//   } catch (error) {
//     setError({
//       message:
//         error.message || 'Could not fetch places, please try again later.',
//     });
//     setIsFetching(false);
//   }

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    fetchedData: availablePlaces,
    error,
    setFetcheData,
    isFetching,
  } = useFetch(fetchAvailablePlaces, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
