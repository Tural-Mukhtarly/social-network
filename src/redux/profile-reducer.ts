import { PostDataType } from './state';
export type AddPostActionType = ReturnType<typeof addPostAC>
export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>

const initialState = {
    postData: [
        { id: 1, post: 'post', likesCount: 11 },
        { id: 2, post: 'post', likesCount: 12 },
        { id: 3, post: 'post', likesCount: 13 }
    ],
    newPostText: "Create Post"
}

const profileReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case "ADD-POST":
            const newPosts: PostDataType = {
                id: new Date().getTime(),
                post: action.postNew,
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

export const addPostAC = (postNew: string) => {
    return {
        type: "ADD-POST",
        postNew: postNew
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}

export default profileReducer;