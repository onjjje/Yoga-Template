// video 
var overlay = document.getElementById('overlay');
var vid = document.getElementById('video');

if (overlay.addEventListener) {
    overlay.addEventListener("click", play, false);
} else if (overlay.attachEvent) {
    overlay.attachEvent("onclick", play);
}

function play() {
    if (vid.paused) {
        vid.play();
        overlay.className = "o";
    } else {
        vid.pause();
        overlay.className = "";
    }
}
// scroll href 
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.scrollto').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});