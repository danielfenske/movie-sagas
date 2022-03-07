import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';

// import components
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';

// import Material UI components
import TheatersIcon from '@mui/icons-material/Theaters';

function App() {
  return (
    <div className="App">
      <header><TheatersIcon fontSize="large" className="movieIcon"/><h1 className="appTitle">Movie Library</h1></header>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/details" exact>
          <Details />  
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
