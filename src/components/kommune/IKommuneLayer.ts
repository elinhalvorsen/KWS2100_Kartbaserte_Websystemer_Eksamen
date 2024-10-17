import { Feature } from "ol";
import { Polygon } from "ol/geom";
export type KommuneFeature = {
  getProperties(): KommuneProperties;
} & Feature<Polygon>;
export interface KommuneProperties {
  navn: { rekkefolge: string; sprak: string; navn: string }[];
}
