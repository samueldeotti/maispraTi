import { useState } from 'react';
import axios from 'axios';
import { MovieCard, MoviesContainer } from './MovieSearcStyle';
import { Button, Container, Input, Title } from '../UtilsStyle';

function MovieSearchEngine() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=403abbfe`);
      setMovies(response.data.Search);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  return (
    <Container maxWidth="800px">
      <Title>Movie Search Engine</Title>
      <Input
        type="text"
        value={ query }
        onChange={ (e) => setQuery(e.target.value) }
        placeholder="Search for a movie"
      />
      <Button onClick={ searchMovies }>Search</Button>
      <MoviesContainer>
        {movies && movies.map((movie) => (
          <MovieCard key={ movie.imdbID }>
            <img src={ movie.Poster } alt={ `${movie.Title} Poster` } />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </MovieCard>
        ))}
      </MoviesContainer>
    </Container>
  );
}

export default MovieSearchEngine;
