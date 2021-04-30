import store, { StoreType } from '../../redux/store'
import { addNewBodyAC, changeNewBodyAC } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'


type DialogsContainerTypes = {
    store: StoreType
}

const mapStateToProps = (state:AppStateType) => {
    return {
        dialogsPage: state.dialogPage
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(changeNewBodyAC(body))
        },
        addMessageItem: () => {
            dispatch(addNewBodyAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer









// import React, { ChangeEvent } from 'react'
// import { connect } from 'react-redux'
// import { addNewBodyAC, changeNewBodyAC } from '../../redux/dialogs-reducer'
// import Dialogs from './Dialogs'



// const addMessageItem = () => {
//     props.dispatch(addNewBodyAC(props.newMessageBody))
// }

// const newMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//     props.dispatch(changeNewBodyAC(e.currentTarget.value))
// }

// const mapStateToProps = (this.state.) => {
//     return {

//     }
// }
// const mapDispatchToProps = () => {
//     return {

//     }
// }

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

// export default DialogsContainer
