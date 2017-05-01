//
//  Cynthia L. McLaughlin
//  March 2017
//
//

var completed = false;
$(document).ready(function () {
    setInterval(
        function () {
            if (!completed && isInTokyo())
            {
                levelCompleted(10);
                completed = true;
            }
        },
        1000);
});

function isInTokyo() {
    var lat = localStorage.getItem("latitude");
    var long = localStorage.getItem("longitude");
    console.log(lat);
    console.log(long);

    return (lat >= 35.5093 && lat <= 35.9001 && long >= 138.943 && long <= 139.9123);

    //Testing in Montreal
    //return (lat >= 45.4027 && lat <= 45.7017 && long >= -73.9767 && long <= -73.4823);
}

