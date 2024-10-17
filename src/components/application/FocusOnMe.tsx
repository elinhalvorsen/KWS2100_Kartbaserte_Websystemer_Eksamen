import React from "react";
import { map } from "../map/MapContext";
const FocusOnMe = () => {
  const handleFocusUser = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      map.getView().animate({
        center: [longitude, latitude],
        zoom: 15,
      });
    });
  };

  return (
    <button id="foe-btn" className="btn text-white " onClick={handleFocusUser}>
      Her er du
    </button>
  );
};
export default FocusOnMe;
