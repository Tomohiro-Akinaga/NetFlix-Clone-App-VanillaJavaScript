window.addEventListener("DOMContentLoaded", fetchUpComingMovie);

export default async function fetchUpComingMovie() {
    const upComingAPI = "https://api.themoviedb.org/3/movie/upcoming?api_key=9a488bdcdb8993c3fff35cd18757981d&language=en-US&page=1";
    const jsonUpComingData = await fetch(upComingAPI).then(res => res.json()).then(data => data.results);
    return jsonUpComingData;
}