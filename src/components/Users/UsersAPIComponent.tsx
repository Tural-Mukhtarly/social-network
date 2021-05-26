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
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUser: (users: Array<UsersType>) => void
    setCurrentUser: (currentPage: number) => void
    isFetching: boolean
    setTotalUserCount: (totalCount: number) => void
}

export class UsersAPIComponent extends Component<UsersAPIComponentsType> {
    componentDidMount() {
        userAPI.getUsers(this.props.currentPage, this.props.pagesSize)
            .then(data => {
                this.props.setUser(data.items)
                this.props.setTotalUserCount(data.totalUserCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentUser(pageNumber)
        userAPI.getUsers(pageNumber, this.props.pagesSize)
            .then(data => {
                this.props.setUser(data.items)
            })
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
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    setUser={this.props.setUser}
                    setCurrentUser={this.props.setCurrentUser}
                    currentPage={this.props.currentPage}
                    isFetching={this.props.isFetching}
                />
            </>
        )
    }
}

export default UsersAPIComponent
