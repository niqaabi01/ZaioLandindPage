$(document).ready(function() {
    $(document).scroll(function() {
        var $nav = $(".top-nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

// $(document).ready(function() {
//     $('.menu-toggler').on("click", function() {
//         $(this).toggleClass("open");
//         $(".top-nav").toggleClass("open");

//     })
// });* only execute this script when the document is ready */