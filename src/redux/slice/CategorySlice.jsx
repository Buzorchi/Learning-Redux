// import React from 'react'

// const CategorySlice = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default CategorySlice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const getStoredData = () =>{
    const storedData = localStorage.getItem('categoryData');
    return storedData ? JSON.parse(storedData) : [];
};

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    try {
        const response = await axios.get('https://dummyjson.com/products/categories')
        const categories = response.data;
        console.log(categories)
        localStorage.setItem('categoryData', JSON.stringify(categories));

        return categories;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
});

const CategorySlice = createSlice({
    name: 'categories',
    initialState: {
        items: getStoredData(),
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategories.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
        })
        .addCase(fetchCategories.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        });
    },
});

export default CategorySlice.reducer;
