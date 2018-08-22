const initialState = {
    user: null
};

export default (state = initialState, action) => {
    switch (action.type){
        case 'SET_USER':

            return {
                ...state,
                user: action.user
            };
        case 'UPDATE_USER':
            state.user = {
                ...state.user,
                ...action.user
            };

            return {
                ...state,
            };
        case 'LOGOUT_USER':
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
};