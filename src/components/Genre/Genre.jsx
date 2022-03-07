// import CSS
import './Genre.css';

function Genre({ genre }) {
    return (
        <div className="genreContainer">
            <p>{genre}</p>
        </div>
    )
}

export default Genre;