// import router-DOM dependencies
import { useHistory } from 'react-router-dom';

// import redux dependencies
import {useDispatch} from 'react-redux';

// import Material UI dependencies
import { Card, CardActions, ImageListItem, CardContent, Button, Typography } from '@mui/material';

const MovieItem = ({ movie }) => {

    // initiate useDispatch as a variable
    const dispatch = useDispatch();

    // initiate useHistory as a variable
    const history = useHistory();

    // click listener for whenever 'learn more' button is clicked
        // dispatch is called to store current movie information in redux
    const handleClick = () => {
        console.log('in handleClick');

        dispatch({type: 'FETCH_CURRENT_MOVIE', payload: movie.id});

        history.push('/details');
    }

    return (
        <Card sx={{ width: 275 }}>
            <CardContent>
                <ImageListItem>
                    <img src={movie.poster} alt={movie.title} />
                </ImageListItem>
            </CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {movie.title}
            </Typography>
            <CardActions>
                <Button size="small" onClick={handleClick}>Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default MovieItem;