import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import userReducers from './users-reducer';


const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: userReducers
})

export type AppStateType = ReturnType<typeof rootReducers>


export const store = createStore(rootReducers);

