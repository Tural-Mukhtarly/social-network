
export type DialogsType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type PostDataType = {
    id: number
    post: string
    likesCount: number
}

type DialogsPageType = {
    dialogsData: Array<DialogsType>
    messagesData: Array<MessageType>
    newMessageBody: string
}

type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebarPage: SidebarType
}


export type StoreType = {
    _state: RootStateType
    changeNewText: (newText: string) => void
    addPost: (postNew: string) => void
    _renderTree: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}
type AddPostActionType = ReturnType<typeof addPostAC>
type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>
type ChangeNewBodyActionType = ReturnType<typeof changeNewBodyAC>
type AddNewBodyActionType = ReturnType<typeof addNewBodyAC>

export type ActionTypes = AddPostActionType | ChangeNewTextActionType | ChangeNewBodyActionType | AddNewBodyActionType

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
export const changeNewBodyAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const
}
export const addNewBodyAC = (newBody: string) => {
    return {
        type: "ADD-MESSAGE",
        newBody: newBody
    } as const
}

const store: StoreType = {
    _state: {
        dialogsPage: {
            dialogsData: [
                { id: 1, name: "Tural" },
                { id: 2, name: "Rahib" },
                { id: 3, name: "Meherrem" },
                { id: 4, name: "Emil" },
                { id: 5, name: "Seymur" },
            ],
            messagesData: [
                { id: 1, message: "Hello" },
                { id: 2, message: "How are you?" },
                { id: 3, message: "Where are you from?" },
                { id: 4, message: "Where is your cat?" },
                { id: 5, message: "Your cat is so sweet" },
            ],
            newMessageBody: "Send Message"
        },

        profilePage: {
            postData: [
                { id: 1, post: 'post', likesCount: 11 },
                { id: 2, post: 'post', likesCount: 12 },
                { id: 3, post: 'post', likesCount: 13 }
            ],
            newPostText: "Create Post"
        },
        sidebarPage: {}
    },
    changeNewText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._renderTree()
    },
    addPost(postNew: string) {
        const newPosts: PostDataType = {
            id: new Date().getTime(),
            post: postNew,
            likesCount: 67
        }
        this._state.profilePage.postData.push(newPosts)
        this._renderTree()
    },
    _renderTree() {
        console.log('');
    },
    subscribe(callback) {
        this._renderTree = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPosts: PostDataType = {
                id: new Date().getTime(),
                post: action.postNew,
                likesCount: 67
            }
            this._state.profilePage.postData.push(newPosts)
            this._renderTree()
        } else if (action.type === "CHANGE-NEW-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._renderTree()
        } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
            this._state.dialogsPage.newMessageBody = action.body
            this._renderTree()
        } else if (action.type === "ADD-MESSAGE") {
            const newMessage: MessageType = {
                id: new Date().getSeconds(),
                message: action.newBody
            }
            this._state.dialogsPage.messagesData.push(newMessage)
            this._renderTree()
        }
    }
}


export default store