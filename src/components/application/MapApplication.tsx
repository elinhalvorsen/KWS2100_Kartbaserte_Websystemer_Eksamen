import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import NavBar from "../../shared/NavBar";
import { MapContext, map } from "../map/MapContext";
import { Layer } from "ol/layer";
import FilterAsideBar from "../../shared/FilterAsideBar";

const MapApplication = () => {
  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [layers, setLayers] = useState<Layer[]>([
    new TileLayer({ source: new OSM() }),
  ]);

  const setBaseLayer = (layer: Layer) => {
    const baseLayer = map.getLayers().getArray()[0];
    map.getLayers().remove(baseLayer);
    map.getLayers().insertAt(0, layer);
  };

  useEffect(() => map.setLayers(layers), [layers]);
  useEffect(() => map.setTarget(mapRef.current), []);

  /*const vehicleLayer = VehiclePoints();
  useLayer(vehicleLayer, true);*/

  return (
    <MapContext.Provider value={{ map, setLayers, layers, setBaseLayer }}>
      <NavBar />
      <main>
        <div ref={mapRef}></div>
        <FilterAsideBar />
      </main>
    </MapContext.Provider>
  );
};
export default MapApplication;
