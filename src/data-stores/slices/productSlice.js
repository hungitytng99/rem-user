import { createSlice } from "@reduxjs/toolkit";

// export const listProductBySubCategoryName = createAsyncThunk(
//     'product/listProductBySubCategoryName',
//     async (requestParams) => {
//         const response = await productService.listProductBySubCategoryName(requestParams)
//         return response.data
//     }
// )
const productSlice = createSlice({
    name: "product",
    initialState: {
        current: [],
        loading: false,
        error: ''
    },
    reducers: {
        addProductWithCategory(state, action) {
            state.current = action.payload;
            return state;

        },
        updateProductWithCategory(state, action){
            state.current = action.payload;
            return state;
        }
    },
})

const { actions, reducer: productReducer } = productSlice;
export const { addProductWithCategory, updateProductWithCategory } = actions;
export default productReducer;