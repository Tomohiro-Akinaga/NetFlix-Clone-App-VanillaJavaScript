// Image path
// https://image.tmdb.org/t/p/original

// Get details including genre;
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=9a488bdcdb8993c3fff35cd18757981d

// APIURL
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9a488bdcdb8993c3fff35cd18757981d&page=1

const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9a488bdcdb8993c3fff35cd18757981d&page=1";
const SEARCH_API_URL = "https://api.themoviedb.org/3/search/movie?&api_key=9a488bdcdb8993c3fff35cd18757981d&query=";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function movieInfo(movieData) {
    const response = await fetch(movieData);
    const data = await response.json();
    
    displayInfo(data.results);
};

movieInfo(API_URL);

function displayInfo(dataInfo) {
    //console.log(dataInfo);
    main.innerHTML = "";
    // console.log(main);

    dataInfo.forEach((movie) => {
        // console.log(movie);
        const image = movie.backdrop_path;
        const title = movie.original_title;
        const category = movie.genre_ids;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML = `
            <a href="#" id="link"> 
            <img src="${"https://image.tmdb.org/t/p/original" + image}" alt="${title}" />
            <div class="movie-info">
            <h3>${title}</h3>
            </div>
            </a>
            `;
        main.appendChild(movieEl);
        
    });
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const keyword = search.value;
    
    if (keyword) {
        movieInfo(SEARCH_API_URL + keyword);
    }
});


