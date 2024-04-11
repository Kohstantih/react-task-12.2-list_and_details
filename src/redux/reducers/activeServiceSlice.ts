import { createSlice } from "@reduxjs/toolkit";

import { TActiveServiceState } from "../../types/TActiveServiceState";

const initialState: TActiveServiceState = {
    service: null,
    isLoading: false,
    error: null
}

export const activeServiceSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        loadingActiveService: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        loadingActiveServiceSuccess: (state, action) => {
            state.isLoading = false;
            state.service = action.payload
        },
        loadingActiveServiceFailure: (state, action) => {
            state.isLoading = false;
            state.service = null;
            state.error = action.payload;
        },
        activeServiceReset: (state) => {
            state.service = null;
            state.isLoading = false;
            state.error = null;
        }
    },
})

export const {
    loadingActiveService,
    loadingActiveServiceSuccess,
    loadingActiveServiceFailure,
    activeServiceReset
  } = activeServiceSlice.actions;
  
  export default activeServiceSlice.reducer;
