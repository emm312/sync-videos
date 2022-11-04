document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);
var player;



function startplayer() 
{
 player = document.getElementById('video-player');
 player.controls = false;
}
function play_vid()
{
 player.play();
}
function pause_vid()
{
 player.pause();
}
function stop_vid() 
{
 player.pause();
 player.currentTime = 0;
}
function change_vol()
{
 player.volume=document.getElementById("change_vol").value;
}
function fullscreen() {
    player.requestFullscreen();
    
}

function sync() {
    let start = 59999999999999999;
    // change the timestart element based on how long until it starts
    
    if (new Date().getTime()>= start) {
        
        // shpw the wrapper
        document.getElementById("player").style.display = "block";

        play_vid();
        let curr = new Date();
        // round curr to nearest second
        let time = (curr.getTime() - start);
        // round time to 2 decimal place
        time /= 1000;
        var seconds = Math.round(time);
        console.log(seconds);
        // if the playback is more than 2 seconds out of sync, sync it
        if (Math.abs(player.currentTime - seconds) > 2) {
            player.currentTime = seconds;
        }
        
        document.getElementById("waiting_for_start").style.display = "none";
        document.getElementById("welkom").innerHTML = "Now playing a video";
        document.body.style.fontSize = "10px";
        document.getElementById("main").style.textAlign = "center";
        document.getElementById("footer").style.display="none"
        
    } else {
        let timeStart = document.getElementById("waiting_for_start");
        let curtime = new Date();
        let time = start - curtime.getTime();
        // convert time to minutes and seconds and hours
        let hours = Math.floor(time / (1000 * 60 * 60));
        let minutes = Math.floor(time / (1000 * 60)) % 60;
        let seconds = Math.floor(time / 1000) % 60;
        timeStart.innerHTML = hours + " hours "+ minutes + " minutes and " + seconds + " seconds until the video starts!";
    }
}

setInterval(sync, 1000);
