import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profile-reducer'
import { AppStateType } from '../../redux/redux-store'
import Profile from './Profile'

type ProfileContainerType = {
    setUserProfile: any
    profile: any
}

class ProfileContainer extends Component<ProfileContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        setUserProfile: (profile: any) => {
            dispatch(setUserProfile(profile))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)