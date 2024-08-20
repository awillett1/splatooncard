
document.getElementById('profileForm').onsubmit = function(event) {
    event.preventDefault(); 

    var name = document.getElementById('name').value;
    if (name) {
        window.location.href = 'profile.html?name=' + encodeURIComponent(name);
    } else {
        alert('Please enter your name.');
    }
};
