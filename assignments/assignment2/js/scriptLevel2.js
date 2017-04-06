//
//  Cynthia L. McLaughlin
//  March 2017
//
//


$(document).ready(function () {
    setInterval(
        function () {
            var visibility = $("#img-cat").css("visibility");
            var display = $("#img-cat").css("display");
            if(visibility == "visible" && display != "none")
                levelCompleted(2);
        },
        1000);
});
