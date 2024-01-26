import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slice/ProductSlice';
import categoryReducer from './slice/CategorySlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
  },
});

export default store;