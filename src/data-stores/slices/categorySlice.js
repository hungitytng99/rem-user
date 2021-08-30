import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "category",
    initialState: {
        current: [],
        loading: false,
        error: ''
    },
    reducers: {
        addCategory(state, action) {
            state.current = action.payload;
            return state;
        },
    },
})

const { reducer: categoryReducer, actions } = productSlice;
export const { addCategory } = actions;
export default categoryReducer;