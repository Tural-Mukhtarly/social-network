import React from 'react'
import './Profile.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () =>{
    return(
            <div className='content'>
                <img src={'data:image/jpeg;base64,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'}/>
        <div>
                    ava + descripion
                </div>
                <MyPosts/>
            </div>
    )
}
export default Profile;