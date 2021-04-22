let renderTree = () => {
    console.log('121');
}

export const subscribe = (callback: () => void) => {
    renderTree = callback
}

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
}

type ProfilePageType = {
    postData: Array<PostDataType>
}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebarPage: SidebarType
}

export const state: RootStateType = {
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
        ]
    },

    profilePage: {
        postData: [
            { id: 1, post: 'post', likesCount: 11 },
            { id: 2, post: 'post', likesCount: 12 },
            { id: 3, post: 'post', likesCount: 13 }
        ]
    },
    sidebarPage: {}
}

export const addPost = (postNew: string) => {
    const newPosts: PostDataType = {
        id: 17,
        post: postNew,
        likesCount: 67
    }
    state.profilePage.postData.push(newPosts)
    renderTree()
}
