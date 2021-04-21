import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'

type DialogsType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

const dialogsData: Array<DialogsType> = [
    { id: 1, name: "Tural" },
    { id: 2, name: "Rahib" },
    { id: 3, name: "Meherrem" },
    { id: 4, name: "Emil" },
    { id: 5, name: "Seymur" },
]

const messagesData: Array<MessageType> = [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Where are you from?" },
    { id: 4, message: "Where is your cat?" },
    { id: 5, message: "Your cat is so sweet" },
]

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {
                    dialogsData.map((e) => {
                        return <DialogsItem name={e.name} id={e.id} />
                    })
                }
            </div>

            <div className={s.messages}>
                {
                    messagesData.map((e) => {
                        return <Message id = {e.id} message = { e.message } />})
                }


            </div>
        </div>
    )
}

export default Dialogs
