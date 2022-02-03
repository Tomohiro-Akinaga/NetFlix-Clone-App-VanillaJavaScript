export function startLoading() {
    const loadinng = document.getElementById("loading");
    loadinng.classList.add("is-active");
};

export function finishLoading() {
    const loadinng = document.getElementById("loading");
    loadinng.classList.remove("is-active");
};

