import {
    GET_SERVICES_LIST,
    GET_SERVICE_DETAILS
} from './actionsType'

export const getServicesList = () => ({
    type: GET_SERVICES_LIST
})

export const getServiceDetails = (id: string) => ({
type: GET_SERVICE_DETAILS,
payload: { id },
})
