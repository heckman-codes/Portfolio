

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
    window.open($(this).attr("data-url"));
});

// $(".portfolio-group").on("click"), function () {
//     $("#images-section").empty();
//     $("#project-title").text(portfolio.title)
//     for (let i = 0; i < portfolio.image.length; i++) {
//         var img = $("<img>").addClass("portfolio-image").attr("src", portfolio.image[i])
//         $("#images-section").append(img);
//     }
// }

// const portfolio = [
//     {
//         title: "Newsletters",
//         image: ["assets/images/...", "assets/images/..."],
//         description: "Description",
//     },

// ]