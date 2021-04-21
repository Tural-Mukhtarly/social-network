import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import { DialogsType, MessageType } from '../../redux/state'


type DialogsTypes = {
    dialogsData: Array<DialogsType>
    messagesData: Array<MessageType>
}

function Dialogs(props: DialogsTypes) {
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
        </div>
    )
}

export default Dialogs
