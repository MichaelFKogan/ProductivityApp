// var stamp1;
// var stamp2;
// var clockIn;
// var clockOut;
// var totalTime;
// clockedIn = false;
// var x = 0;
// var formattedDate1;
// var formattedDate2;
// var formattedTime;

// $(document).ready(function() {


    $('#start').click(function(e) {

      // if ($('#punchin').html() == '') {
         
      stamp1 = moment().format("h:mm:ss A")   
      $('#punchin').html('<div class="input-group input-group-sm"><input id="input" type="text" class="form-control border-0 rounded-0 text-center" placeholder=" ' + stamp1 + ' " aria-label="Username" aria-describedby="basic-addon1"></div>');

// } else{}

      // database.ref().push({
      //            clockIn: formattedDate1,  
      //            clockOut: formattedDate2,
      //            totalTime: formattedTime
      //           });
      //  else {
        
      // }
    });

    $('#stop').click(function() {

    // if ($('#punchout').html() == '') {

      stamp2 = moment().format("h:mm:ss A")
      $('#punchout').html('<div class="input-group input-group-sm"><input id="input" type="text" class="form-control border-0 rounded-0 text-center" placeholder=" ' + stamp2 + ' " aria-label="Username" aria-describedby="basic-addon1"></div>');

// $('#difference').append(moment.duration(stamp1.diff(stamp2)).humanize());

// function getTimeInterval(startTime, endTime, lunchTime){
    
//     var start = moment(startTime, "HH:mm");
//     var end = moment(endTime, "HH:mm");
//     var minutes = end.diff(start, 'minutes');
    
//     var interval = moment().hour(0).minute(minutes);
//     interval.subtract(lunchTime, 'minutes');
//     return interval.format("HH:mm");
// }



      // } else {}
//     });


});



