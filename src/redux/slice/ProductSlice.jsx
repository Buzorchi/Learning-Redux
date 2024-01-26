import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Retrieve data from local storage if available
const getStoredData = () => {
  const storedData = localStorage.getItem('productData');
  return storedData ? JSON.parse(storedData) : [];
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    const products = response.data;

    // Save the fetched data to local storage
    localStorage.setItem('productData', JSON.stringify(products));

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
});


export const fetchProductsId = createAsyncThunk('products/fetchProductsById', async (id) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    const products = response.data;

    // Save the fetched data to local storage
    localStorage.setItem('productData', JSON.stringify(products));

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
});

const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    items: getStoredData(), // Initialize with data from local storage
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

      builder
      .addCase(fetchProductsId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsId.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProductsId.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default ProductSlice.reducer;