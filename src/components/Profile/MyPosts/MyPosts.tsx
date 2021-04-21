import React, { createRef } from 'react'
import s from './MyPosts.module.css'
import Posts from './Posts/Posts'
import { PostDataType, state } from '../../../redux/state'
import rerender from '../../../rerender'


type MyPostsTypes = {
    postData: Array<PostDataType>
    addPost: (postNew: string ) => void
}



let newPostElement = createRef<HTMLTextAreaElement>()




const MyPosts = (props: MyPostsTypes) => {
    
    const addPostItem = () => {
        if(newPostElement.current){
            props.addPost(newPostElement.current?.value)

        }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} ></textarea>
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