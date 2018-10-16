var timer;
var time;
var stop = false;
var play = false;
var reset = false;
var interval;

// CURRENT TIMER

// ON START
    $('#start1').click(function(e) {

// COUNT UP TIMER
        function startTimer()
        {
            var startTimestamp = moment().startOf("day");
                interval = setInterval(function() {
                startTimestamp.add(1, 'second');
                document.getElementById('timer1').innerHTML = startTimestamp.format('HH:mm:ss');
            }, 1000);
        }
        startTimer();
// COUNT UP TIMER

// CLOCK COUNTING UP
            var stamp1 = moment().format("h:mm A");
            function displayTime() {
            var time = moment().format('h:mm A');
                timer = setTimeout(displayTime, 1000);
                $('#startTime1').html(stamp1+' - '+time); 
            }
            $(document).ready(function() {
                displayTime();});
                    //ADD TIME STAMP AND CLOCK

        // START

// CLOCK COUNTING UP
        
    }); //END START CLICK



// ON STOP
//ADD FINISHED TIMESTAMP  
      $('#stop1').click(function() {
      clearTimeout(timer);
      clearInterval(interval);
      var stamp3 = moment().format("h:mm:ss A")
      $('#stopTime1').html(stamp3);
      });




// RESET FIELDS
      $('#reset1').click(function() {
      clearTimeout(timer);
      clearInterval(interval);
      $('#startTime1').html('');
      $('#stopTime1').html('');
      $('#timer1').html('');
      stop = false;
      play = false;
      reset = true;
      });



