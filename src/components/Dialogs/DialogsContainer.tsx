import { StoreType } from '../../redux/store'
import { addNewBodyAC, changeNewBodyAC } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'


type DialogsContainerTypes = {
    store: StoreType
}

function DialogsContainer(props: DialogsContainerTypes) {

    const state = props.store.getState().dialogsPage

    const addMessageItem = () => {
        props.store.dispatch(addNewBodyAC(state.newMessageBody))
    }

    const updateNewMessageBody = (body: string) => {
        props.store.dispatch(changeNewBodyAC(body))
    }
    return <Dialogs
        updateNewMessageBody={updateNewMessageBody}
        sendMessage={addMessageItem}
        dialogsPage={state}
        store={props.store}
    />
}

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
