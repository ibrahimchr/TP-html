document.getElementById("learnMore").addEventListener("click", function() {
    window.scrollTo({
        top: document.getElementById("about").offsetTop,
        behavior: 'smooth'
    });
});
