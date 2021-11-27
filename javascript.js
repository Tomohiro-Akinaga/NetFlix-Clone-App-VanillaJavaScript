// APIURL = https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9a488bdcdb8993c3fff35cd18757981d&page=1;
// IMGPATH = "https://image.tmdb.org/t/p/w1280";
// SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=9a488bdcdb8993c3fff35cd18757981d&query=";


//  Function of fetching the data
fetchData("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9a488bdcdb8993c3fff35cd18757981d&page=1");

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    const movieData = await data.results;
    displayData(movieData);
};

//  Function of displaying data
function displayData(dataInfo) {    
    const main = document.getElementById("main");
    main.innerHTML = "";

    dataInfo.forEach((movie) => {
        const image = movie.backdrop_path;
        const title = movie.original_title;
        
        const movieItem = document.createElement("div");
        movieItem.classList.add("movie");
        movieItem.innerHTML = `
            <a href="#" id="link"> 
            <img src="${"https://image.tmdb.org/t/p/original" + image}" />
            <div class="movie-info">
            <h3>${title}</h3>
            </div>
            </a>
            `;
        main.appendChild(movieItem);

        // When the item is clicked
        const a = document.getElementById("link");
        a.addEventListener("click", displayDesc);
        function displayDesc() {
            // movieItem.innerHTML = `<p>${overview}<p>`
            console.log(movieItem);
        }
    });
};



// When the search bottun is clicked
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const search = document.getElementById("search");
    const keyword = search.value;
    fetchData("https://api.themoviedb.org/3/search/movie?&api_key=9a488bdcdb8993c3fff35cd18757981d&query=" + keyword);
    search.value = "";
});


