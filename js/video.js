// Add js here.
var video = document.getElementById("videoplayer");

video.autoplay = false;
video.load();
video.loop = false;

var playBtn = document.getElementById("play");
playBtn.addEventListener("click", function() {
    video.play();
});

var pauseBtn = document.getElementById("pause");
pauseBtn.addEventListener("click", function() {
    video.pause();
});

var slowBtn = document.getElementById("slower");
slowBtn.addEventListener("click", function() {
    if (video.playbackRate == 0.5) {
        alert("Video is at slowest speed!")
        
    } else {
        video.playbackRate /= 2;
    }
});

var fastBtn = document.getElementById("faster");
fastBtn.addEventListener("click", function() {
    if (video.playbackRate == 2) {
        alert("Video is at fastest speed!")
        
    } else {
        video.playbackRate *= 2;
    }
});

var skipBtn = document.getElementById("skip");
skipBtn.addEventListener("click", function() {
    video.currentTime += 15;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    };
});

var muteBtn = document.getElementById("mute");
muteBtn.addEventListener("click", function() {
    switch (video.muted) {
        case true:
            video.muted = false
            muteBtn.innerHTML = "Mute"
            vol.value = 100
            document.getElementById("volume").innerHTML = vol.value + "%";
            break;
        case false:
            video.muted = true
            muteBtn.innerHTML = "Unmute"
            vol.value = 0
            document.getElementById("volume").innerHTML = vol.value + "%";
            break;
    }
});

var vol = document.getElementById("slider");
vol.addEventListener("change", function() {
    video.volume = vol.value / 100;
    document.getElementById("volume").innerHTML = vol.value + "%";
});