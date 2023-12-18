$('#nav-mobile>li').on('click', function (e) {
    e.preventDefault();
    $('#nav-mobile>li.active').removeClass('active');
    $(this).addClass('active');

    $.get($(this).children('a').attr('href'), (template) => {
        $('#content').html(template);
    });
});

$(document).ready(function () {
    $('.test').each(function (id, el) {
        $(this).hide();
    });
});