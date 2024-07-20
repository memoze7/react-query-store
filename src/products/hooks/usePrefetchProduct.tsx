import {useQueryClient} from "@tanstack/react-query";
import {getProductById} from "../services/actions.ts";


export const usePrefetchProduct = () => {
  const queryClient = useQueryClient();

  return (id: number) => {
    queryClient.prefetchQuery({
      queryKey: ["products", {id}],
      queryFn: () => getProductById(id)
    });
  }


}
