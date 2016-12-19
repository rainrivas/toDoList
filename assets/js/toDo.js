console.log("Connected");
var newToDo;
$("li span").on("mouseenter", function() {
    $(this).css("font-weight", "bold");
});

$("li span").on("mouseleave", function() {
    $(this).css("font-weight", "normal");
});

// This could become a "create new to do function which is called upon keypress of +ToDo button"
$("#newToDo").on("keypress", function(event) {
    if (event.which === 13) {
        console.log("You Pressed Enter; I should do something");
        newToDo = "<li><span>X</span>" + $("#newToDo").val() + "</li>";
        $(newToDo).appendTo($("ul"));
        $("#newToDo").val("");
        // once new list added and field cleared, we need to hide the to do list agian
    }
});
