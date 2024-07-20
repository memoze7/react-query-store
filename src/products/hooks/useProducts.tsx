import {useQuery} from "@tanstack/react-query";
import {Product} from "../interfaces/product.ts";
import {getProducts} from "../services/actions.ts";

interface Options {
  filterKey?: string;
}

export const useProducts = ({filterKey}: Options) => {
  const {data: products = [], isLoading, error, isError, isFetching} = useQuery<Product[]>({
    queryKey: ["products", {filterKey}],
    queryFn: () => getProducts({filterKey}),
    staleTime: 1000 * 60 * 60,
  });

  return {
    products,
    error,
    isError,
    isFetching,
    isLoading,
  };
}
