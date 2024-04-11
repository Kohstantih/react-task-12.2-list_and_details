import { createSlice } from "@reduxjs/toolkit";

const initialState: { isActive: boolean } = {
    isActive: false,
}

export const isActiveDetailsSlice = createSlice({
    name: 'deteils/isActive',
    initialState,
    reducers: {
        changeActiveStatus: (state) => {
            state.isActive = !state.isActive;
        }
    }
})

export const {
    changeActiveStatus,
} = isActiveDetailsSlice.actions;

export default isActiveDetailsSlice.reducer;
