window.addEventListener("DOMContentLoaded", fetchTopRatedMovie);

export default async function fetchTopRatedMovie() {
    const topRatedAPI = "https://api.themoviedb.org/3/movie/top_rated?api_key=9a488bdcdb8993c3fff35cd18757981d&language=en-US&page=1";
    const jsonTopRatedData = await fetch(topRatedAPI).then(res => res.json()).then(data => data.results);
    return jsonTopRatedData;
};
