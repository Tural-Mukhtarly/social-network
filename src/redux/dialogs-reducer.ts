import { MessageType } from './state';


export type ChangeNewBodyActionType = ReturnType<typeof changeNewBodyAC>
export type AddNewBodyActionType = ReturnType<typeof addNewBodyAC>

const dialogsReducer = (state: any, action: any) => {
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