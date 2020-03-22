

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



$(document).ready(function () {
    $("body").on("click", ".view-portfolio", function () {
        var dataID = $(this).attr("id");
        console.log(dataID);
        $(".modal-content").empty();
        for (let i = 0; i < portfolio.length; i++) {
            if (i == dataID) {
                var modTitle = $("<h2>").addClass("project-name");
                modTitle.text(portfolio[i].title)
                $(".modal-content").append(modTitle);
                if (portfolio[i].images) {
                    for (let j = 0; j < portfolio[i].images.length; j++) {
                        var modImg = $("<img>").addClass("responsive-img");
                        modImg.attr("src", portfolio[i].images[j]);
                        $(".modal-content").append(modImg);
                    }
                }
                if (portfolio[i].videos) {
                    for (let k = 0; k < portfolio[i].videos.length; k++) {

                        var div = $("<div>").css({
                            'padding-bottom': '20px',
                            'margin': '0px auto'
                        });
                        var h = $("<h4>").text(portfolio[i].videoNames[k])
                        var a = $("<a>")
                        var img = $("<img>");
                        $(img).attr("src", portfolio[i].videoThumbs[k]).addClass("responsive-img vimeo-img").css({
                            'display': 'block'
                        });

                        $(a).addClass("vimeo-link").attr("href", portfolio[i].videos[k]).attr("target", "_blank").text("View " + portfolio[i].videoNames[k] + " on Vimeo")

                        $(div).append(h);
                        $(div).append(img);
                        $(div).append(a)
                        $(".modal-content").append(div);
                        $(".modal-content").append("<hr>");
                    }

                }
            }
        };
    });

    for (let i = 0; i < portfolio.length; i++) {
        var itemDiv = $("<div>").addClass("col s6 m6 l4").addClass("grid-item");
        var cardDiv = $("<div>").addClass("card");
        var cardImg = $("<div>").addClass("card-image")
        var img = $("<img>").addClass("zoom view-portfolio").attr("src", portfolio[i].coverImage);
        var cardContent = $("<div>").addClass("card-content")
        var cardTitle = $("<h5>").addClass("card-title").text(portfolio[i].title);
        var viewBtn = $("<a>").addClass("waves-effect waves-light btn modal-trigger view-portfolio").attr("id", i).attr("href", "#modal1").text("View");
        $(cardImg).append(img)
        $(itemDiv).append(cardDiv);
        $(cardContent).append(cardTitle)
        $(cardContent).append(viewBtn)
        $(cardDiv).append(cardImg)
        $(cardDiv).append(cardContent);

        $("#my-design").prepend(itemDiv);
    }
    setTimeout(function () {
        $('.grid').masonry({
            itemSelector: '.grid-item',
        });
    }, 100);
});

const portfolio = [
    {
        title: "Banners",
        coverImage: "assets/images/banners_tile.jpg",
        images: ["assets/images/Giorgio_SEPCprep_030519.jpg", "assets/images/BeeSweet_SchoolCitrus_082819.jpg", "assets/images/Famous_BlockchainTech_072219.jpg", "assets/images/GovShutdown_012219.jpg", "assets/images/BJs_BreaksGround_042919.jpg", "assets/images/Halsa_SF-Area_070219.jpg", "assets/images/Impossible_Shortage_042919.jpg", "assets/images/Giant_FreeHam_0318119.jpg", "assets/images/IndustryResponds_TomatoSuspensionPact_020819.jpg"],
    },
    {
        title: "Motion Graphics",
        coverImage: "assets/images/mographs.gif",
        videos: ["https://vimeo.com/390898222", "https://vimeo.com/390899992", "https://vimeo.com/390899087", "https://vimeo.com/163035842"],
        videoThumbs: ["assets/images/cover-naturipe.jpg", "assets/images/cover-litehouse.jpg", "assets/images/cover-oppy.jpg", "assets/images/cover-autonomous.jpg"],
        videoNames: ["Naturipe", "Litehouse Dressings", "Oppy Apples", "Autonomous"]
    },
    // {
    //     title: "Layouts",
    //     coverImage: "assets/images/wag-img.png",
    //     images: ["assets/images/wag-img.png", "assets/images/wag-img.png"],
    // },

]
