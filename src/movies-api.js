import axios from 'axios';
const apiKey = 'c381c8455f71212df1528e69b1887a62';

export const searchMovies = (query = '', pageNumber = 1) =>
  axios(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${pageNumber}`,
  ).then(res => res.data.results);

export const getTrending = () =>
  axios(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`,
  ).then(res => res.data.results);

export const getMovieDetales = id =>
  axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`).then(
    res => res.data,
  );

export const getMovieCast = id =>
  axios(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`,
  ).then(res => res.data);

export const getMovieReviews = id =>
  axios(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}`,
  ).then(res => res.data.results);

export const imgPath = 'https://image.tmdb.org/t/p/w200';
export const posterImgPath = `https://image.tmdb.org/t/p/w300/`;
