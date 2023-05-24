import React, { useState, useEffect } from 'react';
import callApi from '../api';
import { Box, makeStyles, Typography } from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import StarIcon from '@material-ui/icons/Star';
import { Add, Share } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  banner: {
    position: 'relative',
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: theme.spacing(4),
  },
  bannerContent: {
    position: 'absolute',
    bottom: theme.spacing(4),
    left: theme.spacing(4),
    color: '#fff',
  },
  watchNowButton: {
    marginTop: theme.spacing(2),
    color: 'white',
    backgroundColor: 'red',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  ratingStars: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  starIcon: {
    color: '#fbc02d',
    marginRight: theme.spacing(1),
  },
  watchlistButton: {
    color: 'white',
    marginLeft: theme.spacing(2),
    cursor: 'pointer',
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    padding: 0,
    fontSize: 'inherit',
  },
  shareButton: {
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    padding: 0,
    fontSize: 'inherit',
  },
  movieRow: {
    marginTop: theme.spacing(4),
  },
  movieItem: {
    width: '200px',
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    background: '#f5f5f5',
    borderRadius: '4px',
    textAlign: 'center',
    cursor: 'pointer',
  },
}));

const MovieSlider = ({ movies, handleMovieClick }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleMovieItemClick = (movie) => {
    handleMovieClick(movie);
    navigate(`/movie-details/${movie.imdbid}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
  };

  return (
    <Slider {...settings}>
      {movies.map((movie) => (
        <div
          key={movie.imdbid}
          className={classes.movieItem}
          onClick={() => handleMovieItemClick(movie)}
        >
          <img src={movie.imageurl} alt={movie.title} />
        </div>
      ))}
    </Slider>
  );
};

const HomePage = () => {
  const [bannerData, setBannerData] = useState({});
  const [tendingnow, setTendingNow] = useState([]);
  const [horror, setHorror] = useState([]);
  const [scifi, setSciFi] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isMoviePlaying, setIsMoviePlaying] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await callApi('/home');
        setBannerData(data.banner);
        setTendingNow(data.tendingnow || []);
        setHorror(data.horror || []);
        setSciFi(data.scifi || []);
        setImageUrl(data.banner?.imageUrl || '');
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleWatchNowClick = () => {
    setIsMoviePlaying(true);
  };

  const handleMovieItemClick = (movie) => {
    setSelectedMovie(movie);
    setIsMoviePlaying(true);
    navigate(`/movie-details/${movie.imdbid}`);
  };

  return (
    <div>
      {imageUrl && (
        <Box className={classes.banner} style={{ backgroundImage: `url(${bannerData.imageUrl})` }}>
          <div className={classes.bannerContent}>
            <Typography variant="h4" gutterBottom>
              {bannerData.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {bannerData.synopsis}
            </Typography>
            <div className={classes.ratingStars}>
              {[1, 2, 3, 4].map((star) => (
                <StarIcon key={star} className={classes.starIcon} />
              ))}
            </div>
            <button className={classes.watchNowButton} onClick={handleWatchNowClick}>
              Watch Now
            </button>
            <button className={classes.watchlistButton}>
              <Add className={classes.icon} />
              Watchlist
            </button>
            <button className={classes.shareButton}>
              <Share className={classes.icon} />
              Share
            </button>
          </div>
          <ReactPlayer
            url={bannerData.videoUrl}
            playing={true}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </Box>
      )}
      <div className={classes.movieRow}>
        <h2 style={{ color: 'white' }}>Trending Now</h2>
        {tendingnow.length > 0 ? (
          <MovieSlider movies={tendingnow} handleMovieClick={handleMovieItemClick} />
        ) : (
          <p>No trending movies available</p>
        )}
      </div>

      <div className={classes.movieRow}>
        <h2 style={{ color: 'white' }}>Horror Movies</h2>
        {horror.length > 0 ? (
          <MovieSlider movies={horror} handleMovieClick={handleMovieItemClick} />
        ) : (
          <p>No horror movies available</p>
        )}
      </div>

      <div className={classes.movieRow}>
        <h2 style={{ color: 'white' }}>Sci-Fi Movies</h2>
        {scifi.length > 0 ? (
          <MovieSlider movies={scifi} handleMovieClick={handleMovieItemClick} />
        ) : (
          <p>No sci-fi movies available</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
