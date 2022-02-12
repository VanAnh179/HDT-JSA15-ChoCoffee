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
intro = document.getElementById('intro').style;
transbox = document.getElementById('transbox').style;
title = document.getElementById('title').style;
track = document.getElementsByClassName('tracks');
Sound = document.getElementById('Sounds').style;
audioControl = document.getElementById('audioControl').style;
audioBox = document.getElementById('audioBox').style;
formContainerM = document.getElementById('formContainerM').style;
formContainerC = document.getElementById('formContainerC').style;
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
    Sound.background = '#f1cc94';
    Sound.color = '#6e360d';
    Sound.borderColor = '#b38b4f';
    audioBox.borderColor = '#e2b97a';
    audioBox.background = '#662e069d';
    trackName.style.background = '#daaa7b';
    audioControl.background = '#daaa7b';
    audioControl.boxShadow = '5px 7px #3b1702';
    formContainerC.background = '#daaa7b';
    formContainerC.boxShadow = '8px 13px #3b1702';
    formContainerM.background = '#daaa7b';
    formContainerM.boxShadow = '8px 13px #3b1702';
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
    Sound.background = '#8d3e06';
    Sound.color = '#e4cba6';
    Sound.borderColor = '#301104';
    audioBox.borderColor = 'black';
    audioBox.background = '#e4cba69d';
    trackName.style.background = '#e2b97a';
    audioControl.background = '#e2b97a';
    audioControl.boxShadow = '5px 7px #c59466';
    formContainerC.background = '#e2b97a';
    formContainerC.boxShadow = '8px 13px #c59466';
    formContainerM.background = '#e2b97a';
    formContainerM.boxShadow = '8px 13px #c59466';
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

// Play/Pause Button:
function myFunction(e) {
    
    var playBtn = document.getElementById('play')
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
let formMobile = document.querySelector('.formMobile');
const formSubmitC = document.getElementById("formContainerC");
const formSubmitM = document.getElementById("formContainerM");
const signInM = document.getElementById('signInM');
function signUp() {
    formMobile.style.display = 'block';
    signInM.style.display ='none';
    formSubmitM.style.display ='block';
}
function closeF() {
    formMobile.style.display = 'none';
}
function signIn() {
    formMobile.style.display = 'block';
    formSubmitM.style.display ='none';
    signInM.style.display ='block';
}


let Info = []
if (!(JSON.parse(localStorage.getItem('Info')))) {
    localStorage.setItem("Info", JSON.stringify(Info));
}

formSubmitC.addEventListener("submit", function(event) {
    event.preventDefault();
    const data={
    name: formSubmitC.nameC.value.trim(),
    email: formSubmitC.emailC.value.trim(),
    password: formSubmitC.passwordC.value.trim(),
    }
    
    let x = JSON.parse(localStorage.getItem("Info"));
    if (x.length > 0) {
    Info = [...x];
    }
    Info.push(data);
    localStorage.setItem("Info", JSON.stringify(Info));

    formSubmitC.nameC.value = "";
    formSubmitC.emailC.value = "";
    formSubmitC.passwordC.value = "";
    alert('You have created new account');
    closeF();
    // window.location.href = "../HTML/afterSign-in.html";
})
formSubmitM.addEventListener("submit", function(event) {
    event.preventDefault();
    const data={
    name: formSubmitM.nameM.value.trim(),
    email: formSubmitM.emailM.value.trim(),
    password: formSubmitM.passwordM.value.trim(),
    }
    
    let x = JSON.parse(localStorage.getItem("Info"));
    if (x.length > 0) {
    Info = [...x];
    }
    Info.push(data);
    localStorage.setItem("Info", Info);

    formSubmitM.nameM.value = "";
    formSubmitM.emailM.value = "";
    formSubmitM.passwordM.value = "";
    alert('You have created new account');
    closeF();
    // window.location.href = "../HTML/afterSign-in.html";
    
    
})

// storeInfo.forEach(function(item) {
//     console.log(item);
// });
// for (let k = 0; k < storeInfo.length; k++) {
        
//         
// }


// let storeInfo = JSON.parse(localStorage.getItem("Info"));         
   
// function check(eve) {
//     eve.preventDefault();
    
//     const data={
//         email: signInM.userMail.value.trim(),
//         password: signInM.userPw.value.trim(),
//     }
//     console.log(data)
    // storeInfo.forEach(function(item) {
    //     var aProps = Object.getOwnPropertyNames(item);
    //     for (let b = 0; b < aProps.length; b++) {
    //     var propName = aProps[b];          
    //      // Nếu giá trị của cùng một property mà không bằng nhau,
    //      // thì 2 objects không bằng nhau.
    //     if (item[propName] !== data[propName]) {             
    //         console.log('hi');      
    //     } else {
    //         console.log('bye');
    //     }
    //     }
    // });
    
     
    // let userMail = document.getElementById("userMail");
    //     let userPw = document.getElementById("userPw");
    //     if (userMail.value == storeMail
    //     &&
    //     userPw.value == storePw
    //     ) {
    //     alert("You are logged in");
    //     // function toHomePage() {
    //     //     window.location.replace("http://stackoverflow.com")
    //     // };
    //     // ;
    //     // break;
    //     }
    //     else {
    //     alert("Error on login");
    //     // break;
    //     }
    // }
    
    
    // lấy thành công email + password
  
    // C2:
    // let storePw = localStorage.getItem("pw")
  
    

