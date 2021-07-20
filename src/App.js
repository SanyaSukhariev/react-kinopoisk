import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage";
import MoviesPage from "./components/moviesPage";
import MovieDetailsPage from "./components/movieDetailsPAge/MovieDetailsPage";
import {BrowserRouter,Route,Redirect,Switch,Link} from "react-router-dom";
import Header from "./components/Header";


function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <h1 style={{textAlign:"center"}}>Hello kinopoisk</h1>
      {/*<Header/>*/}
      <nav>
      <Link to="/"> HomePage </Link>
      <Link to="/movies"> MoviesPage </Link>

      </nav>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact  path="/movies"  component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route render={() => <Redirect to={{pathname: "/"}} />} />
      </Switch>
    </div>
      </BrowserRouter>
  );
}

export default App;
