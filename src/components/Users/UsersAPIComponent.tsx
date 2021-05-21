import React, { Component } from 'react'
import axios from 'axios'
import { UsersPageType } from '../../redux/store'
import { UsersType } from '../../redux/users-reducer'
import Users from './Users'

type UsersAPIComponentsType = {
    usersPage: UsersPageType
    pagesSize: number
    totalUserCount: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUser: (users: Array<UsersType>) => void
    setCurrentUser: (currentPage: number) => void
}

export class UsersAPIComponent extends Component<UsersAPIComponentsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pagesSize}`)
            .then(response => {
                this.props.setUser(response.data.items)
            })
    }
    render() {
        return <Users
            totalUserCount={this.props.totalUserCount}
            pagesSize={this.props.pagesSize}
            usersPage={this.props.usersPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setUser={this.props.setUser}
            setCurrentUser={this.props.setCurrentUser}
            currentPage={this.props.currentPage}
        />

    }
}

export default UsersAPIComponent
