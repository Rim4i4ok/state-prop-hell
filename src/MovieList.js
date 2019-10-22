import React from 'react';
import Movie from './Movie';

const MovieList = ({movies}) => {    

    return (
        <div>
            {movies.map(movie => (
                <Movie 
                    key={movie.id}
                    name={movie.name}
                    price={movie.price} />
            ))}
        </div>
    );
}

export default MovieList;