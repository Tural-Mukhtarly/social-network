import React from 'react'
import { UsersPageType } from '../../redux/store'
import s from '..Users/Users.module.css'

type UsersesType = {
    userPage: UsersPageType
}

function Users(props: UsersesType) {
    return (
        <div>
            {props.userPage.users.map((u) => <div>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto} />
                    </div>
                    <div>
                        {u.followed}
                        <button>
                            Follow
                        </button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users
