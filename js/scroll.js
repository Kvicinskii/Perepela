$(document).ready(function() {
    $("a.nav-link").click(function(){
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 3000,
            easing: "swing"
        });
        return false;
    });
});
