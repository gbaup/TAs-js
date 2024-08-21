function changeStyle() {
    var input = document.getElementById("input");
    if (input.className === "focus") {
        input.className = "notFocus";
    } else {
        input.className = "focus";
    }

}