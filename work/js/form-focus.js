$(document).ready(function(){
    $('span').hide();
    $('input').focus(function(){
        $(this).next('span').show().fadeOut('slow');
    });
});