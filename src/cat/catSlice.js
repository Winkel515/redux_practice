import { createSlice } from "@reduxjs/toolkit";

const catSlice = createSlice({
    name: 'cat',
    initialState: {
        cats: [],
        loading: false
    },
    reducers: {
        retrieveCats: state => {
            state.loading = true;
        },
        retrieveCatsSuccess: (state, action) => {
            state.loading = false;
            state.cats = action.payload;
        },
        retrieveCatsFail: state => {
            state.loading = false;
        }
    }
});

export const {retrieveCatsFail, retrieveCatsSuccess, retrieveCats} = catSlice.actions;

export default catSlice.reducer;