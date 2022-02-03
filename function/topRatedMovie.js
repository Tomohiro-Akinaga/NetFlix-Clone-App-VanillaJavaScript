import fetchTopRatedMovie from "../api/topRatedAPI.js";

window.addEventListener("DOMContentLoaded", createTopRatedItem);

export default async function createTopRatedItem() {
    const topRatedMovies = await fetchTopRatedMovie();
    /* create item */
    for ( let i = 0; i < topRatedMovies.length; i++ ) {
        /* a tag */
        const a = document.createElement("a");
        a.href = "#";
        a.id = "home-main__raw__item";
        a.classList = "home-main__raw__item";
        /* img tag */
        const img = document.createElement("img");
        img.src = "https://image.tmdb.org/t/p/w1280" + topRatedMovies[i].backdrop_path;
        img.id = "home-main__raw__item__img";
        img.classList = "home-main__raw__item__img";
        a.appendChild(img);
        /* append a tag to div tag */
        const homeMainTopRated = document.getElementById("home-main__raw--top-rated");
        homeMainTopRated.appendChild(a);
    };
};