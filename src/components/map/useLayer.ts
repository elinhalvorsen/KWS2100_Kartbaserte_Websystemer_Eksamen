import { useContext, useEffect } from "react";
import { MapContext } from "./MapContext";
import Layer from "ol/layer/Layer";
const useLayer = (layer: Layer, checked: boolean) => {
  const { setLayers } = useContext(MapContext);

  useEffect(() => {
    if (checked) {
      setLayers((old) => [...old, layer]);
    }
    return () => setLayers((old) => old.filter((l) => l !== layer));
  }, [checked]);
};
export default useLayer;
