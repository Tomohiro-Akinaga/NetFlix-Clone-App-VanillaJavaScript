/* 
how to watch videos on movie api
https://www.youtube.com/watch?v=h6hZkvrFIj0
change the key "h6hZkvrFIj0"

https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
*/



const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9a488bdcdb8993c3fff35cd18757981d&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280/k2twTjSddgLc1oFFHVibfxp2kQV.jpg";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=9a488bdcdb8993c3fff35cd18757981d&query=";

async function fetchAPI() {
    const movieJSON = await fetch(APIURL).then(res => res.json());
    console.log(movieJSON);

};
fetchAPI();

window.addEventListener("DOMContentLoaded", () => {
    const topMovieImage = document.getElementById("home-main__top-movie__image--poster");
    console.log(topMovieImage.src);
});



