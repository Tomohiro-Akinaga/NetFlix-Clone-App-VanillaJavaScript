export default function createKeywordItem(json) {
    const homeMain = document.getElementById("home-main");
    for ( let i = 0; i < json.results.length; i++ ) {
        /* a tag */
        const a = document.createElement("a");
        a.href = "#";
        a.id = "home-main__raw__item";
        a.classList = "home-main__raw__item";
        /* img tag */
        const img = document.createElement("img");
        img.src = "https://image.tmdb.org/t/p/w1280" + json.results[i].backdrop_path;
        img.id = "home-main__raw__item__img";
        img.classList = "home-main__raw__item__img";
        a.appendChild(img);
        /* append a tag to home main div */
        homeMain.appendChild(a);
    }
};