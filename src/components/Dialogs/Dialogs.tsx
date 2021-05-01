import React, { ChangeEvent } from 'react'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import { DialogsPageType, StoreType } from '../../redux/store'
import { DialogsType } from '../../redux/dialogs-reducer'


type DialogsPropsTypes = {
    addMessageItem: () => void
    updateNewMessageBody: (body: string) => void
    dialogsPage: DialogsPageType
}

function Dialogs(props: DialogsPropsTypes) {
    // const state = props.store.getState().dialogsPage

    const addMessageItem = () => {
        props.addMessageItem()
    }

    const newMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
        // props.store.dispatch(changeNewBodyAC(e.currentTarget.value))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {
                    props.dialogsPage.dialogsData.map((e) => {
                        return <DialogsItem key={e.id} name={e.name} id={e.id} />
                    })
                }
            </div>

            <div className={s.messages}>
                {
                    props.dialogsPage.messagesData.map((e) => {
                        return <Message key={e.id} id={e.id} message={e.message} />
                    })
                }


            </div>
            <textarea value={props.dialogsPage.newMessageBody} onChange={newMessageChangeHandler}></textarea>
            <button onClick={addMessageItem}>Send</button>

        </div>
    )
}

export default Dialogs
