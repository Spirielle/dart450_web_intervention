//
//  Cynthia L. McLaughlin
//  March 2017
//
//

var completed = false;
$(document).ready(function () {
    setInterval(
        function () {
            if (!navigator.onLine && !completed)
            {
                levelCompleted(8);
                completed = true;
            }
        },
        1000);
});


