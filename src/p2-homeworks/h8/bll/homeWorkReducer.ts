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
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                if (a.name < b.name) return -1
                else return 0
            })
            // need to fix
            return action.payload === "up" ? newState : newState.reverse()
        }
        case 'check': {
            // need to fix
            return state.filter(age => age.age >= action.payload)
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