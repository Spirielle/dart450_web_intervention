//
//  Cynthia L. McLaughlin
//  March 2017
//
//


$(document).ready(function () {

    setInterval(
        function () {
            var language = navigator.languages[0];
            if (language == "es")
                levelCompleted(5);
        },
        2000);
});
