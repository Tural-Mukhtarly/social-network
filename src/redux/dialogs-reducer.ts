import { ActionTypes } from './store';

export type ChangeNewBodyActionType = ReturnType<typeof changeNewBodyAC>
export type AddNewBodyActionType = ReturnType<typeof addNewBodyAC>

export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}


const initialState = {
    dialogsData: [
        { id: 1, name: "Tural" },
        { id: 2, name: "Rahib" },
        { id: 3, name: "Meherrem" },
        { id: 4, name: "Emil" },
        { id: 5, name: "Seymur" },
    ] as Array<DialogsType>,

    messagesData: [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Where are you from?" },
        { id: 4, message: "Where is your cat?" },
        { id: 5, message: "Your cat is so sweet" },
    ] as Array<MessageType>,
    newMessageBody: "Send Message"
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes):InitialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessageType = {
                id: new Date().getSeconds(),
                message: state.newMessageBody
            }
            state.messagesData.push(newMessage)
            state.newMessageBody = ""
            return state
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body
            return state
        default:
            return state
    }

}

export const changeNewBodyAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const
}
export const addNewBodyAC = () => {
    return {
        type: "ADD-MESSAGE",

    } as const
}


export default dialogsReducer;