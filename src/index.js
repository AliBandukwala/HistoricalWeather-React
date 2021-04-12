import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../src/Reducers/RootReducer'
import thunk from 'redux-thunk'
import { createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import firebase from './config/FirebaseConfig'

const store = createStore(RootReducer, applyMiddleware(thunk));

const rrfConfig = { userProfile: 'users', useFirestoreForProfile: true } // react-redux-firebase config

const rrfProps = {
     firebase,
     config: rrfConfig,
     dispatch: store.dispatch,
     createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
<Provider store={store}>
     <ReactReduxFirebaseProvider {...rrfProps}>
          <BrowserRouter>
               <App />
          </BrowserRouter>
     </ReactReduxFirebaseProvider>
</Provider>,
document.getElementById('root'));

serviceWorker.register();
