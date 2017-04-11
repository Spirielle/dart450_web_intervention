//
//  Cynthia L. McLaughlin
//  March 2017
//
//

var completed = false;
$(document).ready(function () {
    setInterval(
        function () {
            var visibility = $("#img-cat").css("visibility");
            var display = $("#img-cat").css("display");
            if (visibility == "visible" && display != "none" && !completed)
            {
                levelCompleted(2);
                completed = true;
            }
        },
        1000);
});
