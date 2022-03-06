import { Card, CardActions, ImageListItem, CardContent, Button, Typography } from '@mui/material';

const MovieItem = ({ movie }) => {
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
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default MovieItem;