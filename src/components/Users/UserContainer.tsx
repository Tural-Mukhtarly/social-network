import { connect } from 'react-redux'
import { followAC, InitialStateType, setCurrentUserAC, setUserAC, unfollowAC, UsersType } from '../../redux/users-reducer'
import { UsersAPIComponent } from './UsersAPIComponent'

const mapStateToProps = (state: InitialStateType) => {
    return {
        users: state.users,
        pagesSize: state.pagesSize,
        totalUserCount: state.totalUserCount,
        currentPage: state.currentPage,
        isFetching: state.isFetching
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
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(setCurrentUserAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)