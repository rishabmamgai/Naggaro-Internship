function goTo(id) {
    $('html,body').animate({
        scrollTop: $('#' + id).offset().top - 85}, 'slow');
}
