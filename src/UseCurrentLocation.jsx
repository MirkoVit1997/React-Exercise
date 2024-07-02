import { useState } from "react";

export function UseCurrentLocation() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function getUserPosition() {
    if (!navigator.geolocation) {
      setError("errore");
    } else {
      setLoading(true);
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
      setLoading(false);
    }
  }

  return {
    onPosition: getUserPosition,
    position,
    error,
    loading,
  };
}
