var currentDate = document.getElementById('currentDay');
var saveBtn = document.getElementById('.saveBtn');

//acquire and print current date
var now = moment();
currentDate.textContent = now.format('dddd Do MMMM, YYYY')
//end print date

//color time blocks
const currentHour = now.hour();
console.log(currentHour)
function timeBlockColor(){
    $(".time-block").each(function(){
        var hour = parseInt($(this).attr("id"));
        if (currentHour<hour){
            $(this).addClass("future");
        } else if (currentHour === hour){
            $(this).addClass("present");
        }else if (currentHour>hour){
            $(this).addClass("past");
        }
    })
};

//local storage save
$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var description = $(this).siblings(".description").val();
        var timeOf = $(this).parent().attr("id");
        localStorage.setItem(timeOf,description);
    })
})

//local storage retrieval
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
timeBlockColor();