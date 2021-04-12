const initState = []

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