import React from 'react';
import { useSelector } from 'react-redux';

const StoreList = () => {
    // const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items.products);
    console.log(products)

   

  return (
    <div>
      <p>{products[0].title}</p>
    </div>
  )
}

export default StoreList
