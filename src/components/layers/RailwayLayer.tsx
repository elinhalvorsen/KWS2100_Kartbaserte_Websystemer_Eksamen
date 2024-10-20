import { GeoJSON } from "ol/format";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Circle, Fill, Stroke, Style } from "ol/style";

export const railwayLayer = new VectorLayer({
  className: "railway",
  source: new VectorSource({
    url: "/KWS2100_Kartbaserte_Websystemer_Eksamen/jernbanestasjoner.geojson",
    format: new GeoJSON(),
  }),
  style: new Style({
    image: new Circle({
      radius: 7,
      fill: new Fill({
        color: "green",
      }),
      stroke: new Stroke({
        color: "white",
        width: 2,
      }),
    }),
  }),
});
