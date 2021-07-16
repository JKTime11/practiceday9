$(document).ready(function() {
    $('tr:even').css('background-color', 'pink');
    $('tr:odd').css('background-color', 'grey');

    $('p:first').css('color', 'pink');
    $('p:last').css('background-color', 'red');
    $('p:nth-of-type(3)').css('color', 'blue');  // selects in given scope only & counts from 1
    $('p:nth(2)').css('text-shadow', '2px 3px 5px blue');  // it can select in any scope & counts from 0

    $('form :text').css('background-color', 'aqua'); // give space between form & :
    $('input:password').css('outline', '2px solid maroon'); // don't give space between input & :
    $('form :submit').css('color', 'red');
});