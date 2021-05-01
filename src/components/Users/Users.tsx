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

    // if (props.usersPage.users.length === 0) {
    //     props.setUser([
    //         { id: 1, photoUrl: "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/Embargoed/23-02-2021_OCHA_Yemen-04.jpg/image770x420cropped.jpg", followed: false, fullName: 'Nikita', status: 'Boss', location: { city: "Minsk", country: "Belarus" } },
    //         { id: 2, photoUrl: "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/Embargoed/23-02-2021_OCHA_Yemen-04.jpg/image770x420cropped.jpg", followed: true, fullName: 'Maksim', status: 'Boss', location: { city: "Minsk", country: "Belarus" } },
    //         { id: 3, photoUrl: "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/Embargoed/23-02-2021_OCHA_Yemen-04.jpg/image770x420cropped.jpg", followed: false, fullName: 'Andrey', status: 'Boss', location: { city: "Minsk", country: "Belarus" } }
    //     ] as Array<UsersType>)
    // }

    return (
        <div>
            {props.usersPage.users.map((u) => <div>
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
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users
