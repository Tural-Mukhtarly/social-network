import React from 'react'
import './Profile.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { PostDataType } from '../../index'


type ProfileTypes = {
    postData: Array<PostDataType>
}

const Profile = (props: ProfileTypes) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={props.postData} />
        </div>
    )
}
export default Profile;