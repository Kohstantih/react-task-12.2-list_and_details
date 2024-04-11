import { TServicesListItem } from "./TServicesListItem";

export type TServicesListState = {
    list: TServicesListItem[],
    isLoading: boolean,
    error: null | string,
}