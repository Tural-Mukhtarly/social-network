import React from 'react'
import './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ActionTypes, ProfilePageType, StoreType } from '../../redux/store'
import MyPostsContainer from './MyPosts/MyPostsContainer';


// type ProfileTypes = {
//     store: StoreType
// }

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;