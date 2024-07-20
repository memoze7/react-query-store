import {useQuery} from "@tanstack/react-query";
import {Product} from "../interfaces/product.ts";
import {getProductById} from "../services/actions.ts";

interface Options {
  id: number;
}

export const useProduct = ({id}: Options) => {
  const {data: product , isLoading, error, isError, isFetching} = useQuery<Product>({
    queryKey: ["products", {id}],
    queryFn: () => getProductById(id),
    staleTime: 1000 * 60 * 60,
  });

  return {
    product,
    error,
    isError,
    isFetching,
    isLoading,
  };
}
