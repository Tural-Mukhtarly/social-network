import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { followAC, setCurrentUserAC, setUserAC, unfollowAC, UsersType } from '../../redux/users-reducer'
import { UsersAPIComponent } from './UsersAPIComponent'


const mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage,
        pagesSize: state.usersPage.pagesSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentUser: (currentPage: number) => {
            dispatch(setCurrentUserAC(currentPage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)