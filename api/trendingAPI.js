window.addEventListener("DOMContentLoaded", fetchTrendingMovie);

export default async function fetchTrendingMovie() {
    const trendingAPI = "https://api.themoviedb.org/3/trending/all/day?api_key=9a488bdcdb8993c3fff35cd18757981d";
    const jsonTrendingData = await fetch(trendingAPI).then(res => res.json()).then(data => data.results);
    return jsonTrendingData;
};