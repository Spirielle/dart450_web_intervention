//
//  Cynthia L. McLaughlin
//  March 2017
//
//

var completed = false;
$(document).ready(function () {
    setInterval(
        function () {
            var isFavoriteBox = typeof InstallTrigger !== 'undefined';
            if (isFavoriteBox && !completed)
            {
                levelCompleted(9);
                completed = true;
            }
        },
        1000);
});


