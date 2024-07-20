import {productsApi} from "../api/productsApi.ts";
import {Product} from "../interfaces/product.ts";

interface GetProductsParams {
  filterKey?: string;
}

export const getProducts = async ({ filterKey }: GetProductsParams):Promise<Product[]> => {

  const params = new URLSearchParams();
  if (filterKey) {
    params.append('category', filterKey);
  }

  const {data} = await productsApi.get<Product[]>("/products", { params})

  return data

}

export const getProductById = async (id: number):Promise<Product> => {
  const {data} = await productsApi.get<Product>(`/products/${id}`)
  return data
}
