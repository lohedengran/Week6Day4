import React from 'react';
import './App.css';
import MovieInfo from './MovieInfo';
import movies from './movies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Movies</h1>
      </header>
      <main>
        {/* <MovieInfo movie={movies[0]} />
        <MovieInfo movie={movies[1]} />
        <MovieInfo movie={movies[2]} />
        <MovieInfo movie={movies[3]} />
        <MovieInfo movie={movies[4]} />
        <MovieInfo movie={movies[5]} />
        <MovieInfo movie={movies[6]} /> */}

        {movies.map((m) => 
          <MovieInfo key={m.title} movie={m}/>
      )}

      </main>
    </div>
  );
}

export default App;
