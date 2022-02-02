window.addEventListener("DOMContentLoaded", fetchAiringTodayTV);

export default async function fetchAiringTodayTV() {
    const airgingTodayAPI = "https://api.themoviedb.org/3/tv/airing_today?api_key=9a488bdcdb8993c3fff35cd18757981d&language=en-US&page=1";
    const jsonAiringTodayData = await fetch(airgingTodayAPI).then(res => res.json()).then(data => data.results);
    return jsonAiringTodayData;
}


