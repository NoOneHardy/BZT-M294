$(document).ready(function () {
    $('.collapsible').collapsible();
});

$('a.delete').click(function (e) { 
    e.preventDefault();
    const tr = $(this).parent().parent();
    console.log(tr.attr('data-id'));
    tr.remove();
});

$('a.edit').click(function (e) {
    e.preventDefault();
    console.log($(this).attr('href'));
});