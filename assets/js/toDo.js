console.log("Connected");
var newToDo;
var addToDo = $("#addToDo");
var toDoEntry = $("#toDoEntry");

addToDo.on("click", function() {
    toDoEntry.toggleClass("hidden");
    console.log("+ ToDo clicked");
});

// This could become a "create new to do function which is called upon keypress of +ToDo button"
toDoEntry.on("keypress", function(event) {
    if (event.which === 13) {
        console.log("You Pressed Enter; I should do something");
        newToDo = "<li><span>X </span>" + toDoEntry.val() + "</li>";
        $(newToDo).appendTo($("ul"));
        toDoEntry.val("");
        toDoEntry.toggleClass("hidden")
            // once new list added and field cleared, we need to hide the to do list agian
    }
});

$("li").on("click", function() {
    $(this).toggleClass("completed");
});

// eventaully turn this into delete enter/exit
$("li span").on("mouseenter", function() {
    $(this).css("font-weight", "bold");
});

$("li span").on("mouseleave", function() {
    $(this).css("font-weight", "normal");
});

$("span").click(function(event){
    $(this).parent().fadeOut(350,function(){
        $(this).remove();
    });
    event.stopPropogation(); // stops the span click from bubbling to li
});