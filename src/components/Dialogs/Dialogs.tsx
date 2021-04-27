import React, { ChangeEvent } from 'react'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import { ActionTypes, DialogsType, MessageType } from '../../redux/store'
import { addNewBodyAC, changeNewBodyAC } from '../../redux/dialogs-reducer'


type DialogsTypes = {
    dialogsData: Array<DialogsType>
    messagesData: Array<MessageType>
    newMessageBody: string
    dispatch: (action: ActionTypes) => void
}

function Dialogs(props: DialogsTypes) {

    const addMessageItem = () => {
        props.dispatch(addNewBodyAC(props.newMessageBody))
    }

    const newMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewBodyAC(e.currentTarget.value))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {
                    props.dialogsData.map((e) => {
                        return <DialogsItem name={e.name} id={e.id} />
                    })
                }
            </div>

            <div className={s.messages}>
                {
                    props.messagesData.map((e) => {
                        return <Message id={e.id} message={e.message} />
                    })
                }


            </div>
            <textarea value={props.newMessageBody} onChange={newMessageChangeHandler}></textarea>
            <button onClick={addMessageItem}>Send</button>

        </div>
    )
}

export default Dialogs
