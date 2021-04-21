import React from 'react'
import s from './MyPosts.module.css'
import Posts from './Posts/Posts'

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