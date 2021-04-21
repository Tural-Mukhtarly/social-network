import React from 'react'
import s from './Dialogs.module.css'


function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    Tural
                </div>
                <div className={s.dialog}>
                    Olga
                </div>
                <div className={s.dialog}>
                    Rahib
                </div>
                <div className={s.dialog}>
                    Maqa
                </div>
                <div className={s.dialog}>
                    Emil
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
