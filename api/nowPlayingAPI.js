window.addEventListener("DOMContentLoaded", fetchNowPlayingMovie);

export default async function fetchNowPlayingMovie() {
    const nowPLayingAPI = "https://api.themoviedb.org/3/movie/now_playing?api_key=9a488bdcdb8993c3fff35cd18757981d&language=en-US&page=1";
    const jsonNowPlayingData = await fetch(nowPLayingAPI).then(res => res.json()).then(data => data.results);
    return jsonNowPlayingData;
}


