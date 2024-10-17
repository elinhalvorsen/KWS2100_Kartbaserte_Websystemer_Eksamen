import React from "react";
import { RailwayProperties } from "./IRailwayStation";
import GeneratedAside from "../../shared/GeneratedAside";

interface IRailwayStation {
  selectedRailway: RailwayProperties;
}

const RailwayStationAside = ({ selectedRailway }: IRailwayStation) => {
  const { navn, objtype, oppdatdato } = selectedRailway;
  const content = {
    Navn: navn,
    Type: objtype,
    Oppdatdato: oppdatdato,
  };

  const handleSaveToLocalStorage = () => {
    localStorage.setItem("selectedRailway", JSON.stringify(selectedRailway));
    //alert("Jernbanestasjonen er lagret i local storage!");
  };

  return (
    <>
      <GeneratedAside title={"Jerbanestasjon"} content={content} />
      <button onClick={handleSaveToLocalStorage}>Lagre</button>
    </>
  );
};

export default RailwayStationAside;
