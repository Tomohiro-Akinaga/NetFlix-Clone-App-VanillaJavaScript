// imagePATH = https://image.tmdb.org/t/p/w1280

import fetchAiringTodayTV from "../api/airingTodayAPI.js";

window.addEventListener("DOMContentLoaded", createAiringTodayItem);

export default async function createAiringTodayItem() {
    const airingTodayTv = await fetchAiringTodayTV();
    /* create item */
    for ( let i = 0; i < airingTodayTv.length; i++ ) {
        /* a tag */
        const a = document.createElement("a");
        a.href = "#";
        a.id = "home-main__raw__item";
        a.classList = "home-main__raw__item";
        /* img tag */
        const img = document.createElement("img");
        img.src = "https://image.tmdb.org/t/p/w1280" + airingTodayTv[i].backdrop_path;
        img.id = "home-main__raw__item__img";
        img.classList = "home-main__raw__item__img";
        a.appendChild(img);
        /* append a tag to div tag */
        const homeMainAiringToday = document.getElementById("home-main__raw--airing-today");
        homeMainAiringToday.appendChild(a);
    };
};