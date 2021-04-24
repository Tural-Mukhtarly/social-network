import React from 'react'
import './Profile.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { PostDataType } from '../../redux/state'


type ProfileTypes = {
    postData: Array<PostDataType>
    addPost: (postNew: string) => void
    changeNewTextCallback: (newText: string) => void
    message: string
}

const Profile = (props: ProfileTypes) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={props.postData} addPost={props.addPost} changeNewTextCallback={props.changeNewTextCallback} message={props.message} />
        </div>
    )
}
export default Profile;