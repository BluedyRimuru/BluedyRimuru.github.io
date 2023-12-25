const urlParams = new URLSearchParams(window.location.search);
const body = document.body;

if (urlParams.has('theme', 'dark')) { body.classList.toggle("dark"); }

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark");
        urlParams.set('theme', body.classList.contains("dark") ? 'dark' : 'light');
        const newURL = `${window.location.origin}${window.location.pathname}?${urlParams.toString()}`;
        window.history.pushState({ path: newURL }, '', newURL);
    });
});