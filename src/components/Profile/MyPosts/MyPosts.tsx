import React, { ChangeEvent } from 'react'
import s from './MyPosts.module.css'
import Posts from './Posts/Posts'
import { ActionTypes, PostDataType } from '../../../redux/store'
import { addPostAC,changeNewTextAC } from '../../../redux/profile-reducer'


type MyPostsTypes = {
    postData: Array<PostDataType>
    addPost: (postNew: string) => void
    changeNewTextCallback: (newText: string) => void
    message: string
    dispatch: (action: ActionTypes) => void
}


const MyPosts = (props: MyPostsTypes) => {

    const addPostItem = () => {
        props.dispatch(addPostAC(props.message))
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewTextAC(e.currentTarget.value))
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.message} onChange={newTextChangeHandler} ></textarea>
                </div>
                <div>
                    <button onClick={addPostItem}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {
                    props.postData.map((e) => {
                        return <Posts id={e.id} post={e.post} likesCount={e.likesCount} />
                    })
                }


            </div>
        </div>
    )
}
export default MyPosts;