import React from 'react'
import './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ActionTypes, ProfilePageType, StoreType } from '../../redux/store'
import MyPostsContainer from './MyPosts/MyPostsContainer';


type ProfileTypes = {
    store: StoreType
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}

const Profile = (props: ProfileTypes) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer
                store={props.store} />
        </div>
    )
}
export default Profile;