// Import saga middleware
import { put } from 'redux-saga/effects';
import axios from 'axios';

function* storeCurrentMovie(action) {
    // send current movie to redux state
    try {
        const id = action.payload;

        const currentMovieResponse = yield axios.get(`/api/genre/${id}`)
        console.log('currentMovieResponse', currentMovieResponse.data);
        
        yield put({ type: 'SET_CURRENT_MOVIE', payload: currentMovieResponse.data });

    } catch {
        console.log('error receiving current movie');
    }
        
}

export default storeCurrentMovie;