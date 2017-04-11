//
//  Cynthia L. McLaughlin
//  March 2017
//
//

var completed = false;
$(document).ready(function () {

    setInterval(
        function () {
            var language = navigator.languages[0];
            if (language == "es" && !completed)
            {
                completed = true;
                levelCompleted(5);
            }
        },
        2000);
});
