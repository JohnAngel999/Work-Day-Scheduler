//Time section variables
$(document).ready(function(){
  var currentDate = moment().format("MMMM Do, YYYY");
  var currentTime = moment().format("hh:mm:ss A");
  var currentHour;
  var possibleHours = {
    before: ["12AM","01AM","02AM","03AM","04AM","05AM","06AM","07AM", "08AM"],
    business: ['09AM',"10AM","11AM","12PM","01PM","02PM","03PM","04PM","O5PM"],
    after: ["06PM","07PM","08PM","09PM","10PM","11PM"]
  };

  function init() {
    //Display current date
    $("#date").text(currentDate);
    //Display current time
    $("#time").text(currentTime);
    //Colors based on current time
    timeColor();
    //Update current date and time every second
    let currentTimer = setInterval(function() {
      currentDate = moment().format("MMMM Do, YYYY");
      $("#date").text(currentDate);
      currentTime = moment().format("hh:mm:ss A");
      $("#time").text(currentTime);
      timeColor();
    }, 1000);
    }


    // Change text area to a specific color for past, prest and future hours
    function timeColor(){
      currentHour = moment().format("hhA");
      //If currenthours is before 9am set all hours to background color to gray
      if (possibleHours.before.indexOf(currentHour) !==-1){
        $(".hourNotes").css("background-color", "#d3d3d3");
      
    }

    //if currenthous is between 9 and 5
    if (possibleHours.business.indexOf(currentHour) !== -1){
      //set id that matches currenthour to background color to lightblue
      $("#" + currentHour).css("background-color", "#A1C8E7");
      //Set hours before currenthour to background-color gray
      for (let i = 0; i < possibleHours.business.indexOf(currentHour); i++){
        $("#" + possibleHours.business[i]).css("#background-color"), "#d3d3d3");
      }
    // set all hours after currenthour to background color to aqua
    for (
      let i = possibleHours.business.length - 1;
      i > possibleHours.business.indexOf(currentHour);
      i--
    ) {
      $("#" + possibleHours.business[i]).css("background-color", "#88d8c0");
    }
    }
  }









  }