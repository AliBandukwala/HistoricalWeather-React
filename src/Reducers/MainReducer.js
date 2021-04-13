const initState = []

// Reducer to cache data and set the global state with it:
const MainReducer = (state = initState, action) => {
    switch(action.type)
    {
        case 'GET_DATA':
            state = action.data;
            return state;
        
        default:
            return state;
    }
}

export default MainReducer