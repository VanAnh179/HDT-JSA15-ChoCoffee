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
let accNameM = document.getElementById('accNameM');
let accNameC = document.getElementById('accNameC');
let LOM = document.getElementById('logOutM');
let LOC = document.getElementById('logOutC');
let log = document.getElementsByClassName('log');
let formMobile = document.getElementById('formMobile');
let errorLoginC = document.getElementById('errorLoginC');
let errorLoginM = document.getElementById('errorLoginM');
const formSubmitC = document.getElementById("formContainerC");
const formSubmitM = document.getElementById("formContainerM");
const signInM = document.getElementById('signInM');
const signInC = document.getElementById('signInC');
function signUp() {
    formMobile.style.display = 'block';
    signInM.style.display ='none';
    formSubmitM.style.display ='block';
}
function closeF() {
    formMobile.style.display = 'none';
    errorLoginM.style.display = 'none';
    errorLoginC.style.display = 'none';
}
function signIn() {
    formMobile.style.display = 'block';
    formSubmitM.style.display ='none';
    signInM.style.display ='block';
}
function loginC() {
    formSubmitC.style.display ='none';
    signInC.style.display = 'block';
    errorLoginC.style.display = 'none';
}
function regC() {
    formSubmitC.style.display ='block';
    signInC.style.display = 'none';
    errorLoginC.style.display = 'none';
}


let Info = [];
let userData = [];
let demoData = {
    name: '1',
    email: 'ab@gmail.com',
    password: '1',
}
if (!(JSON.parse(localStorage.getItem('Info')))) {
    Info.push(demoData);
    localStorage.setItem("Info", JSON.stringify(Info));
}
if (!(JSON.parse(localStorage.getItem('userData')))) {
    localStorage.setItem("userData", JSON.stringify(userData));
}
let storeUserData = JSON.parse(localStorage.getItem("userData"));
let storeInfo = JSON.parse(localStorage.getItem("Info"));
console.log(storeInfo);
formSubmitC.addEventListener("submit", function(event) {
    event.preventDefault();
    const data={
    name: formSubmitC.nameC.value.trim(),
    email: formSubmitC.emailC.value.trim(),
    password: formSubmitC.passwordC.value.trim(),
    }
    let a = true;
    for (let q = 0; q < storeInfo.length; q++) {
        if (data.email === storeInfo[q].email) {
            a = false;
        }
    }
    if (a == false) {
        // console.log('bye');
        formSubmitC.nameC.value = "";
        formSubmitC.emailC.value = "";
        formSubmitC.passwordC.value = "";
        alert('This account already exists. Please try to login.');
    } else if (formSubmitC.passwordC.value.length < 8) {
        formSubmitC.passwordC.value = "";
        alert('Password must be at least 8 characters long.');
    } else if (formSubmitC.nameC.value.length > 10) {
        formSubmitC.nameC.value = "";
        formSubmitC.passwordC.value = "";
        alert('Account name cannot exceed 10 characters.');
    } else if (a == true) {
        if (storeInfo.length > 0) {
            Info = [...storeInfo];
        }
        Info.push(data);
        localStorage.setItem("Info", JSON.stringify(Info));
        formSubmitC.nameC.value = "";
        formSubmitC.emailC.value = "";
        formSubmitC.passwordC.value = "";
        alert('You have created new account');
        closeF();
        location.reload();
    } else {
        alert('ERROR. PLEASE TRY AGAIN.')
        location.reload();
    }
})
formSubmitM.addEventListener("submit", function(event) {
    event.preventDefault();
    const data={
    name: formSubmitM.nameM.value.trim(),
    email: formSubmitM.emailM.value.trim(),
    password: formSubmitM.passwordM.value.trim(),
    }
    let a = true;
    for (let q = 0; q < storeInfo.length; q++) {
        if (data.email === storeInfo[q].email) {
            a = false;
        }
    }
    if (a == false) {
        // console.log('bye');
        formSubmitM.nameM.value = "";
        formSubmitM.emailM.value = "";
        formSubmitM.passwordM.value = "";
        alert('This account already exists. Please try to login.');
    } else if (formSubmitM.passwordM.value.length < 8) {
        formSubmitM.passwordM.value = "";
        alert('Password must be at least 8 characters long.');
    } else if (formSubmitM.nameM.value.length > 10) {
        formSubmitM.nameM.value = "";
        formSubmitM.passwordM.value = "";
        alert('Account name cannot exceed 10 characters.');
    } else if (a == true) {
        if (storeInfo.length > 0) {
            Info = [...storeInfo];
        }
        Info.push(data);
        localStorage.setItem("Info", JSON.stringify(Info));
        formSubmitM.nameM.value = "";
        formSubmitM.emailM.value = "";
        formSubmitM.passwordM.value = "";
        alert('You have created new account');
        closeF();
        location.reload();
    } else {
        alert('ERROR. PLEASE TRY AGAIN.')
        location.reload();
    }
    // console.log('bye');
    // if (storeInfo.length > 0) {
    //     Info = [...storeInfo];
    // }
    // Info.push(data);
    // localStorage.setItem("Info", JSON.stringify(Info));

    // formSubmitM.nameM.value = "";
    // formSubmitM.emailM.value = "";
    // formSubmitM.passwordM.value = "";
    // alert('You have created new account');
    // closeF();
})


signInM.addEventListener('submit', function(event) {
    event.preventDefault();
    const dataM={
        email: signInM.userMail.value.trim(),
        password: signInM.userPw.value.trim(),
    };

    for (let m = 0; m < storeInfo.length; m++) {
        if  (dataM.email !== storeInfo[m].email || dataM.password !== storeInfo[m].password) {
            signInM.userMail.value = '';
            signInM.userPw.value = '';
            errorLoginM.style.display = 'inline';
        } else if (dataM.email === storeInfo[m].email && dataM.password === storeInfo[m].password) {
            // accNameM.style.display = 'inline-block';
            // accNameC.style.display = 'inline-block';
            accNameC.innerHTML = storeInfo[m].name;
            accNameM.innerHTML = storeInfo[m].name;
            // for (let l = 0; l < log.length; l++) {
            //     log[l].style.display = 'none'; 
            // }
            // closeF();
            if (storeUserData.length > 0) {
                userData = [...storeUserData];
            }
            userData.splice(1, accNameC.length);
            userData.unshift(accNameC.innerHTML);
            localStorage.setItem("userData", JSON.stringify(userData));
            window.location.href = "../HTML/playlist1.html";
            break;
        } else {
            alert('ERROR. PLEASE TRY AGAIN.')
            location.reload();
        }
    };
    // storeInfo.forEach(function(item) {
    //     let aProps = Object.values(item);
    //     // console.log(aProps[1], aProps[2]);
    //     if (aProps[2] !== Object.values(dataM)[1] || aProps[1] !== Object.values(dataM)[0]) {
    //         signInM.userMail.value = '';
    //         signInM.userPw.value = '';
    //         errorLoginM.style.display = 'inline';
    //     } else if (aProps[1] === Object.values(dataM)[0] && aProps[2] === Object.values(dataM)[1]) {
    //         // accNameM.innerHTML = aProps[];
    //         accNameM.style.display = 'inline-block';
    //         accNameC.style.display = 'inline-block';
    //         for (let l = 0; l < log.length; l++) {
    //             log[l].style.display = 'none'; 
    //         }
    //         closeF();
    //     }
    // });
});
signInC.addEventListener('submit', function(event) {
    event.preventDefault();
    // console.log(signInM.userMail.value);
    const dataC={
        email: signInC.userMailC.value.trim(),
        password: signInC.userPwC.value.trim(),
    };
    for (let m = 0; m < storeInfo.length; m++) {
        if  (dataC.email !== storeInfo[m].email || dataC.password !== storeInfo[m].password) {
            signInC.userMailC.value = '';
            signInC.userPwC.value = '';
            errorLoginC.style.display = 'inline';
        } else if (dataC.email === storeInfo[m].email && dataC.password === storeInfo[m].password) {
            // accNameM.style.display = 'inline-block';
            // accNameC.style.display = 'inline-block';
            // LOC.style.display = 'inline-block';
            // LOM.style.display = 'inline-block';
            accNameC.innerHTML = storeInfo[m].name;
            accNameM.innerHTML = storeInfo[m].name;
            // for (let l = 0; l < log.length; l++) {
            //     log[l].style.display = 'none'; 
            // }
            if (storeUserData.length > 0) {
                userData = [...storeUserData];
            }
            userData.push(accNameC.innerHTML);
            localStorage.setItem("userData", JSON.stringify(userData));
            closeF();
            window.location.href = "../HTML/playlist1.html";
            break;
        } else {
            alert('ERROR. PLEASE TRY AGAIN.')
            location.reload();
        }
    };
});
