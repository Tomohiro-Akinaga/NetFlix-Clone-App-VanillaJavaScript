// imagePATH = https://image.tmdb.org/t/p/w1280

import fetchOneOfNowPlayingMovie from "../api/topMovieAPI.js";

window.addEventListener("DOMContentLoaded", createHomeMainTopItem);

async function createHomeMainTopItem() {
    const oneOfNowPlayingMovie = await fetchOneOfNowPlayingMovie();
    const number = Math.floor(Math.random() * 10) + 1;
    const IMAGEPATH = oneOfNowPlayingMovie[number].backdrop_path; 
    const homeMainTopMovie = document.getElementById("home-main__top-movie");
    /* img tag */
    const img = document.createElement("img");
    img.id = "home-main__top-movie__image--poster";
    img.src = "https://image.tmdb.org/t/p/original" + IMAGEPATH;
    img.classList = "home-main__top-movie__image--poster";
    img.alt = " ";
    /* div tag */
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    div.classList = "home-main__top-movie__container";
    h2.classList = "home-main__top-movie__title";
    p.classList = "home-main__top-movie__text--description";
    h2.innerText = oneOfNowPlayingMovie[number].title;
    p.innerText = oneOfNowPlayingMovie[number].overview;
    div.appendChild(h2);
    div.appendChild(p);
    /* add all tag to div tag */
    homeMainTopMovie.appendChild(img);
    homeMainTopMovie.appendChild(div);
};