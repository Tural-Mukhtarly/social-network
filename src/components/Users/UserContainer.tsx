import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { followAC, setUserAC, unfollowAC, UsersType } from '../../redux/users-reducer'
import Users from './Users'


const mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage,
        pagesSize: state.usersPage.pagesSize,
        totalUsercount: state.usersPage.totalUserCount
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUser: (users: Array<UsersType>) => {
            dispatch(setUserAC(users))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)