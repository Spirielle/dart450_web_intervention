//
//  Cynthia L. McLaughlin
//  March 2017
//
//

var completed = false;
$(document).ready(function () {
    setInterval(
        function() {
            var cat = $("#img-cat").css("left");
            var bowl = $("#div-bowl-level3").css("left");

            //Removing the "px" at the end
            cat = cat.substring(0, cat.length - 2);
            bowl = bowl.substring(0, bowl.length - 2);

            var distanceBetween = cat - bowl;

            if (distanceBetween > 0 && distanceBetween < 150 && !completed) {
                levelCompleted(3);
                completed = true;
            }
        },
        1000);
});
