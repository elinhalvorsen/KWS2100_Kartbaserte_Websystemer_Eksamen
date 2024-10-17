import React, { useState, useEffect } from "react";
import RailwayStation from "../components/railway/RailwayStationCheckbox";
import VehiclePoints from "../components/vehicle/VehiclePoints";

import RailwayStationAside from "../components/railway/RailwayStationAside";
import { RailwayProperties } from "../components/railway/IRailwayStation";

import SubTitleAside from "./title/SubTitleAside";
import TitleAside from "./title/TitleAside";

import KommuneLayerCheckbox from "../components/kommune/KommuneLayerCheckbox";
import SavedRailwayStation from "../components/railway/SavedRailwayStation";

const FilterAsideBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedRailway, setSelectedRailway] = useState<RailwayProperties>();

  const handleClick = () => setIsVisible(false);
  const handleToggleAside = () => setIsVisible(!isVisible);

  return (
    <>
      {!isVisible && (
        <button
          id="toogle-btn"
          className="btn btn-toggle-aside mt-2"
          onClick={handleToggleAside}
        >
          <b>☰</b>
        </button>
      )}
      {isVisible && (
        <aside className="rounded-3 shadow p-2 mt-2">
          <button
            id="close-btn"
            className="btn btn-close"
            onClick={handleClick}
          ></button>
          <div className="tab-outer-container">
            <ul className="nav nav-tabs" id="myTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="tab1-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab1"
                  type="button"
                  role="tab"
                  aria-controls="tab1"
                  aria-selected="true"
                >
                  Transport
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="tab2-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab2"
                  type="button"
                  role="tab"
                  aria-controls="tab2"
                  aria-selected="false"
                >
                  Plan
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="tab3-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab3"
                  type="button"
                  role="tab"
                  aria-controls="tab3"
                  aria-selected="false"
                >
                  Reisen din
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="tab1"
              role="tabpanel"
              aria-labelledby="tab1-tab"
            >
              <TitleAside title="Filtrer Kart" />
              <p className="text-center">Velg hva du ønsker å se på kartet</p>

              <div className="bg-white rounded-3 p-2 mt-2">
                <SubTitleAside title={"Transportmiddel"} />
                <hr />
                <VehiclePoints />
                <RailwayStation setSelectedRailway={setSelectedRailway} />
              </div>
              <div className="bg-white rounded-3">
                <p className="text-center mt-2">Kommuner filtrene ligger i</p>
                <hr />
                <KommuneLayerCheckbox />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tab2"
              role="tabpanel"
              aria-labelledby="tab2-tab"
            >
              <TitleAside title="Planlegg din reise" />
              <p className="text-center">
                Trykk på en stasjon du ønsker å legge til
              </p>
              {selectedRailway && (
                <RailwayStationAside selectedRailway={selectedRailway} />
              )}
            </div>
            <div
              className="tab-pane fade"
              id="tab3"
              role="tabpanel"
              aria-labelledby="tab3-tab"
            >
              <TitleAside title="Se din reise" />
              <p className="text-center">Her er reisen din:</p>
              <SavedRailwayStation />
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default FilterAsideBar;
