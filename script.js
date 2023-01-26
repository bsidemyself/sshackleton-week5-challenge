// uses dayJS to get current date and time of page load and fills it to the header
var todaysDate = dayjs().format('dddd, MMM D, YYYY [at] hh:mm a');
$("#currentDay").html(todaysDate);

$(document).ready(function () {
// listener for save button to store entered text and record time it was entered
    $(".saveBtn").on("click", function () {

        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");


        localStorage.setItem(time, text);
    })
// function to get current time   
    function timeTracker() {
        var rightNow = dayjs().hour();

        $(".time-block").each(function () {
        // this will find which hour id is the current one being saved with a task
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            //compares the hour div with the current hour and gives or removes a class
            if (blockTime < rightNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === rightNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
    // these are to show what was stored on each hour on the schedule
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})
console.log;