import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const dialogsData = [
    { id: 1, name: "Tural" },
    { id: 2, name: "Rahib" },
    { id: 3, name: "Meherrem" },
    { id: 4, name: "Emil" },
    { id: 5, name: "Seymur" },
]

const messagesData = [
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
                <div className={s.dialog + " " + s.active}>
                    <NavLink to="dialogs/1">Tural</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="dialogs/2">Olga</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="dialogs/3">Rahib</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="dialogs/4">Maqa</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="dialogs/5">Emil</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Where are you from</div>
                <div className={s.message}>Where is your cat</div>
                <div className={s.message}>Your cat is so sweet</div>
            </div>
        </div>
    )
}

export default Dialogs
