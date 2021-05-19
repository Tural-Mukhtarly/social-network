import React, { Component } from 'react'
import axios from 'axios'
import { UsersPageType } from '../../redux/store'
import { UsersType } from '../../redux/users-reducer'
import s from './Users.module.css'

type UsersesType = {
    usersPage: UsersPageType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUser: (users: Array<UsersType>) => void
}

export class Users extends Component<UsersesType> {
    constructor(props: UsersesType) {
        super(props)
    }
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUser(response.data.items)
            })
    }

    render() {

        // let pagesCount = this.props.usersPage.

        return (
            <div>

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
