window.addEventListener("DOMContentLoaded", () => {
    const accordion = document.getElementById("header__genre__accordion");
    accordion.addEventListener("click", displayGenre);
});

function displayGenre() {
    const genre = document.getElementById("header__genre__list");
    if ( genre.classList.contains("is-active") === true ) {
        genre.classList.remove("is-active");
    } else {
        genre.classList.add("is-active");
    }
 };