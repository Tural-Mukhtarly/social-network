import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { AppStateType } from '../../redux/redux-store'
import { followAC, InitialStateType, setCurrentUserAC, setUserAC, setUsersTotalCountAC, unfollowAC, UsersType } from '../../redux/users-reducer'
import { UsersAPIComponent } from './UsersAPIComponent'

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
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
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)