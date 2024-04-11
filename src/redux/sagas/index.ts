import { call, put, spawn, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { GET_SERVICES_LIST, GET_SERVICE_DETAILS } from "../actions/actionsType";
import { loadingServicesFailure, loadingServicesSuccess, runLoadingServices } from "../reducers/servicesListSlice";
import { loadingActiveService, loadingActiveServiceFailure, loadingActiveServiceSuccess } from "../reducers/activeServiceSlice";

import fetchServicesList from "../fetches/fetchServicesList";
import fetchServiceDetails from "../fetches/fetchServiceDetails";

import { TServicesListItem } from "../../types/TServicesListItem";
import { TActiveServiceObj } from "../../types/TActiveServiceObj";

function *handleGetServicesList() {
    yield put(runLoadingServices());

    try {
        const data: TServicesListItem[] = yield call(fetchServicesList);
        yield put(loadingServicesSuccess(data));
    } catch (error: unknown) {
        if ( error instanceof Error) {
            const { message } = error;
            yield put(loadingServicesFailure(message));
        }        
    }
}

function* watchGetServicesListSaga() {
    yield takeLatest(GET_SERVICES_LIST, handleGetServicesList);
}

function *handleGetServiceDetails(action: PayloadAction<{ id: string}>) {
    yield put(loadingActiveService());

    try {
        const data: TActiveServiceObj = yield call(fetchServiceDetails, action.payload.id);
        yield put(loadingActiveServiceSuccess(data));
    } catch (error: unknown) {
        if ( error instanceof Error) {
            const { message } = error;
            yield put(loadingActiveServiceFailure(message));
        }        
    }
}

function* watchGetServiceDetails() {
    yield takeLatest(GET_SERVICE_DETAILS, handleGetServiceDetails)
}

export default function* saga() {
    yield spawn(watchGetServicesListSaga);
    yield spawn(watchGetServiceDetails);
}
