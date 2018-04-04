function checkScroll() {
    var startY = $('#top_navbar').height() * 2;
    if ($(window).scrollTop() > startY) {
        $('#top_navbar').addClass("scrolled");
    } else {
        $('#top_navbar').removeClass("scrolled");
    }
}
if ($('#top_navbar').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
    });
}