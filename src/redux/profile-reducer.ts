import { ActionTypes } from './store';
export type AddPostActionType = ReturnType<typeof addPostAC>
export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>

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

    newPostText: "Create Post"
}
export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case "ADD-POST":
            const newPosts: PostDataType = {
                id: new Date().getTime(),
                post: state.newPostText,
                likesCount: 67
            }
            state.postData.push(newPosts)
            state.newPostText = ""
            return state
        case "CHANGE-NEW-TEXT":
            state.newPostText = action.newText
            return state
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

export default profileReducer;