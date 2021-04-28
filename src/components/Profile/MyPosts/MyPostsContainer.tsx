import { StoreType } from '../../../redux/store'
import { addPostAC, changeNewTextAC } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'


type MyContainerPostTypes = {
    store: StoreType
}


const MyPostsContainer = (props: MyContainerPostTypes) => {
    let state = props.store.getState()

    const addPostItem = () => {
        props.store.dispatch(addPostAC(state.profilePage.newPostText))
    }

    const updateNewPostText = (text: string) => {
        const action = changeNewTextAC(text)
        props.store.dispatch(action)
    }
    return (
        <MyPosts
            postData={state.profilePage.postData}
            updateNewPostText={updateNewPostText}
            addPost={addPostItem}
            newPostText={state.profilePage.newPostText} />
    )
}
export default MyPostsContainer;