// imagePATH = https://image.tmdb.org/t/p/w1280

import fetchNowPlayingMovie from "../api/nowPlayingAPI.js";

window.addEventListener("DOMContentLoaded", createNowPlayingItem);

async function createNowPlayingItem() {
    const nowPlayingMovies = await fetchNowPlayingMovie();
    /* create item */
    for ( let i = 0; i < nowPlayingMovies.length; i++ ) {
        /* a tag */
        const a = document.createElement("a");
        a.href = "#";
        a.id = "home-main__raw__item";
        a.classList = "home-main__raw__item";
        /* img tag */
        const img = document.createElement("img");
        img.src = "https://image.tmdb.org/t/p/w1280" + nowPlayingMovies[i].backdrop_path;
        img.id = "home-main__raw__item__img";
        img.classList = "home-main__raw__item__img";
        a.appendChild(img);
        /* append a tag to div tag */
        const homeMainNowPlaying = document.getElementById("home-main__raw--now-playing");
        homeMainNowPlaying.appendChild(a);
    };
};