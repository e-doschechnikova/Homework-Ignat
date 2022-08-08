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


export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
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

export const SortPeopleAC = (payload: string): SortPeopleAT => {
    return {
        type: "sort", payload
    }

}

export const CheckPeopleAC = (payload: number): CheckPeopleAT => {
    return {
        type: "check", payload
    }
}