import {firestore} from '../config/FirebaseConfig';

// getData() method to dispatch an action to get data for a city from DB
export const getData = (cityName) => {
    return (dispatch, getState) => {
         firestore.collection(cityName).orderBy("year", "asc").get()
         .then((snapshot) => {
            const data = snapshot.docs.map(doc => doc.data());
            dispatch({ type: 'GET_DATA', data});
         }).catch((err) => {
            console.log("error: ", err)
         })
    }
}

