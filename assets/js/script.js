var pressed; 
var pressed = false;

$('#addRowButton').click(function(){

if(pressed == false){

$('#newRow').append('<div class="row" id="insideRow2"><div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 col-tn-1">1</div><div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-tn-4" id="item1"><input id="input1" type="text" class="form-control border-0 rounded-0 text-center" placeholder="Task" aria-label="Username" aria-describedby="basic-addon1"></div><div class="col-lg-3 col-md-2 col-sm-2 col-xs-2 col-tn-2" id="startTime1"></div><!-- <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-tn-2" id="stopTime1"></div> --><div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-tn-2" id="timer1"></div><div class="col-lg-2 col-md-1 col-sm-1 col-xs-1 col-tn-1"><button class="btn btn-outline-light btn-sm" id="start1"><i class="material-icons">play_circle_outline</i></button><button class="btn btn-outline-light btn-sm" id="stop1"><i class="material-icons">stop</i></button><button class="btn btn-outline-light btn-sm" id="reset1"><i class="material-icons">replay</i></button></div></div> <!-- End Row -->')

	pressed = true;
}

else{
	$('#newRow').append('<div class="row" id="insideRow"><div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 col-tn-1">1</div><div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-tn-4" id="item1"><input id="input1" type="text" class="form-control border-0 rounded-0 text-center" placeholder="Task" aria-label="Username" aria-describedby="basic-addon1"></div><div class="col-lg-3 col-md-2 col-sm-2 col-xs-2 col-tn-2" id="startTime1"></div><!-- <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-tn-2" id="stopTime1"></div> --><div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-tn-2" id="timer1"></div><div class="col-lg-2 col-md-1 col-sm-1 col-xs-1 col-tn-1"><button class="btn btn-outline-light btn-sm" id="start1"><i class="material-icons">play_circle_outline</i></button><button class="btn btn-outline-light btn-sm" id="stop1"><i class="material-icons">stop</i></button><button class="btn btn-outline-light btn-sm" id="reset1"><i class="material-icons">replay</i></button></div></div> <!-- End Row -->')

	pressed = false;
}


});