import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { MapContext } from "../map/MapContext";
import { MapBrowserEvent } from "ol";
import { RailwayProperties } from "./IRailwayStation";
import { railwayLayer } from "../layers/RailwayLayer";

const RailwayStationCheckbox = ({
  setSelectedRailway,
}: {
  setSelectedRailway: Dispatch<SetStateAction<RailwayProperties | undefined>>;
}) => {
  const [showRailwayLayer, setShowRailwayLayer] = useState(false);
  const { map } = useContext(MapContext);

  const handleMapClick = useMemo(
    () => (e: MapBrowserEvent<MouseEvent>) => {
      const feature = map.forEachFeatureAtPixel(e.pixel, (f) => f, {
        layerFilter: (layer) => layer === railwayLayer,
        hitTolerance: 5,
      });
      setSelectedRailway(
        feature ? (feature.getProperties() as RailwayProperties) : undefined,
      );
    },
    [map],
  );

  useEffect(() => {
    if (map) {
      if (showRailwayLayer) {
        map.addLayer(railwayLayer);
        map.on("click", handleMapClick);
      } else {
        map.removeLayer(railwayLayer);
        map.un("click", handleMapClick);
        setSelectedRailway(undefined);
      }
    }
  }, [map, showRailwayLayer]);

  return (
    <>
      <div className="bg-white rounded mt-3 form-check ">
        <input
          className="form-check-input"
          type="checkbox"
          checked={showRailwayLayer}
          onChange={(e) => setShowRailwayLayer(e.target.checked)}
        />
        <label className="form-check-label">Jernbanestasjoner</label>
      </div>
    </>
  );
};

export default RailwayStationCheckbox;
