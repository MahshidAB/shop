import * as api from "../Api/ProductsCellPhones/ProductsCellPhones";
import { useQuery } from "@tanstack/react-query";

export const useAllProductsCellPhones = () => {
  return useQuery({
    queryKey: ["ProductsCellPhones"],
    queryFn: api.getAllProductsCellPhones,
  });
};

export const useProductCellPhone = (id) => {
  return useQuery({
  queryKey: ["ProductsCellPhone", id],
  queryFn: () => api.getProductCellPhone(id),
});
};
