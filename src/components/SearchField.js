import React, {useState} from 'react';
import { connect } from 'react-redux';

import {getData} from '../Actions/ActionCreators'

import { MenuItem, TextField} from '@material-ui/core'


// SearchField component to select the name of the city:
const SearchField = ({citySelected}) => {

    const [cityName, setCityName] = useState("")

    const handleChange = (e) => {
        setCityName(e.target.value)
        citySelected(e.target.value)
    }

    return (
        <div className="d-flex flex-row justify-content-center mt-4">
            <TextField style={{width:250, backgroundColor:"rgb(255,255,255)",border:0,outline:0}} label="Select a city" value={cityName} variant="outlined" onChange={handleChange} select>
                <MenuItem value="Aachen">Aachen</MenuItem>
                <MenuItem value="Bremen">Bremen</MenuItem>
                <MenuItem value="Hamburg">Hamburg</MenuItem>
                <MenuItem value="Munich">Munich</MenuItem>
                <MenuItem value="Stuttgart">Stuttgart</MenuItem>
            </TextField>
        </div>
    );
}


// function to inject dispatch/actions as props into the component.
//getData() is the action dispatched to get the data from firestore DB. 
const mapDispatchToProps = (dispatch) => {
    return{
        citySelected: (cityName) => {dispatch(getData(cityName))}
    }
}
 
export default connect(null,mapDispatchToProps)(SearchField);
