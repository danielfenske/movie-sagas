// Import saga middleware
import { put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCurrentMovie(action) {
    // send current movie to redux state
    try {
        // id is sent so database knows which movie to send back
        const id = action.payload;
        const currentMovieResponse = yield axios.get(`/api/genre/${id}`)
        
        yield put({ type: 'SET_CURRENT_MOVIE', payload: currentMovieResponse.data });
    } catch {
        console.log('error receiving current movie');
    }
        
}

export default fetchCurrentMovie;