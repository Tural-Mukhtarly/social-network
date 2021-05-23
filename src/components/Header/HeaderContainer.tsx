import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from './Header'
import { InitialStateType, setAuthUserDataAC } from '../../redux/auth-reducer'

type HeaderContainerType = {
    isAuth: boolean
    login: null
    setAuthUserDataAC: (userId: any, login: any, email: any) => void
}

export class HeaderContainer extends Component<HeaderContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data
                    this.props.setAuthUserDataAC(id, login, email)
                }
            })
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: InitialStateType) => {
    return {
        isAuth: state.isAuth,
        login: state.login
    }
}

export default connect(mapStateToProps, { setAuthUserDataAC })(HeaderContainer)
