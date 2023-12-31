import * as api from "../Api/ProductsFurnitures/ProductsFurnitures";
import { useQuery } from "@tanstack/react-query";

export const useAllProductsFurnitures = () => {
  return useQuery({
    queryKey: ["ProductsFurnitures"],
    queryFn: api.getAllProductsFurnitures,
  });
};

export const useProductFurniture = (id) => {
  return useQuery({
  queryKey: ["ProductsFurniture", id],
  queryFn: () => api.getProductFurniture(id),
});
};
