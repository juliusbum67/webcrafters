// Function to get query parameters from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get the username from the URL parameters
const username = getQueryParam('username');

// Insert the username into the page
document.getElementById('username').textContent = username;