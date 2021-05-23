import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { setUserProfile } from '../../redux/profile-reducer'
import { AppStateType } from '../../redux/redux-store'
import Profile from './Profile'


type PathParamsType = {
    userId: string
}
type MapStatePropsType = {
    profile: any
}
type mapDispatchToPropsType = {
    setUserProfile: any
}

type OwnPropsType = MapStatePropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/+${userId}`)
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}
const mapDispatchToProps = (dispatch: any): mapDispatchToPropsType => {
    return {
        setUserProfile: (profile: any) => {
            dispatch(setUserProfile(profile))
        }
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent)