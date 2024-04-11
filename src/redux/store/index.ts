import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import servicesReducer from "../reducers/servicesListSlice"
import activeServiceReducer from "../reducers/activeServiceSlice"
import activeDetailsSlice from "../reducers/isActiveDetailsSlice"

import saga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        services: servicesReducer,
        activeService: activeServiceReducer,
        activeStatus: activeDetailsSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(saga)
