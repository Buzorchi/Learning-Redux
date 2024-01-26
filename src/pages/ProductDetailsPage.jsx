import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsId } from "../redux/slice/ProductSlice";

const ProductDetailsPage = () => {
  let { id } = useParams();

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProductsId(id));
    }
  }, [dispatch, status,id]);

  if (status === "loading") {
      return <div>Loading...</div>;
    }

    if (status === "failed") {
        return <div>Error: {error}</div>;
    }
    console.log(products);

    
    return (
        <div>
      <h1>Products Details</h1>
      {products && (
        <ul>
          <li>{products.id}</li>
          <li>{products.description}</li>
          <li>{products.brand}</li>
        </ul>
      )}
    </div>
  );
};

export default ProductDetailsPage;
