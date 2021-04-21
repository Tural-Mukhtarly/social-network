import React from 'react'
import { NavLink } from 'react-router-dom'
import { DialogsType } from "../Dialogs"
import s from '../Dialogs.module.css'


type DialogsItemType = {
    id: number
    name: string
}

function DialogsItem(props: DialogsItemType) {
    return (
            <div className={s.dialog}>
                <NavLink to={"/dialogs/1"+ props.id }>{props.name}</NavLink>
            </div>
    )
}

export default DialogsItem
