const SET_IS_LOADING = "SET-IS-LOADING"

export type LoadingType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingReducerActionType): LoadingType => { // fix any
    switch (action.type) {
        case SET_IS_LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export type LoadingReducerActionType = {
    type: "SET-IS-LOADING",
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingReducerActionType => {
    return {type: SET_IS_LOADING, isLoading}
} // fix any