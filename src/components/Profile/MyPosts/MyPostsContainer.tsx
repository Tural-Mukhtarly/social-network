import { addPostAC, changeNewTextAC } from '../../../redux/profile-reducer'
import { connect } from 'react-redux'
import MyPosts from './MyPosts'
import { AppStateType } from '../../../redux/redux-store'

const mapStateToProps = (state: AppStateType) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: string) => {
            const action = changeNewTextAC(text)
            dispatch(action)
        },
        addPost: (state: AppStateType) => {
            dispatch(addPostAC(state.profilePage.newPostText))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;