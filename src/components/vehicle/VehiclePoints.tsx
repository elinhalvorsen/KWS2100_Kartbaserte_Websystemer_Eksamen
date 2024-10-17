import React, { useContext, useEffect, useState } from "react";
import { MapContext } from "../map/MapContext";
import { useQuery } from "@apollo/client";
import ApiClient from "../../graphql/ApiClient";
import {
  loadOSTVehicles,
  loadNSBVehicles,
  loadVYBVehicles,
  loadVYXVehicles,
} from "../../graphql/Queries";
import VehicleLayerComponent from "../layers/VehicleLayerComponent";

interface VehicleLocation {
  latitude: number;
  longitude: number;
}

interface VehicleData {
  line: {
    publicCode: string;
    lineName: string;
  };
  lastUpdated?: string;
  location: VehicleLocation;
}

const VehiclePoints: React.FC = () => {
  const [showVyLayer, setShowVyLayer] = useState<boolean>(
    localStorage.getItem("showVyLayer") === "true",
  );
  const [showNSBLayer, setShowNSBLayer] = useState<boolean>(
    localStorage.getItem("showNSBLayer") === "true",
  );

  const [selectedVehicle, setSelectedVehicle] = useState<VehicleData | null>(
    null,
  );

  const { map } = useContext(MapContext);

  const {
    loading: ostLoading,
    data: ostData,
    refetch: ostRefetch,
  } = useQuery(loadOSTVehicles, { client: ApiClient });
  const {
    loading: nsbLoading,
    data: nsbData,
    refetch: nsbRefetch,
  } = useQuery(loadNSBVehicles, { client: ApiClient });
  const {
    loading: vyLoading,
    data: vyData,
    refetch: vyRefetch,
  } = useQuery(loadVYBVehicles, { client: ApiClient });
  const {
    loading: vyxLoading,
    data: vyxData,
    refetch: vyxRefetch,
  } = useQuery(loadVYXVehicles, { client: ApiClient });

  useEffect(() => {
    let intervalId: number;

    if (showNSBLayer || showVyLayer) {
      intervalId = window.setInterval(() => {
        if (showNSBLayer && nsbData && nsbData.vehicles) {
          nsbRefetch();
        }
        if (
          showVyLayer &&
          vyData &&
          vyxData &&
          vyData.vehicles &&
          vyxData.vehicles
        ) {
          vyRefetch();
          vyxRefetch();
        }
      }, 15000);
    }

    return () => clearInterval(intervalId);
  }, [
    showVyLayer,
    showNSBLayer,
    nsbData,
    vyData,
    vyxData,
    nsbRefetch,
    vyRefetch,
    vyxRefetch,
  ]);

  useEffect(() => {
    localStorage.setItem("showVyLayer", JSON.stringify(showVyLayer));
    localStorage.setItem("showNSBLayer", JSON.stringify(showNSBLayer));
  }, [showVyLayer, showNSBLayer]);

  useEffect(() => {
    if (selectedVehicle === null) return;

    localStorage.setItem("selectedVehicle", JSON.stringify(selectedVehicle));
  }, [selectedVehicle]);

  return (
    <div>
      {/* Checkbox for visning av busser*/}
      <div className="bg-white rounded mt-3 form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={showVyLayer}
          onChange={() => setShowVyLayer(!showVyLayer)}
        />
        <label className="form-check-label">Busser</label>
      </div>

      {/*Checkbox for visning av tog*/}
      <div className="bg-white rounded mt-3 form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={showNSBLayer}
          onChange={() => setShowNSBLayer(!showNSBLayer)}
        />
        <label className="form-check-label">Tog</label>
      </div>
      {/* Detaljer om valgt kjøretøy */}
      {selectedVehicle && (
        <div className="vehicle-details">
          <h2>Selected Vehicle Details</h2>
          <p>Linje: {selectedVehicle.line.publicCode}</p>
          <p>Navn: {selectedVehicle.line.lineName}</p>
          <p>Sist oppdatert: {selectedVehicle.lastUpdated}</p>
        </div>
      )}
      {map && showNSBLayer && nsbData && nsbData.vehicles && (
        <VehicleLayerComponent
          map={map}
          vehicles={nsbData.vehicles}
          id="NSB"
          setSelectedVehicle={setSelectedVehicle}
        />
      )}
      {map && showVyLayer && vyData && vyData.vehicles && (
        <VehicleLayerComponent
          map={map}
          vehicles={vyData.vehicles}
          id="VY"
          setSelectedVehicle={setSelectedVehicle}
        />
      )}
      {map && showVyLayer && vyxData && vyxData.vehicles && (
        <VehicleLayerComponent
          map={map}
          vehicles={vyxData.vehicles}
          id="VYX"
          setSelectedVehicle={setSelectedVehicle}
        />
      )}
    </div>
  );
};
export default VehiclePoints;
