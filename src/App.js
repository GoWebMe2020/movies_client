import './App.css';
import api from './Api/axiosConfig';
import { useEffect, useState } from 'react';
import Layout from './Components/Layout';
import Home from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Trailer from './Components/Trailer/Trailer';
import Reviews from './Components/Reviews/Reviews';

const App = () => {
  const [movies, setMovies] = useState();
  const [movie,setMovie] = useState();
  const [reviews,setReviews] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get('/api/v1/movies');
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviewIds);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home movies={movies} />} />
          <Route path='/Trailer/:ytTrailerId' element={<Trailer />} />
          <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
