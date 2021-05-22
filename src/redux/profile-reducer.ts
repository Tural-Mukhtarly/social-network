import { ActionTypes } from './store';
export type AddPostActionType = ReturnType<typeof addPostAC>
export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>
export type setUserProfileActionType = ReturnType<typeof setUserProfile>

export type PostDataType = {
    id: number
    post: string
    likesCount: number
}

const initialState = {
    postData: [
        { id: 1, post: 'post', likesCount: 11 },
        { id: 2, post: 'post', likesCount: 12 },
        { id: 3, post: 'post', likesCount: 13 }
    ] as Array<PostDataType>,

    newPostText: "Create Post",
    profile: null
}
export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostDataType = {
                id: new Date().getTime(),
                post: state.newPostText,
                likesCount: 67
            };
            let stateCopy = { ...state };
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = ""
            return stateCopy
        case "CHANGE-NEW-TEXT": {
            let stateCopy = { ...state }

            stateCopy.newPostText = action.newText
            return stateCopy
        }
        case "SET-USER-PROFILE":
            return { ...state, profile: action.profile }
        default:
            return state
    }
}


export const addPostAC = () => {
    return {
        type: "ADD-POST",
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}
export const setUserProfile = (profile: null) => {
    return {
        type: "SET-USER-PROFILE",
        profile: profile
    } as const
}

export default profileReducer;