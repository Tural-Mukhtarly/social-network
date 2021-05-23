import React, { Component } from 'react'
import axios from 'axios'
import { UsersType } from '../../redux/users-reducer'
import Users from './Users'
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
            axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
                .then(response => {
                    this.props.setUser(response.data.items)
                    this.props.setTotalUserCount(response.data.totalUserCount)
                })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentUser(pageNumber)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`)
                .then(response => {
                    this.props.setUser(response.data.items)
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
