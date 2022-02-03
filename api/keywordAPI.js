import createKeywordItem from "../function/keywordMovie.js";

window.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById("header__search");
    search.addEventListener("submit", getKeyword);
});

async function getKeyword() {
    const homeMain = document.getElementById("home-main");
    homeMain.innerHTML = "";
    homeMain.classList.add("keyword-movie");
    const keyword = document.getElementById("header__search__input").value;
    const keywordAPI = `https://api.themoviedb.org/3/search/movie?api_key=9a488bdcdb8993c3fff35cd18757981d&query=${keyword}`;
    const jsonKeywordData = await fetch(keywordAPI).then(res => res.json());
    // const jsonKeywordDataTotalPages = jsonKeywordData.total_pages;
    for ( let i = 1; i <= 10; i++ ) {
        let keywordMultipleAPI = `${keywordAPI}&page=${i}`;
        let jsonKeywordMultipleData = await fetch(keywordMultipleAPI).then(res => res.json());;
        createKeywordItem(jsonKeywordMultipleData);
    }
};



