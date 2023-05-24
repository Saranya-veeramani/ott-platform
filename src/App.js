import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Movies from './pages/Movies';
import Footer from './components/Footer';
import TvSeries from './pages/TvSeries';
import Documentaries from './pages/Documentaries';
import MovieDetails from './components/MovieDetailsPage'; // Import the MovieDetails component
import './App.css';

const App = () => {
  return (
    <div className='main'>
      <BrowserRouter>
        <Navbar />
        <Routes><Route path='/' element={<Movies />} />
                            <Route path='/movies' element={<Movies />} />
          <Route path='/movie-details/:imdbid' element={<MovieDetails />} /> {/* New route for MovieDetails */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
