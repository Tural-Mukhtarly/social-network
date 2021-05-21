import React, { Component } from 'react'
import axios from 'axios'
import { UsersPageType } from '../../redux/store'
import { UsersType } from '../../redux/users-reducer'
import s from './Users.module.css'

type UsersesType = {
    usersPage: UsersPageType
    pagesSize: number
    totalUserCount: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUser: (users: Array<UsersType>) => void
    setCurrentUser: (currentPage: number) => void
}

export class Users extends Component<UsersesType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pagesSize}`)
            .then(response => {
                this.props.setUser(response.data.items)
            })
    }
    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.usersPage.pagesSize)

        let pages = []
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                {pages.map(p => {
                    return <span onClick={()=>{this.props.setCurrentUser(p)}} className={this.props.currentPage === p ? s.selectedPage : ""}>{p}</span>
                })}

                {this.props.usersPage.users.map((u) => <div key={u.id}>
                    <span>
                        <div>
                            <img alt="#" src={u.photoUrl} className={s.userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
                                : <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)}
            </div>
        )
    }
}

export default Users
