import { RootStateType } from '../../redux/store'
import { addNewBodyAC, changeNewBodyAC } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'



const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogPage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(changeNewBodyAC(body))
        },
        addMessageItem: (newBody: string) => {
            dispatch(addNewBodyAC(newBody))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer

