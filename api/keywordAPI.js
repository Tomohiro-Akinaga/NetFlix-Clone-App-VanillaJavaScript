window.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById("header__search");
    search.addEventListener("submit", getKeyword);
});

export default async function getKeyword() {
    const keyword = document.getElementById("header__search__input").value;
    const keywordAPI = "https://api.themoviedb.org/3/search/movie?api_key=9a488bdcdb8993c3fff35cd18757981d&query=" + keyword;
    const jsonKeywordData = await fetch(keywordAPI).then(res => res.json());
    console.log(jsonKeywordData);
};



