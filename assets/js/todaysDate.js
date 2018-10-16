// CURRENT TIME
function displayTime() {
    var time = moment().format('hh:mm:ss A');
    $('#currentTime').html("<p style='font-size:.40em;margin:0px;padding-top:15px;'>Time<p>" + time);
    setTimeout(displayTime, 1000);
}

$(document).ready(function() {
    displayTime();
});

// COUNT UP TIMER

function startTimer()
{
    var startTimestamp = moment().startOf("day");
    
    setInterval(function() {
        
        startTimestamp.add(1, 'second');
        
        document.getElementById('countUpTimer').innerHTML = "<p style='font-size:.40em;margin:0px;padding-top:15px;'>Time Passed<p>" +
            startTimestamp.format('HH:mm:ss');
    }, 1000);
}

startTimer();

// LOG IN TIME
var logInTime = moment().format("hh:mm A");

      $('#logInTime').html("<p style='font-size:.40em;margin:0px;padding-top:15px;'>Log In Time<p>" + logInTime);

// TODAY'S DATE

var date = moment().format('MMM.Do');

      $('#date').html("<p style='font-size:.40em;margin:0px;padding-top:15px;'>Date<p>" + date);
