
// CLOCK




// LOG IN TIME FROZEN

function digi() {
  var date = new Date(),
      hour = date.getHours(),
      minute = checkTime(date.getMinutes()),
      ss = checkTime(date.getSeconds());

  function checkTime(i) {
    if( i < 10 ) {
      i = "0" + i;
    }
    return i;
  }

if ( hour > 12 ) {
  hour = hour - 12;
  if ( hour == 12 ) {
    hour = checkTime(hour);

  document.getElementById("time").innerHTML = "<p style='font-size:.40em;margin:0px;padding-top:15px;'>Log In Time<p>" + hour+":"+minute+ " AM";
  }
  else {
    hour = checkTime(hour);

    document.getElementById("time").innerHTML = "<p style='font-size:.40em;margin:0px;padding-top:15px;'>Log In Time<p>" + hour+":"+minute+" PM";
  }
}
else {
  document.getElementById("time").innerHTML = "<p style='font-size:.40em;margin:0px;padding-top:15px;'>Log In Time<p>" + hour+":"+minute+" AM";;
}
// var time = setTimeout(digi,1000);
}



// CURRENT TIME RUNNING

function digi1() {
  var date = new Date(),
      hour = date.getHours(),
      minute = checkTime(date.getMinutes()),
      ss = checkTime(date.getSeconds());

  function checkTime(i) {
    if( i < 10 ) {
      i = "0" + i;
    }
    return i;
  }

if ( hour > 12 ) {
  hour = hour - 12;
  if ( hour == 12 ) {
    hour = checkTime(hour);
  document.getElementById("time1").innerHTML = "<p style='font-size:.40em;margin:0px;padding-top:15px;'>Current Time<p>" + hour+":"+minute+" AM";
  }
  else {
    hour = checkTime(hour);
    document.getElementById("time1").innerHTML = "<p style='font-size:.40em;margin:0px;padding-top:15px;'>Current Time<p>" + hour+":"+minute+" PM";
  }
}
else {
  document.getElementById("time1").innerHTML = "<p style='font-size:.40em;margin:0px;padding-top:15px;'>Current Time<p>" + hour+":"+minute+" AM";;
}
var time1 = setTimeout(digi1,1000);
}



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

