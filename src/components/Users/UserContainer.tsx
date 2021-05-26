import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { followAC, getUsersThunk, setCurrentUserAC, setUserAC, setUsersTotalCountAC, unfollowAC } from '../../redux/users-reducer'
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


export default connect(mapStateToProps, {
    followAC, unfollowAC, setUserAC, setCurrentUserAC, setUsersTotalCountAC, getUsersThunk
})(UsersAPIComponent)