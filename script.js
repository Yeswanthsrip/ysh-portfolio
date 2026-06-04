function showCerts(category) {

    const sections = document.querySelectorAll(".cert-content");

    sections.forEach(function(section) {
        section.style.display = "none";
    });

    document.getElementById(category).style.display = "block";
}

window.onload = function() {

    const sections = document.querySelectorAll(".cert-content");

    sections.forEach(function(section) {
        section.style.display = "none";
    });

};