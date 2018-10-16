var timer;
var stop = false;

// CURRENT TIMER

// ON START
    $('#start1').click(function(e) {
      if($('#startTime1').html() == '' && stop == false){
    
    //ADD TIME STAMP
    var stamp1 = moment().format("h:mm:ss A")    

    function displayTime() {
        var time = moment().format('h:mm:ss A');
        timer = setTimeout(displayTime, 1000);
    
    $('#startTime1').html(stamp1);  
    $('#stopTime1').html(time);  
    }

    $(document).ready(function() {
        displayTime();
    });
    }
    });



// ON STOP
//ADD FINISHED TIMESTAMP  
      $('#stop1').click(function() {
        if(stop==false){
      stop = true;
      clearTimeout(timer);
      var stamp3 = moment().format("h:mm:ss A")
      $('#stopTime1').html(stamp3);
      }
      });




// RESET FIELDS
      $('#reset1').click(function() {
      $('#startTime1').html('')
      $('#stopTime1').html('')
      stop = false;
      });



