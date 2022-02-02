import fetchTrendingMovie from "../api/trendingAPI.js";

window.addEventListener("DOMContentLoaded", createTrendingItem);

async function createTrendingItem() {
    const trendingMovies = await fetchTrendingMovie();
    /* create item */
    for ( let i = 0; i < trendingMovies.length; i++ ) {
        /* a tag */
        const a = document.createElement("a");
        a.href = "#";
        a.id = "home-main__raw__item";
        a.classList = "home-main__raw__item";
        /* img tag */
        const img = document.createElement("img");
        img.src = "https://image.tmdb.org/t/p/w1280" + trendingMovies[i].backdrop_path;
        img.id = "home-main__raw__item__img";
        img.classList = "home-main__raw__item__img";
        a.appendChild(img);
        /* append a tag to div tag */
        const homeMainTrending = document.getElementById("home-main__raw--trending");
        homeMainTrending.appendChild(a);
    };
};