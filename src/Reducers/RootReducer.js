import MainReducer from '../Reducers/MainReducer'
import { combineReducers } from 'redux'
//import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore' // <- needed if using firestore

const RootReducer = combineReducers({
    mainReducer: MainReducer,
    firestore: firestoreReducer
})

export default RootReducer