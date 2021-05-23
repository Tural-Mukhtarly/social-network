export type setUserDataACtype = ReturnType<typeof setAuthUserDataAC>

const initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false
}

export type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserDataAC = (userID: number, email: string, login: string) => {
    return {
        type: "SET-USER-DATA",
        userID: userID,
        email: email,
        login: login
    } as const
}


export default authReducer