import React, { ChangeEvent } from 'react'
import s from './MyPosts.module.css'
import Posts from './Posts/Posts'
import { PostDataType } from '../../../redux/store'


type MyPostsTypes = {
    postData: Array<PostDataType>
    addPost: () => void
    updateNewPostText: (text: string) => void
    newPostText: string
}

const MyPosts = (props: MyPostsTypes) => {

    const onAddPost = () => {
        props.addPost();
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.dispatch(changeNewTextAC(e.currentTarget.value))
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={newTextChangeHandler} ></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {
                    props.postData.map((e) => {
                        return <Posts post={e.post} likesCount={e.likesCount} />
                    })
                }
            </div>
        </div>
    )
}
export default MyPosts;