import React from 'react'
import s from './MyPosts.module.css'
import Posts from './Posts/Posts'

type PostDataType = {
    id: number
    post: string
    likesCount: number
}

const postData: Array<PostDataType> = [
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
                {
                    postData.map((e) => {
                        return <Posts id={e.id} post={e.post} likesCount={e.likesCount} />
                    })
                }
                

            </div>
        </div>
    )
}
export default MyPosts;