import React, { Component } from 'react'
import axios from 'axios'
import { UsersType } from '../../redux/users-reducer'
import Users from './Users'
import { userAPI } from '../../api/api'
// import loading from './loading.gif'

type UsersAPIComponentsType = {
    users: Array<UsersType>
    pagesSize: number
    totalUserCount: number
    currentPage: number
    followAC: (userID: number) => void
    unfollowAC: (userID: number) => void
    setUserAC: (users: Array<UsersType>) => void
    setCurrentUserAC: (currentPage: number) => void
    isFetching: boolean
    setTotalUserCountAC: () => void
    getUsersThunk: any
}

export class UsersAPIComponent extends Component<UsersAPIComponentsType> {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage,this.props.pagesSize)
    }

    onPageChanged = (pageNumber: number) => {
       this.props.getUsersThunk(pageNumber,this.props.pagesSize)
    }

    render() {
        return (
            <>
                { this.props.isFetching ? <img alt="" /> : null}
                <Users
                    onPageChanged={this.onPageChanged}
                    totalUserCount={this.props.totalUserCount}
                    pagesSize={this.props.pagesSize}
                    users={this.props.users}
                    follow={this.props.followAC}
                    unfollow={this.props.unfollowAC}
                    setUser={this.props.setUserAC}
                    setCurrentUser={this.props.setCurrentUserAC}
                    currentPage={this.props.currentPage}
                    isFetching={this.props.isFetching}
                />
            </>
        )
    }
}

export default UsersAPIComponent
