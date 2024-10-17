import React from "react";
import BaseLayerButtons from "../components/baseLayers/BaseLayerButtons";
import FocusOnMe from "../components/application/FocusOnMe";
const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <h1 id="headline" className="text-center text-nowrap mt-1">
          Miljøbevisst Reise
        </h1>
        <div className="container-fluid justify-content-between">
          <div>
            <ul className="navbar-nav ms-auto">
              <FocusOnMe />
            </ul>
          </div>
          <div className="justify-content-between">
            <ul className="navbar-nav ms-auto">
              <BaseLayerButtons />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
