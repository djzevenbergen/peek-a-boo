$(document).ready(function() {
    $("#walrusButton").click(function() {
        $("#initially-showing").fadeToggle();
        $("#initially-hidden").fadeToggle();
        if (document.getElementById("walrusButton").innerHTML === "Show Image") {
            document.getElementById("walrusButton").innerHTML = "Hide Image";
        } else {
          document.getElementById("walrusButton").innerHTML = "Show Image";
        }
    });
});

