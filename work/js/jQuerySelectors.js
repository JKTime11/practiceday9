// id selector (select only first element with id)
$(document).ready(function() {
    $('#result').css('background', 'yellow');
});

// class selector
$(document).ready(function() {
    $('.italic').css('font-style', 'italic');
});

// tag selector
$(document).ready(function() {
    $('pre').css('text-shadow', '2px 3px 4px grey');
});

// attribute selector
$(document).ready(function() {
    $('[name]').css({'border': '2px solid blue', 'background': 'pink'}); // multiple css properties
});

// attribute value selector
$(document).ready(function() {
    $('[name=college]').css({'outline': '2px dotted red'});
});