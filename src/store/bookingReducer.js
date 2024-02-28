import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    address: '',
    zip: '',
    city: '',
    country: ''
};

const slice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setUpdateFormData: (state, action) => {
            return {
                ...state,
                ...action.payload
            };
        }
    }
})

export const {
    setUpdateFormData,
} = slice.actions;

export default slice.reducer;