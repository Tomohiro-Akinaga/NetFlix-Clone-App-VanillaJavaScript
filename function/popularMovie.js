// imagePATH = https://image.tmdb.org/t/p/w1280

import fetchPopularMovie from "../api/popularAPI.js";

window.addEventListener("DOMContentLoaded", createPopularItem);

async function createPopularItem() {
    const popularMovies = await fetchPopularMovie();
    const popularItem = document.getElementById("home-main__raw__item");
    console.log(popularMovies);
    /* create item */
    for ( let i = 0; i < popularMovies.length - 1; i++ ) {
        const popularItemClone = popularItem.cloneNode(true);
        popularItem.parentNode.appendChild(popularItemClone);
        for ( let i = 0; i < popularMovies.length; i++ ) {
            const rawItemImg = document.getElementById("home-main__raw__item__img");
            rawItemImg.src="https://image.tmdb.org/t/p/w1280" + popularMovies[i].backdrop_path;
        }
    };
    console.log(popularItem.parentNode);
};