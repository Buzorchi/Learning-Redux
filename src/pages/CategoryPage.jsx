import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../redux/slice/CategorySlice';

const CategoryPage = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.items);
    const status = useSelector((state) => state.categories.status);
    const error = useSelector((state) => state.categories.error)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCategories());
        }
    }, [dispatch, status]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>
    }
    console.log(categories)
  return (
    <div>
      <h1>Category of Products</h1>
      <ul>
        {categories?.map((category) => (
            <li key={category} >{category.charAt(0).toUpperCase() + category.slice(1)}</li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryPage
