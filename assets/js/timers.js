var timer;
var stop = false;
var play = false;

// CURRENT TIMER

// ON START
    $('#start1').click(function(e) {

// COUNT UP TIMER

function startTimer()
{
    var startTimestamp = moment().startOf("day");
    
    setInterval(function() {
        
        startTimestamp.add(1, 'second');
        
        document.getElementById('timer1').innerHTML = startTimestamp.format('HH:mm:ss');
    }, 1000);
}

startTimer();

        
        if(stop==false && play==false){
        //ADD TIME STAMP
            var stamp1 = moment().format("h:mm:ss A");
        // TIME STAMP
            $('#startTime1').html(stamp1); 
        } 

        if(stop==false && play==false || play==true){
        // CLOCK
            function displayTime() {
                var time = moment().format('h:mm:ss A');
                timer = setTimeout(displayTime, 1000);
                $('#stopTime1').html(time);
            }
            $(document).ready(function() {
                displayTime();
            });
        }
        stop = false;
        play = true;
    });



// ON STOP
//ADD FINISHED TIMESTAMP  
      $('#stop1').click(function() {
        if(stop==false){
      clearTimeout(timer);
      var stamp3 = moment().format("h:mm:ss A")
      $('#stopTime1').html(stamp3);
      stop = true;
      play = true;
      }
      });




// RESET FIELDS
      $('#reset1').click(function() {
      clearTimeout(timer);
      $('#startTime1').html('')
      $('#stopTime1').html('')
      stop = false;
      play = false;
      });



