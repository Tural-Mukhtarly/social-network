import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { UsersType } from '../../redux/users-reducer'
import s from './Users.module.css'

type UseresType = {
    users: Array<UsersType>
    totalUserCount: number
    pagesSize: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUser: (users: Array<UsersType>) => void
    setCurrentUser: (currentPage: number) => void
    isFetching: boolean
    onPageChanged: (pageNumber: number) => void
}

function Users(props: UseresType) {
    let pagesCount = Math.ceil(props.totalUserCount / props.pagesSize)

    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(p => {
                return <span onClick={() => { props.setCurrentUser(p) }} className={props.currentPage === p ? s.selectedPage : ""}>{p}</span>
            })}

            {props.users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={"/profile/" + u.id}>
                                    <img alt="#" src={"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"} className={s.userPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "4be1399f-6b25-4ed3-86bb-d2472b66c8be"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                            })
                                    }}>Unfollow</button>

                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "4be1399f-6b25-4ed3-86bb-d2472b66c8be"
                                            }
                                        }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })
                                    }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default Users
