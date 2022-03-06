// import router-DOM dependencies
import { useHistory } from 'react-router-dom';

// import redux dependencies 
import {useSelector} from 'react-redux';

// import Material UI dependencies
import { Card, CardActions, ImageListItem, CardContent, Button, Typography } from '@mui/material';
import { useSelect } from '@mui/base';

function Details() {

    // bring in currentMovie object to render on page
    const currentMovie = useSelector((store) => store.rootReducer.currentMovie);
    // declare genres for selected movie as 'genres'
    const genres = currentMovie.genres;

    // initiate useHistory as a variable
    const history = useHistory();

    // returns user back to home on click
    const handleClick = () => {
        console.log('in handleClick');

        history.push('/');
    }

    return (
        <Card sx={{ width: 275 }}>
            <CardContent>
                <h1>Movie Details</h1>
                <ImageListItem>
                    <img src={currentMovie.poster} alt={currentMovie.title} />
                </ImageListItem>
            </CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {currentMovie.title}
                {currentMovie.description}
                
                {genres.map(genre =>
                    (<p key={genre.name}>{genre.name}</p>)    
                )}
            </Typography>
            <CardActions>
                <Button size="small" onClick={handleClick}>Return to Home</Button>
            </CardActions>
        </Card>
    )
}

export default Details;