import React from "react";
import ReactDom from "react-dom/client";
import MapApplication from "./components/application/MapApplication";

import "./main.css";
import "ol/ol.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
ReactDom.createRoot(document.getElementById("root")!).render(
  <MapApplication />,
);
