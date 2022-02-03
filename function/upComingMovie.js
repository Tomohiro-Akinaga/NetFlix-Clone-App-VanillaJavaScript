import fetchUpComingMovie from "../api/upComingAPI.js";

window.addEventListener("DOMContentLoaded", createUpComingItem);

export default async function createUpComingItem() {
    const upComingMovies = await fetchUpComingMovie();
    /* create item */
    for ( let i = 0; i < upComingMovies.length; i++ ) {
        /* a tag */
        const a = document.createElement("a");
        a.href = "#";
        a.id = "home-main__raw__item";
        a.classList = "home-main__raw__item";
        /* img tag */
        const img = document.createElement("img");
        img.src = "https://image.tmdb.org/t/p/w1280" + upComingMovies[i].backdrop_path;
        img.id = "home-main__raw__item__img";
        img.classList = "home-main__raw__item__img";
        a.appendChild(img);
        /* append a tag to div tag */
        const homeMainUpComing = document.getElementById("home-main__raw--up-coming");
        homeMainUpComing.appendChild(a);
    };
};