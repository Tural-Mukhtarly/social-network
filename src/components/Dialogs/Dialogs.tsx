import React, { ChangeEvent } from 'react'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import { StoreType } from '../../redux/store'
import { DialogsType } from '../../redux/dialogs-reducer'


type DialogsPropsTypes = {
    store: StoreType
    addMessageItem: () => void
    updateNewMessageBody: (body: string) => void
    dialogsPage: DialogsType
}

function Dialogs(props: DialogsPropsTypes) {
    const state = props.store.getState().dialogsPage

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
                    state.dialogsData.map((e) => {
                        return <DialogsItem name={e.name} id={e.id} />
                    })
                }
            </div>

            <div className={s.messages}>
                {
                    state.messagesData.map((e) => {
                        return <Message id={e.id} message={e.message} />
                    })
                }


            </div>
            <textarea value={state.newMessageBody} onChange={newMessageChangeHandler}></textarea>
            <button onClick={addMessageItem}>Send</button>

        </div>
    )
}

export default Dialogs
