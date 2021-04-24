import React from 'react'
import './Profile.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ActionTypes, PostDataType } from '../../redux/state'


type ProfileTypes = {
    postData: Array<PostDataType>
    addPost: (postNew: string) => void
    changeNewTextCallback: (newText: string) => void
    message: string
    dispatch: (action: ActionTypes) => void
}

const Profile = (props: ProfileTypes) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts 
            postData={props.postData} 
            addPost={props.addPost} 
            changeNewTextCallback={props.changeNewTextCallback} 
            message={props.message}
            dispatch={props.dispatch} />
        </div>
    )
}
export default Profile;