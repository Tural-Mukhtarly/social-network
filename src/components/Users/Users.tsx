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

function Users(props: UsersesType) {

    let getState = () => {
        if (props.usersPage.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUser(response.data.items)
                })
        }
    }
    

    return (
        <div>
            <button onClick={getState}>+++++++</button>
            {props.usersPage.users.map((u) => <div key={u.id}>
                <span>
                    <div>
                        <img alt="#" src={u.photoUrl} className={s.userPhoto} />
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
