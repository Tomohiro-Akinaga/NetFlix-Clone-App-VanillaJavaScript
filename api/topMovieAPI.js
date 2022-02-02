window.addEventListener("DOMContentLoaded", fetchOneOfNowPlayingMovie);

export default async function fetchOneOfNowPlayingMovie() {
    const number = Math.floor(Math.random() * 10) + 1;
    const randomNowPLayingAPI = "https://api.themoviedb.org/3/movie/now_playing?api_key=9a488bdcdb8993c3fff35cd18757981d&language=en-US&page=" + number;
    const jsonRandomNowPlayingData = await fetch(randomNowPLayingAPI).then(res => res.json()).then(data => data.results);
    return jsonRandomNowPlayingData;
};