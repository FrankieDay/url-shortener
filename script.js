document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the form submission
    document.getElementById("urlForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var originalUrl = document.getElementById("originalUrl").value;
        var shortUrl = generateShortUrl(originalUrl);
        document.getElementById("shortUrl").value = shortUrl;
        document.getElementById("shortLink").style.display = "block";

        // Store the mapping between short and long URLs in localStorage
        var urlMappings = JSON.parse(localStorage.getItem("urlMappings")) || {};
        urlMappings[shortUrl] = originalUrl;
        localStorage.setItem("urlMappings", JSON.stringify(urlMappings));
    });
});

function generateShortUrl(originalUrl) {
    // Simple technique to generate a random string
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var shortUrl = 'https://short.url/';
    for (var i = 0; i < 6; i++) {
        shortUrl += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return shortUrl;
}

