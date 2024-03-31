import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import ErrorLog from "./ErrorLog.jsx";

import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  // TODO : Fetch Places Data with connect backend
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortPlaces);
        });
      } catch (error) {
        setError({
          message: error.message || "could not fetch places, try againg later",
        });
      } finally {
        setIsFetching(false);
      }
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <ErrorLog title={"An Error Occured"} message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText={"fetch Places Data..."}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
