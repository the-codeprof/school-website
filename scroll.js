(function($) {
    $(document).ready(function() {
        // hide navabar first
        $('.navscroll').hide();
        // fade in .navbar
        $(function() {
            $(window).scroll(function() {
                // set the distance user need to scroll before fading
                if ($(this).scrollTop() > 100) {
                    $(".navscroll").fadeIn();
                } else {
                    $(".navscroll").fadeOut();
                }
            });
        });
    });
}(jqery));