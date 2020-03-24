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

    $("#darkButton").click(function() {
        if (document.getElementById("darkButton").innerHTML === "Night Mode") {
            document.getElementById("darkButton").innerHTML = "Day Mode";
            $("body").addClass("night-mode");
        } else {
          document.getElementById("darkButton").innerHTML = "Night Mode";
          $("body").removeClass();
        }

    }); 
    
    $("p").click(function() {
        $("p").toggleClass("highlight");


    });


});

