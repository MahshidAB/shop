import * as api from "../Api/SampleProductsApi";
import { useQuery } from "@tanstack/react-query";

export const useAllSampleProducts = () => {
  return useQuery({
    queryKey: ["SampleProducts"],
    queryFn: api.getAllSampleProducts,
  });
};

export const useSampleProduct = (id) => {
    return useQuery({
    queryKey: ["SampleProduct", id],
    queryFn: () => api.getSampleProduct(id),
  });
};
