import Feature from "ol/Feature";
import { Point } from "ol/geom";

export type RailwayFeature = {
  getProperties(): RailwayProperties;
} & Feature<Point>;

export interface RailwayProperties {
  oppdatdato: string;
  objtype: string;
  navn: string;
}
