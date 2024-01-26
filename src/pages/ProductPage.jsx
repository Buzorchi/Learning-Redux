import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slice/ProductSlice';
import { Link } from 'react-router-dom';

const ProductPage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);
  
    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchProducts());
      }
    }, [dispatch, status]);
  
    if (status === 'loading') {
      return <div>Loading...</div>;
    }
  
    if (status === 'failed') {
      return <div>Error: {error}</div>;
    }
  console.log(products)
    return (
      <div>
        <h1>Redux Toolkit App</h1>
        <ul>
          {products.products?.map((product) => (
            <li key={product.id}>
              <Link to={`/product/${product.id}`} className='link'>{product.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default ProductPage
