if (window.matchMedia("prefers-color-scheme: light").matches == true) {
    document.getElementById("githubSocialIcon").setAttribute("href", "github_mark_(lightmode).png");
} else {
    document.getElementById("githubSocialIcon").setAttribute("href", "github_mark_(darkmode).png");
}