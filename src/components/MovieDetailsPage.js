import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import callApi from '../api';
import { Box, Typography,IconButton } from '@material-ui/core';
import { Share, PlaylistPlay, AddCircleOutline, PlayArrow } from '@material-ui/icons';
import ReactPlayer from 'react-player';

const MovieDetailsPage = () => {
  const { imdbid } = useParams();
    const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await callApi('/home');
        const { banner, tendingnow, horror, scifi } = data;
        const movies = [...tendingnow, ...horror, ...scifi];
        const movie = movies.find((movie) => movie.imdbid === imdbid);
        if (movie) {
          setMovieData(movie);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [imdbid]);

  if (!movieData) {
    return <div>Loading...</div>;
  }
  const { title, synopsis, imageurl, genre, imdbrating, released, videourl, banner,runningtime } = movieData;
  const videoUrl = videourl && videourl[0]?.url;
  return (
    <div>
      <div style={{ position: 'relative' }}>
      <ReactPlayer
  url={videoUrl}
  playing={true}
  loop={true}
  muted={true}
  width="100%"
  height="100%"
  style={{ position: 'absolute', top: 0, left: 0 }}
/>

        <div style={{ position: 'absolute', bottom: '10px', left: '10px', display: 'flex', alignItems: 'center' }}>
          <Typography variant="h4" style={{ color: 'white', marginRight: '20px' }}>{title}</Typography>
          <IconButton style={{ color: 'white' }}>
            <AddCircleOutline />
          </IconButton>
          <IconButton style={{ color: 'white' }}>
            <Share />
          </IconButton>
          <IconButton style={{ color: 'white', backgroundColor: 'red', borderRadius: '50%' }}>
            <PlayArrow style={{ color: 'white' }} />
          </IconButton>
        </div>
      </div>
      <div style={{ marginTop: '150px' }}></div>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', display: 'flex', alignItems: 'center' }}>
  <Typography variant="body1" style={{ color: 'white', marginRight: '20px' }}>IMDb : {imdbrating}</Typography>
  <Typography variant="body1" style={{ color: 'white', marginRight: '20px' }}>{runningtime}</Typography>
  <Typography variant="body1" style={{ color: 'white' }}> {released}</Typography>
</div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="body1" style={{ marginRight: '10px', color: 'white' }}>Genre:</Typography>
        <Box display="flex" flexWrap="wrap">
          {genre.map((item, index) => (
            <Box
              key={index}
              bgcolor="white"
              color="black"
              p={1}
              m={1}
              borderRadius={4}
              fontWeight="bold"
              fontSize={14}
            >
              {item}
            </Box>
          ))}
        </Box>
      </div>
      <div>
      <Typography variant="body1" style={{ color: 'white' }}>{synopsis}</Typography>
      </div>
    </div>
  );
};

      

export default MovieDetailsPage;
  
 