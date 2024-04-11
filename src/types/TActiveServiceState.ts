import { TActiveServiceObj } from "./TActiveServiceObj"

export type TActiveServiceState = {
    service: null | TActiveServiceObj,
    isLoading: boolean,
    error: null | string
}