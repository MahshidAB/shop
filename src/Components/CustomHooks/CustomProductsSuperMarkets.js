import * as api from "../Api/ProductsSuperMarkets/ProductsSuperMarkets";
import { useQuery } from "@tanstack/react-query";

export const useAllProductsSuperMarkets = () => {
  return useQuery({
    queryKey: ["ProductsSuperMarkets"],
    queryFn: api.getAllProductsSuperMarkets,
  });
};

export const useProductSuperMarket = (id) => {
  return useQuery({
  queryKey: ["ProductsSuperMarket", id],
  queryFn: () => api.getProductSuperMarket(id),
});
};