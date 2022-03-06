// Import saga middleware
import { put } from 'redux-saga/effects';
import axios from 'axios';

function* storeCurrentMovie(action) {
    // send current movie to redux state
    try {
        const id = action.payload.id;

        const genres = yield axios.get(`/api/genre/${id}`)
        const movie = {...action.payload, genres: genres.data};  

        yield put({ type: 'SET_CURRENT_MOVIE', payload: movie });

    } catch {
        console.log('error receiving current movie');
    }
        
}

export default storeCurrentMovie;