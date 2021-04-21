import React from 'react'
import s from '../Dialogs.module.css'


type MessageItemType = {
    id: number
    message: string
}

function Message(props: MessageItemType) {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

export default Message
