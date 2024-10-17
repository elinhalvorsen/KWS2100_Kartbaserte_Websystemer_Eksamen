import React, { useContext, useEffect, useState } from "react";
import { MapContext } from "../map/MapContext";
import ToogleCheckbox from "../../shared/ToogleCheckbox";
import { FeatureLike } from "ol/Feature";
import { Fill, Stroke, Style } from "ol/style";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import Text from "ol/style/Text";
import { MapBrowserEvent } from "ol";
import { KommuneFeature } from "./IKommuneLayer";

const KommuneLayerCheckbox = () => {
  const { map } = useContext(MapContext);
  const [checked, setChecked] = useState(false);
  const [activeFeature, setActiveFeature] = useState<KommuneFeature | null>(
    null
  );
  const [hoveredKommune, setHoveredKommune] = useState<string | null>(null);
  const [filterActive, setFilterActive] = useState(false); // Tilstanden for å spore om filteret er aktivt

  const kommuneStyle = (f: FeatureLike) => {
    const feature = f as KommuneFeature;
    return new Style({
      stroke: new Stroke({
        color: "white",
        width: 2,
      }),
      fill: new Fill({
        color: "rgba(255, 0, 0, 0.5)",
      }),
    });
  };

  const activeKommuneStyle = (f: FeatureLike) => {
    const feature = f as KommuneFeature;
    feature.getProperties();
    return new Style({
      stroke: new Stroke({
        color: "white",
        width: 2,
      }),
      fill: new Fill({
        color: "rgba(255, 255, 0, 0.1)",
      }),
    });
  };

  const KommuneLayer = new VectorLayer({
    className: "kommune",
    source: new VectorSource({
      url: "/KWS2100_Kartbaserte_Websystemer_Eksamen/kommuner.json",
      format: new GeoJSON(),
    }),
    style: kommuneStyle,
  });

  const handlePointerMove = (e: MapBrowserEvent<MouseEvent>) => {
    const feature: FeatureLike[] = [];
    map.forEachFeatureAtPixel(e.pixel, (f) => feature.push(f), {
      hitTolerance: 5,
      layerFilter: (l) => l === KommuneLayer,
    });
    if (feature.length === 1) {
      setActiveFeature(feature[0] as KommuneFeature);
      const kommune = feature[0].getProperties();
      setHoveredKommune(kommune.navn[0]?.navn || null);
    } else {
      setActiveFeature(null);
      setHoveredKommune(null);
    }
  };

  useEffect(() => {
    if (activeFeature) {
      activeFeature.setStyle(activeKommuneStyle);
    }
    return () => {
      if (activeFeature) {
        activeFeature.setStyle(activeKommuneStyle);
      }
    };
  }, [activeFeature]);

  useEffect(() => {
    if (map) {
      if (checked) {
        map.addLayer(KommuneLayer);
      } else {
        map.removeLayer(KommuneLayer);
      }
    }
    return () => {
      if (map && map.getLayers().getArray().includes(KommuneLayer)) {
        map.removeLayer(KommuneLayer);
      }
    };
  }, [map, checked]);

  useEffect(() => {
    if (checked) {
      map?.on("pointermove", handlePointerMove);
    } else {
      map?.un("pointermove", handlePointerMove);
    }
    return () => {
      map?.un("pointermove", handlePointerMove);
    };
  }, [map, checked]);

  // Endre tilstanden for å spore om filteret er aktivt når checkboxen endres
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    setFilterActive(e.target.checked); // Filteret er aktivt når checkboxen er krysset av
  };

  return (
    <div>
      <label>
        <ToogleCheckbox
          lableOn={"Vis "}
          lableOff={"Skjul "}
          title={"kommuner"}
          isChecked={checked}
          onChange={handleFilterChange} // Endre håndteringsfunksjonen for å inkludere endring av filtertilstanden
        />
      </label>
      {filterActive &&
        hoveredKommune && ( // Betinget visning basert på om filteret er aktivt
          <p>
            Kommune du befinner deg i: <b>{hoveredKommune}</b>
          </p>
        )}
    </div>
  );
};

export default KommuneLayerCheckbox;
