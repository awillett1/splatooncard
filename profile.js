// get query parameters from URL
function getQueryParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// update name based off query param.
window.onload = function() {
    var name = getQueryParam('name');
    if (name) {
        document.getElementById('display-name').textContent = decodeURIComponent(name);
    }
};
