import {useProduct} from "../hooks/useProduct.tsx";
import {useParams} from "react-router-dom";
import {ProductCard} from "../components/ProductCard.tsx";
import {useEffect} from "react";

export const ProductById = () => {

  const {id} = useParams();

  const { product, isLoading} = useProduct({ id: +id! });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={'flex-col'}>
      <h1 className={'text-2xl font-bold'}>Producto</h1>
      {isLoading && <p>Cargando...</p>}

      {product && <ProductCard product={product} fullDescription={true}/> }
    </div>
  )

}