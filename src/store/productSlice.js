import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    data: [],
    status: "Idle"
};


// For Api Manually
// export const getProducts = () => {
//     return (
//         async function getProductsThunk(dispatch, getState) {
//             await axios.get("https://fakestoreapi.com/products")
//                 .then((res) => {
//                     dispatch(fetchProducts(res.data))
//                 })
//                 .catch((error) => error.message)
//         }
//     )
// }

// For Api using createAsyncThunk
export const getProducts = createAsyncThunk("get/products", async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data; // Return the data
    } catch (error) {
        throw error; // Rethrow the error
    }
});


const productSlice = createSlice({
    name: "products",
    initialState,
    // reducers: {
    //     fetchProducts(state, action) {
    //         state.data = action.payload
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.status = "Loading"
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = "Idle"

        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.status = "Error"

        })
    }
})

export default productSlice.reducer;
export const { fetchProducts } = productSlice.actions;