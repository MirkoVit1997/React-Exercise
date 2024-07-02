import { UseCurrentLocation } from "./UseCurrentLocation";

export function Location() {
  const { onPosition, position, error, loading } = UseCurrentLocation();

  return (
    <div>
      <button onClick={onPosition}>Position</button>
      {position && (
        <h3>
          Latitude {position.latitude} <hr />
          Longitude: {position.longitude}
        </h3>
      )}
      {error && <p>{error}</p>}
      {loading && <p>loading...</p>}
    </div>
  );
}
