import { MessageType } from './store';


export type ChangeNewBodyActionType = ReturnType<typeof changeNewBodyAC>
export type AddNewBodyActionType = ReturnType<typeof addNewBodyAC>

const initialState = {
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
}


const dialogsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessageType = {
                id: new Date().getSeconds(),
                message: action.newBody
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
export const addNewBodyAC = (newBody: string) => {
    return {
        type: "ADD-MESSAGE",
        newBody: newBody
    } as const
}


export default dialogsReducer;