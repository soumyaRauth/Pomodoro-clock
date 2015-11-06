$(document).ready(function(){
  var duration=25;
  //var minutes=0;
  var interval=5;
  var timerClock;
  
  $('#clock').text("00"+":"+"00");
  $('#target1').click(function(){
    
    $('#text1').text(duration+=1);
    //minutes=duration;
    
    //$('#clock').text(minutes+":"+seconds);
  });
   $('#target2').click(function(){
    if(duration>0){
    $('#text1').text(duration-=1);
  
    }
  });
  
    $('#target3').click(function(){
    
    $('#text2').text(interval+=1);

  });
  
    $('#target4').click(function(){
    if(interval>0){
    $('#text2').text(interval-=1);
    
    }
  
  });
  
 
 //----function--- 
 
  function startTimer(duration, display,interval) {
    var timer=duration,minutes,seconds;
    var interv=interval,intermin;
    timerClock=setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer< 0) {
          $('h1').text("BREAK TIME");
           intermin = parseInt(interv / 60, 10);
           seconds = parseInt(interv % 60, 10);
          
           intermin = intermin < 10 ? "0" + intermin : intermin;
           seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(intermin + ":" + seconds);
         
          if(--interv<0){
           $('h1').text("Pomodoro clock(Timer)"); 
           timer=duration;
           interv=interval;
          }
        }
    }, 1000);
}

$(document).ready(function() {
  $("#start").click(function() {
    var t = duration * 60;
    var i=interval*60;
    display = $('#clock');
    startTimer(t, display,i);
  });
});
  //--------functionsasds
   $("#stop").click(function(){
  $('#clock').text("00"+":"+"00");
  clearInterval(timerClock);
  duration=25;
  interval=5;
     $('#text1').text(duration);
     $('#text2').text(interval);
});
  
  //-----stop-function
});