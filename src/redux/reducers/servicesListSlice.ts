import { createSlice } from "@reduxjs/toolkit";

import { TServicesListState } from "../../types/TServicesListState";

const initialState: TServicesListState = {
    list: [],
    isLoading: false,
    error: null,
}

export const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        runLoadingServices: (state) => {
            state.isLoading = true;
            state.error = null;
            state.list = [];
        },
        loadingServicesSuccess: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.list = action.payload;
        },
        loadingServicesFailure: (state, action) => {
            state.isLoading = false;
            state.list = [];
            state.error = action.payload;
        }
    },
})

export const {
  runLoadingServices,
  loadingServicesSuccess,
  loadingServicesFailure
} = servicesSlice.actions;

export default servicesSlice.reducer;
