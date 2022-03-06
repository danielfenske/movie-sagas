import {combineReducers} from 'redux';

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store current movie, which is assigned
// when user clicks on 'learn more' button for a movie
const currentMovie = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CURRENT_MOVIE':            
            return action.payload;
        default: 
            return state;
    }
}

const rootReducer = combineReducers({movies, currentMovie});

export default rootReducer;
