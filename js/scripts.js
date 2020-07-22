$(document).ready(function() {
    // $("[data-toggle='tooltip']").tooltip();
    $('#mycarousel').carousel({
        interval: 2000
    });
    $('#carouselButton').click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-play').addClass('fa-pause');
        } else {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-pause').addClass('fa-play');
        }
    });

    $('#loginButton').click(function() {
        $('#loginModal').modal('show');
    });

    $('#reserveButton').click(function() {
        $('#reserveModal').modal('show');
    });

});