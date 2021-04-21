import React from 'react'
import s from './MyPosts.module.css'
import Posts from './Posts/Posts'
import { PostDataType } from '../../../index'


type MyPostsTypes = {
    postData: Array<PostDataType>
}


const MyPosts = (props: MyPostsTypes) => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
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