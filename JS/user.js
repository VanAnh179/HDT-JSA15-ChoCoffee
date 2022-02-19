const audio = document.querySelector('#audioPlayer');
//duration
const durationContainer = document.getElementById('duration');
const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}
const displayDuration = () => {
    durationContainer.textContent = calculateTime(audio.duration);
}
const seekSlider = document.getElementById('seek_slider');
const setSliderMax = () => {
    seekSlider.max = Math.floor(audio.duration);
}
audio.addEventListener('loadedmetadata', () => {
    displayDuration();
    setSliderMax();
});
const currentTimeContainer = document.getElementById('current_time');
seekSlider.addEventListener('input', () => {
    currentTimeContainer.textContent = calculateTime(seekSlider.value); 
});
seekSlider.addEventListener('change', () => {
    audio.currentTime = seekSlider.value;  
});
audio.addEventListener('timeupdate', () => {
    seekSlider.value = Math.floor(audio.currentTime);
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
});


navInput = document.getElementById('navMobileInput');
function closeNavMb() {
    navInput.checked = true;
}


// Dark/light mode
let theme = document.getElementById('body').style;
accNameC = document.getElementById('accNameC');
intro = document.getElementById('intro').style;
transbox = document.getElementById('transbox').style;
title = document.getElementById('title').style;
track = document.getElementsByClassName('tracks');
Sound = document.getElementById('Sounds').style;
audioControl = document.getElementById('audioControl').style;
audioBox = document.getElementById('audioBox').style;
dark = document.getElementById('dark');
light = document.getElementById('light')
function darkMode() {
    dark.classList.add('currentTheme');
    light.classList.remove('currentTheme');
    theme.background = '#662e06';
    theme.color = '#e4cba6';
    intro.borderColor = '#e4cba6'
    transbox.background = '#461b09';
    transbox.color = '#cfb38a';
    title.color = '#e4cba6';
    accNameC.style.color = '#ff5c50';
    // accNameM.style.color = '#ff5c50';
    Sound.background = '#f1cc94';
    Sound.color = '#6e360d';
    Sound.borderColor = '#b38b4f';
    audioBox.borderColor = '#e2b97a';
    audioBox.background = '#662e069d';
    trackName.style.background = '#daaa7b';
    audioControl.background = '#daaa7b';
    audioControl.boxShadow = '5px 7px #3b1702';
    for (let i = 0; i < track.length; i++) {
        track[i].classList.remove('trackHoverWhite');
        track[i].classList.add('trackHoverDark');
    }
}
function lightMode() {
    dark.classList.remove('currentTheme');
    light.classList.add('currentTheme');
    theme.background = '#e4cba6';
    theme.color = '#301104';
    intro.borderColor = '#461b09'
    transbox.background = '#cfb38a';
    transbox.color = '#301104';
    title.color = '#521e08';
    accNameC.style.color = '#470702';
    // accNameM.style.color = '#470702';
    Sound.background = '#8d3e06';
    Sound.color = '#e4cba6';
    Sound.borderColor = '#301104';
    audioBox.borderColor = 'black';
    audioBox.background = '#e4cba69d';
    trackName.style.background = '#e2b97a';
    audioControl.background = '#e2b97a';
    audioControl.boxShadow = '5px 7px #c59466';
    for (let i = 0; i < track.length; i++) {
        track[i].classList.add('trackHoverWhite');
        track[i].classList.remove('trackHoverDark');
    }
}

// Volume controller (for Playlist)
const volumeSlider = document.getElementById('volume_slider');
volumeSlider.addEventListener('input', function () {
    const value = volumeSlider.value;
    audio.volume = value / 100;
});

// mute btn
const muteI = document.getElementById('mute_icon');
const mute = document.getElementById('mute');
muteI.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (audio.muted == false) {
        audio.muted = true;
        mute.src = '../Image/mute.png';
    } else if (audio.muted == true) {
        audio.muted = false;
        mute.src = '../Image/unmute.png';
    }
})

var playBtn = document.getElementById('play')
// Play/Pause Button:
function myFunction(e) {
    if (audio.paused) {
        audio.play();
        playBtn.src = '../Image/play.png';
    } else {
        audio.pause();
        playBtn.src = '../Image/pause.png';
    }
}

// Playlist
Sounds.onclick = function(e) {
    e.preventDefault();
    var src = document.getElementById('audioSource');
    src.src = e.target.getAttribute('href');
    audio.load();
    audio.play();
    playBtn.src = '../Image/play.png';
    audio.muted = false;
    mute.src = '../Image/unmute.png';
};
// track's name
let trackName = document.getElementById('trackName');
aside = document.getElementById('aside');

for (let index = 0; index < track.length; index++) {
    track[index].addEventListener('click', () => {
        trackName.innerHTML = track[index].innerHTML;
        trackName.style.fontSize = '30px';
        aside.style.display = 'block';
    }) 
}
// Close mobile audio
function closeAudio() {
    aside.style.display = 'none';
    audio.pause();
}


// form
let LOM = document.getElementById('logOutM');
let LOC = document.getElementById('logOutC');
let storeUserData = JSON.parse(localStorage.getItem("userData"));
console.log(storeUserData[0]);
accNameC.innerHTML = storeUserData[0];
let plM = document.getElementById('plM');
let plC = document.getElementById('plC');
plM.addEventListener('click', function() {
    window.location.href = "../HTML/playlist1.html";
})
plC.addEventListener('click', function() {
    window.location.href = "../HTML/playlist1.html";
})
LOC.addEventListener('click', function() {
    window.location.href = "../HTML/index.html";
})
LOM.addEventListener('click', function() {
    window.location.href = "../HTML/index.html";
})
