$(document).ready(function() {
    $('#contactForm').submit(function(e) {
        e.preventDefault();

        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "POST",
            data: {
                name: $('input[type=text]').val(),
                email: $('input[type=email]').val(),
                message: $('textarea').val()
            },
            success: function() {
                alert("Form submitted successfully! :)");
            }
        });
    });
});