import React from 'react';
import Card from './Card';
import axios from 'axios';
import { endpoints } from '../../config';

class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      movieList: [],
        genreList: [],
        liked: false,
    }
  }

      onHeartClick = () => {
          this.setState({ liked: false });
      };

  componentDidMount() {
    this.requestPopularMovies();
    this.requestGenreList()
  }

  requestPopularMovies = () => {
    axios
      .get(endpoints.mostPopularMovies())
      .then((response) => {
        this.setState({
          movieList: response.data.results,
        });
      })
      .catch((error) => console.log(error.response));
  };

    requestGenreList = () => {
        axios
            .get(endpoints.genres())
            .then(response => {
                this.setState({
                    genreList: response.data.genres,
                });
            })
            .catch(error => console.log(error.response));
    };

    filterMovies = id => {
        axios
            .get(endpoints.genreMovies(id))
            .then(response => {
                this.setState({
                    movieList: response.data.results,
                });
            })
            .catch(error => console.log(error));
    };

  render() {
    const { movieList, genreList } = this.state;

    return (
      <React.Fragment>
          {genreList ? (
              <h2 className="genre__list">
                  {genreList.map(genre => (
                      <a href="#"
                          onClick={() => this.filterMovies(genre.id)}
                          key={genre.id}
                          className="genre__item">{" "}
                          {genre.name}
                      </a>
                  ))}
              </h2>
          ) : null}
        {movieList.map((movie) => (
            <Card
                onClick={() => this.onHeartClick()}
                key={movie.id}
                data={movie}
                liked={this.state.liked}
            />
        ))}
      </React.Fragment>
    );
  }
}

export default App;
