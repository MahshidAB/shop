import * as api from "../Api/Slider";
import { useQuery } from "@tanstack/react-query";

export const useSlider = () => {
    return useQuery({
      queryKey: ["Slider"],
      queryFn: api.getSlider,
    });
  };