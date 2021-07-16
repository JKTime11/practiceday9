$(document).ready(function(){
    $('p:first').click(function(){
        $(this).slideUp();
    });
    $('p:nth(1)').dblclick(function(){
        $(this).hide();
    });

    // hover is a combination of mouseenter and  mouseover events
    $('p:last').hover(function(){
        $(this).css({'background-color': 'blue', 'padding': '5px'});
        $(this).text('mouseenter event trigered!');
    }, function(){
        $(this).css({'background-color': '', 'padding': '20px'});
        $(this).text('mouseout event trigered!');
    });

    // on() attaches multiple event listeners to the element
    $('#multi').on({
        "mouseenter": function(){
            $(this).css({'background-color': 'grey', 'padding': '15px'});
            $(this).text('mouseenter event trigered!');
        },
        "click": function(){
            $(this).css({'background-color': 'blue', 'padding': '5px'});
            $(this).text('click event trigered!');
        }, 
        "mouseover": function(){
            $(this).css({'background-color': '', 'padding': '10px'});
            $(this).text('mouseover event trigered!');
        }
    });
})