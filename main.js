$(document).ready( function(){
    var screenHeight = $(window).height();
    $("body").css("height", screenHeight);
    var padding = ((screenHeight-8)/2 - 164)/2;
    $("#top-left, #top-right, #bottom-left, #bottom-right").css("padding-top", padding);
    $("#top-left").css("padding-bottom", padding);
    console.log(padding);
    
    function displayTimeTL(){
        var currentTime = new Date();
        var ampm = "am";
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        $("#top-left-i").html(getTimeString(hours, minutes, seconds));
        $("#top-right-i").html(getTimeString(hours+6,minutes,seconds));
        $("#bottom-left-i").html(getTimeString(hours,minutes+30,seconds));
        $("#bottom-right-i").html(getTimeString(hours+15,minutes,seconds));
    }
    setInterval(function(){
        displayTimeTL();
        
    }, 200);
    
    function getTimeString(hrs, mins, secs){
        var ampm = "AM";
        if ( (hrs >= 12 && hrs < 24) || hrs >=36 )
            ampm = "PM";
        if (ampm == "PM" && hrs %12 ===0)
            hrs = 12;
        else
            hrs = hrs%12;
        if (mins < 10) mins = "0"+mins;
        if (secs < 10) secs = "0"+secs;
        return hrs+":"+mins+":"+secs+" "+ampm;
    }
});