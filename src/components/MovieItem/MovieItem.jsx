// import router-DOM dependencies
import { useHistory } from 'react-router-dom';

// import redux dependencies
import { useDispatch } from 'react-redux';

// import Material UI dependencies
import { Card, CardActions, CardContent, Button, Typography,  } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// import CSS
import './MovieItem.css';

const MovieItem = ({ movie }) => {

    // initiate useDispatch as a variable
    const dispatch = useDispatch();

    // initiate useHistory as a variable
    const history = useHistory();

    // click listener for whenever 'learn more' button is clicked
    // dispatch is called to store current movie information in redux
    const handleClick = () => {
        console.log('in handleClick');

        dispatch({ type: 'FETCH_CURRENT_MOVIE', payload: movie.id });

        history.push('/details');
    }

    return (
        <>
            <Card sx={{ width: 275 }} className="movieItemContainer">
                <div className="imageContainer">
                    <img src={movie.poster} alt={movie.title} />
                </div>

                <div className="titleContainer">
                    <h1 className="titleHeader">{movie.title}</h1>
                    <Button size="small" variant="contained" onClick={handleClick}>Learn More <ArrowRightAltIcon/></Button>
                </div>
            </Card>
        </>
    );
}

export default MovieItem;