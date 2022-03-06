import { Card, CardActions, ImageListItem, CardContent, Button, Typography } from '@mui/material';
import {useDispatch} from 'react-redux';

const MovieItem = ({ movie }) => {

    // initiate useDispatch as a variable
    const dispatch = useDispatch();

    // click listener for whenever 'learn more' button is clicked
        // dispatch is called to store current movie information in redux
    const handleClick = () => {
        console.log('in handleClick');

        console.log('movie', movie);
        dispatch({type: 'CURRENT_MOVIE', payload: movie});
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