import { addNewBodyAC, changeNewBodyAC } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { Dispatch } from 'redux'


const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
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

