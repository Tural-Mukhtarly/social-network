import React from 'react'
import s from './MyPosts.module.css'
import Posts from './Posts/Posts'

const postData = [
    { id: 1, post: 'post', likesCount: 11 },
    { id: 2, post: 'post', likesCount: 12 },
    { id: 3, post: 'post', likesCount: 13 }
]

const MyPosts = () => {
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
                <Posts />
                <Posts />
            </div>
        </div>
    )
}
export default MyPosts;