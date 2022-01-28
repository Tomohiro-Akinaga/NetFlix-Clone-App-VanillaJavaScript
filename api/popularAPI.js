window.addEventListener("DOMContentLoaded", fetchPopularMovie);

export default async function fetchPopularMovie() {
    const popularAPI = "https://api.themoviedb.org/3/movie/popular?api_key=9a488bdcdb8993c3fff35cd18757981d&language=en-US&page=1";
    const jsonPopularData = await fetch(popularAPI).then(res => res.json()).then(data => data.results);
    return jsonPopularData;
}
