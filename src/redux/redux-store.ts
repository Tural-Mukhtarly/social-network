import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import userReducers from './users-reducer';


const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: userReducers,
    authReducer: authReducer
})

export type AppStateType = ReturnType<typeof rootReducers>


export const store = createStore(rootReducers,applyMiddleware(thunk));

