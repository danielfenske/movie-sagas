// import react, router-DOM dependencies
import { useHistory } from 'react-router-dom';

// import redux dependencies 
import { useSelector } from 'react-redux';

// import Material UI dependencies
import { Card, CardActions, ImageListItem, CardContent, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

// import Genre component
import Genre from '../Genre/Genre';

// import css 
import './Details.css';

function Details() {

    // bring in currentMovie object to render on page
    const currentMovie = useSelector((store) => store.rootReducer.currentMovie);
    const genres = currentMovie.movie_genres;

    // initiate useHistory as a variable
    const history = useHistory();

    // returns user back to home on click
    const handleClick = () => {
        console.log('in handleClick');

        history.push('/');
    }

    return (
        <>
            <Card sx={{ maxWidth: 800 }} className="movieDetailsContainer">
                <div className="detailsImageContainer">
                    <img src={currentMovie.poster} alt={currentMovie.title} />
                </div>

                <div className="mainContainer">
                    <div className="detailsContainer">
                        <h1 className="detailsTitleHeader">{currentMovie.title}</h1>
                        <p className="detailsDescription">{currentMovie.description}</p>

                        <div className="detailsGenresContainer">
                            {genres && genres.map((genre) => {
                                return (
                                    <Genre
                                        key={genre}
                                        genre={genre}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <div className="actionContainer">
                        <Button size="small" variant="contained" onClick={handleClick}><HomeIcon /></Button>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default Details;