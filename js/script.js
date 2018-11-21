$( document ).ready(function() {
    $("#bt_toggle_input").click(function() {
        handleInputAnimation();
    });
    $("#expendable_input").on("blur",function() {
        $(this).removeClass("show-anim").addClass("hide-anim");
        $("#bt_toggle_input").html(">");
    }).click(function() {
        handleInputAnimation();
    });
});

function handleInputAnimation() {
    var expInput = $("#expendable_input");
    if (expInput.hasClass("hide-anim")) {
        expInput.removeClass("hide-anim").addClass("show-anim");
        $("#bt_toggle_input").html("<");
    } else {
        expInput.removeClass("show-anim").addClass("hide-anim");
        $("#bt_toggle_input").html(">");
    }
}