

//
M.AutoInit();

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
});

$(document).ready(function () {
    $('.materialboxed').materialbox();
});


var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
});

$(document).ready(function () {
    $('.slider').slider();
});

$(document).ready(function () {
    $('.sidenav').sidenav();
});

$(".code-deployment").on("click", function () {
    window.location = $(this).attr("data-url");
});