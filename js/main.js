$(document).ready(function () {
    var scroll = new SmoothScroll('a[href*="#"]');

    $('.service-picker a').click(function () {
        var divClass = $('.' + $(this).attr('id'));
        divClass.removeClass('d-none').siblings('div').addClass('d-none');
    });
});