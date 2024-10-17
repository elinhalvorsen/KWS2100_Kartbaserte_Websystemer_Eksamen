import React, { useState, useEffect } from "react";
import GeneratedAside from "../../shared/GeneratedAside";

const SavedRailwayStation = () => {
  const [savedRailway, setSavedRailway] = useState(null);

  useEffect(() => {
    const storedRailways = localStorage.getItem("savedRailways");
    if (storedRailways) {
      setSavedRailway(JSON.parse(storedRailways));
    }
  }, []);

  if (!savedRailway) {
    return <p>Ingen jernbanestasjon er lagret i local storage.</p>;
  }

  const { navn, objtype, oppdatdato } = savedRailway;
  const content = {
    Navn: navn,
    Type: objtype,
    Oppdatdato: oppdatdato,
  };

  return <GeneratedAside title={"Lagret Jerbanestasjon"} content={content} />;
};

export default SavedRailwayStation;
