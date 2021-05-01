import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { followAC, setUserAC, unfollowAC } from '../../redux/users-reducer'


const mapStateToProps = (state: AppStateType) => {
    return {
        userPage: state.userPage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUser: (users: AppStateType) => {
            dispatch(setUserAC(users))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)