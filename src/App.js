import React, { useState } from 'react';
import './App.css';
import Nav from './Nav';
import MovieList from './MovieList';

function App() {

  const [movies, setMovie] = useState([
    {
        name: 'Star Wars',
        price: '10$',
        id: 2213
    },
    {
        name: 'Man in Black',
        price: '15$',
        id: 4867
    },
    {
        name: 'Inception',
        price: '20$',
        id: 1134
    },
]);

  return (
    <div className="App">
      <Nav count={movies.length} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
