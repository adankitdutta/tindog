$(".feature-class").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#features").offset().top
    }, 1000);
});

$(".price-class").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#pricing").offset().top
    }, 1000);
});

$(".download-class").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#cta").offset().top
    }, 1000);
});
