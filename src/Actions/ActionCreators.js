import {firestore} from '../config/FirebaseConfig';

export const getData = (cityName) => {
    return (dispatch, getState) => {
         // adding async call to database here:
         firestore.collection(cityName).orderBy("year", "asc").get()
         .then((snapshot) => {
            const data = snapshot.docs.map(doc => doc.data());
            dispatch({ type: 'GET_DATA', data});
         }).catch((err) => {
            console.log("error: ", err)
         })
    }
}

