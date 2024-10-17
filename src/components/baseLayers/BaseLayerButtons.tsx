import React, { useContext, useState } from "react";
import TileLayer from "ol/layer/Tile";
import { OSM, StadiaMaps } from "ol/source";
import { MapContext } from "../map/MapContext";

const BaseLayerButtons = () => {
  const { setBaseLayer } = useContext(MapContext);
  // useState for å illustrere for brukeren hvilke av kartene som er valgt
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const STADIA_MAPS_API_KEY = "65977d62-7840-4412-aca7-480a96186f0c";
  const baseLayerOptions = [
    {
      id: "osm",
      name: "Open Street Map",
      layer: new TileLayer({ source: new OSM() }),
    },
    {
      id: "stadia",
      name: "Stadia",
      layer: new TileLayer({
        source: new StadiaMaps({
          layer: "outdoors",
          apiKey: STADIA_MAPS_API_KEY,
        }),
      }),
    },
    {
      id: "stadia_dark",
      name: "Stadia Dark",
      layer: new TileLayer({
        source: new StadiaMaps({
          layer: "alidade_smooth_dark",
          apiKey: STADIA_MAPS_API_KEY,
        }),
      }),
    },
  ];
  const handleMapClick = (index: number) => {
    const selectedLayer = baseLayerOptions[index].layer;
    setBaseLayer(selectedLayer);
    setActiveIndex(index);
  };

  return (
    <>
      <div className="d-flex justify-content-end gap-2">
        {baseLayerOptions.map((option, index) => (
          <button
            key={option.id}
            onClick={() => handleMapClick(index)}
            className={`btn ${activeIndex === index ? "btn-success" : "btn-secondary"}`}
          >
            {option.name}
          </button>
        ))}
      </div>
    </>
  );
};
export default BaseLayerButtons;
