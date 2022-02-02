// imagePATH = https://image.tmdb.org/t/p/w1280

import fetchPopularMovie from "../api/popularAPI.js";

window.addEventListener("DOMContentLoaded", createPopularItem);

async function createPopularItem() {
    const popularMovies = await fetchPopularMovie();
    /* create item */
    for ( let i = 0; i < popularMovies.length; i++ ) {
        /* a tag */
        const a = document.createElement("a");
        a.href = "#";
        a.id = "home-main__raw__item";
        a.classList = "home-main__raw__item";
        /* img tag */
        const img = document.createElement("img");
        img.src = "https://image.tmdb.org/t/p/w1280" + popularMovies[i].backdrop_path;
        img.id = "home-main__raw__item__img";
        img.classList = "home-main__raw__item__img";
        a.appendChild(img);
        /* append a tag to div tag */
        const homeMainPopular = document.getElementById("home-main__raw--popular");
        homeMainPopular.appendChild(a);
    };
};