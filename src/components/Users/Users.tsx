import React from 'react'
import { NavLink } from 'react-router-dom'
import { UsersPageType } from '../../redux/store'
import { UsersType } from '../../redux/users-reducer'
import s from './Users.module.css'

type UseresType = {
    usersPage: UsersPageType
    totalUserCount: number
    pagesSize: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUser: (users: Array<UsersType>) => void
    setCurrentUser: (currentPage: number) => void
    isFetching: boolean
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

            {props.usersPage.users.map((u) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                            <img alt="#" src={"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"} className={s.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.follow(u.id) }}>Follow</button>
                            : <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>}
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

export default Users
