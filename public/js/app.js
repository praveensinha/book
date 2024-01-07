$("form").submit(function (event) {
    event.preventDefault();
    alert("Submit prevented");
});

$(document).on("submit", "form", function (event) {
    var validate = $(this).attr("validate");
    
    if (validate && validate == 'y') {
        event.preventDefault();
        alert("Submit prevented");
    }

});