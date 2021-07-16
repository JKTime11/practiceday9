$(document).ready(function(){
    $('select').change(function(){
        let selectedOption = $(this).val();
        $(this).find(':selected').css('background', 'green');
        $('#result').text('You selected : '+selectedOption);
    })
})