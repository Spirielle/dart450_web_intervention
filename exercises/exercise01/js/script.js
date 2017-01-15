$(document).ready(function() {

  $(document).keydown(function (event) {

    var color = $("#text").css("color");
    var rgbValues = color.slice(4,-1).split(','); //slice(4, -1) means From index 4 until 1 before the end
    var increment = event.shiftKey ? -4 : 4;

      //82 = r
      if (event.which == 82)
      {
        rgbValues[0] = (parseInt(rgbValues[0]) + increment + 256) % 256;
      }

      //71 = g
      if (event.which == 71)
      {
        rgbValues[1] = (parseInt(rgbValues[1]) + increment + 256) % 256;
      }

      //66 = b
      if (event.which == 66)
      {
        rgbValues[2] = (parseInt(rgbValues[2]) + increment + 256) % 256;
      }

      var newColor = "rgb(" + rgbValues[0] + ", " + rgbValues[1] + ", " + rgbValues[2] + ")";
      $("#text").css("color", newColor);
  });

});
