import React, { useEffect, useState } from "react";
import VectorLayer from "ol/layer/Vector";
import { Feature } from "ol";
import VectorSource from "ol/source/Vector";
import { Point } from "ol/geom";
import Overlay from "ol/Overlay";
import { Style, Fill, RegularShape, Text, Stroke } from "ol/style";
import getLineColor from "../vehicle/GetLineColor";

interface VehicleData {
  line: {
    publicCode: string;
    lineName: string;
  };
  lastUpdated?: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

interface Props {
  map: any;
  vehicles: VehicleData[] | undefined;
  id: string;
  setSelectedVehicle: React.Dispatch<React.SetStateAction<VehicleData | null>>;
}

const VehicleLayerComponent: React.FC<Props> = ({
  map,
  vehicles,
  id,
  setSelectedVehicle,
}) => {
  const [overlay, setOverlay] = useState<Overlay | null>(null);

  useEffect(() => {
    if (!map || !vehicles) return;

    const vehicleSource = new VectorSource();

    vehicles.forEach((vehicle) => {
      const { latitude, longitude } = vehicle.location;
      const point = new Point([longitude, latitude]);
      const feature = new Feature({
        geometry: point,
        lineRef: id,
        vehicleData: vehicle,
      });
      vehicleSource.addFeature(feature);
    });

    const vehicleLayer = new VectorLayer({
      source: vehicleSource,
      style: function (feature) {
        const vehicleData: VehicleData = feature.get("vehicleData");
        const lineColor = getLineColor(id);
        const publicCode = vehicleData.line.publicCode;

        return [
          new Style({
            image: new RegularShape({
              radius: 5,
              points: 20,
              fill: new Fill({ color: lineColor }),
            }),
            text: new Text({
              text: `${publicCode}`,
              offsetY: -15,
              font: "12px Arial, sans-serif",
              fill: new Fill({ color: "black" }),
              stroke: new Stroke({ color: "white", width: 2 }),
            }),
          }),
        ];
      },
    });

    map.addLayer(vehicleLayer);

    const overlayElement = document.createElement("div");
    overlayElement.className = "";
    overlayElement.style.backgroundColor = "white";
    overlayElement.style.borderRadius = "8px";
    overlayElement.style.padding = "6px";
    const vehicleOverlay = new Overlay({
      element: overlayElement,
      offset: [0, -10],
      positioning: "bottom-center",
    });
    setOverlay(vehicleOverlay);
    map.addOverlay(vehicleOverlay);

    map.on("pointermove", (event: { pixel: any }) => {
      const feature = map.forEachFeatureAtPixel(
        event.pixel,
        (feature: any) => feature,
      );
      if (feature) {
        const vehicleData: VehicleData = feature.get("vehicleData");
        const coordinates = feature.getGeometry().getCoordinates();
        vehicleOverlay.setPosition(coordinates);
        overlayElement.innerHTML = `
          <div>
            <p>${vehicleData.line.publicCode}: ${vehicleData.line.lineName}</p>
          </div>
        `;
      } else {
        vehicleOverlay.setPosition(undefined);
      }
    });

    return () => {
      map.removeLayer(vehicleLayer);
      map.removeOverlay(vehicleOverlay);
    };
  }, [map, vehicles, id]);

  return null;
};

export default VehicleLayerComponent;
