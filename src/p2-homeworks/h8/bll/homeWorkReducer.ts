import {UserType} from "../HW8";

type SortPeopleAT = {
    type: "sort",
    payload: string
}

type CheckPeopleAT = {
    type: 'check',
    payload: number
}

export type ActionType = SortPeopleAT | CheckPeopleAT


export const homeWorkReducer = (state: Array<UserType>, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            return state
        }
        case 'check': {
            // need to fix
            return state
        }
        default:
            return state
    }
}