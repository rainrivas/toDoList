console.log("Connected");
var newToDo;
var addToDo = $("#addToDo");
var toDoEntry = $("#toDoEntry");

addToDo.on("click", function() {
    toDoEntry.toggleClass("hidden");
    toDoEntry.val("");
});

// This could become a "create new to do function which is called upon keypress of +ToDo button"
toDoEntry.on("keypress", function(event) {
    if (event.which === 13) {
        console.log("You Pressed Enter; I should do something");
        newToDo = "<li><span>X</span> " + toDoEntry.val() + "</li>";
        // $(newToDo).appendTo($("ul"));
        $("ul").append(newToDo);
        toDoEntry.val("");
        toDoEntry.toggleClass("hidden")
            // once new list added and field cleared, we need to hide the to do list agian
    }
});

// parent gets the listener so that we can check for clicks on child elements
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// eventaully turn this into delete enter/exit
$("ul").on("mouseenter", "span", function() {
    $(this).css("font-weight", "bold");
});

$("ul").on("mouseleave", "span", function() {
    $(this).css("font-weight", "normal");
});

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(350, function() {
        $(this).remove();
    });
    event.stopPropogation(); // stops the span click from bubbling to li
});
