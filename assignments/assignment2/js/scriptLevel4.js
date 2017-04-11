//
//  Cynthia L. McLaughlin
//  March 2017
//
//

var completed = false;
$(document).ready(function () {
    setInterval(
        function () {
            //Also checks winning condition
            if(!completed)
                findSunriseTime();
        },
        2000);
});

function findSunriseTime() {
    //Building and Sending request
    var apiUrl = "https://api.sunrise-sunset.org/json?"
    var timeParameter = "&date=today"
    var latituteParameter = "lat=" + localStorage.getItem("latitude"); //TODO : check if value actually there
    var longitudeParameter = "&lng=" + localStorage.getItem("longitude");

    $.getJSON(apiUrl + latituteParameter + longitudeParameter + timeParameter, sunriseSunsetCallback);
}

function sunriseSunsetCallback(sunriseData) {

    //Check when the sun rises
    sunriseTime = sunriseData.results.sunrise;

    //10:20:00 AM =>  [10, 20, 00 AM]
    var arrayTime = sunriseTime.split(':');

    //Check if sun is rising right now
    var now = new Date();
    if (now.getUTCHours() == arrayTime[0] && (now.getUTCMinutes() >= arrayTime[1] - 5 && now.getUTCMinutes() <= arrayTime[1] + 5))
    {
        completed = true;
        levelCompleted(4);
    }
}