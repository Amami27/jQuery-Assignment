$(document).ready(function() {
    $('button').click(function say(e) {
        e.preventDefault();
        // let inputField = document.querySelector('input').value;
        let inputField = $('input').val();
        let greet = 'Greetings' + ' ' + inputField;
        $('p').text(greet);
    });
    /******************* 13.On click of any part of the document, a paragraph appears ********************/
    $(window).click(function(e) {
        e.preventDefault();
        $('span').text('I am a hidden secret');
        $('span').slideUp();
        (7000, 'swing', function() {
            $(this).slideUp(5000, 'swing', arguments.callee)
        })
    })
})