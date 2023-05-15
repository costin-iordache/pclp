     let muzik = document.getElementById("muzik");
     let start = document.getElementById("start");
     let volum = document.querySelector('volum');
     let mute = document.getElementById("mute");
     
     const volumeSlider = document.getElementById('volume-slider');
     const outputContainer = document.getElementById('volume-output');
     
    var audio = new Audio();
    var playlist = new Array('Muzica/Alabora.mp3', 'Muzica/Karma.mp3', 'Muzica/Karabatak.mp3', 'Muzica/Analog.mp3');

        i = 0;
        audio.src = (playlist[i]);

        audio.onloadedmetadata = function () {
            muzik.max = audio.duration;
            muzik.value = audio.currentTime;
            muzik.volume = audio.currentVolume;
        }

        

        function playBackward(){
            if(i>0){
            audio.src = (playlist[--i]);
            } else {
                i = playlist.length-1;
                audio.src = (playlist[i]);
            }
            audio.play();
            start.classList.add("fa-pause");
                start.classList.remove("fa-play");
        }
        
        function playPause() {
            if (start.classList.contains("fa-pause")) {
                audio.pause();
                start.classList.remove("fa-pause");
                start.classList.add("fa-play");
            }
            else {
                audio.play();
                start.classList.add("fa-pause");
                start.classList.remove("fa-play");
            }
        }

        function playForward(){
            if(i<playlist.length-1){
            audio.src = (playlist[++i]);
            } else {
                i = 0;
                audio.src = (playlist[i]);
            }
            audio.play();
            start.classList.add("fa-pause");
            start.classList.remove("fa-play");
        }
        
        if (audio.play()) {
            setInterval(() => { muzik.value = audio.currentTime }, 500)
        }
        muzik.onchange = function () {
            audio.play();
            audio.currentTime = muzik.value;
            start.classList.add("fa-pause");
            start.classList.remove("fa-play");
        }

        volumeSlider.addEventListener('input', (e) => {
            const value = e.target.value;

            if(value>65) 
            {   
                mute.classList.remove("fa-volume-xmark");
                mute.classList.remove("fa-volume-off");
                mute.classList.remove("fa-volume-low");
                mute.classList.add("fa-volume-high");
            } else
            if(value<66 && value>32){
                mute.classList.remove("fa-volume-xmark");
                mute.classList.remove("fa-volume-off");
                mute.classList.add("fa-volume-low");
                mute.classList.remove("fa-volume-high");
            }
            else {
                mute.classList.remove("fa-volume-xmark");
                mute.classList.add("fa-volume-off");
                mute.classList.remove("fa-volume-low");
                mute.classList.remove("fa-volume-high");
            }

            audio.volume = value / 100;
        });

    function volumeMute(){
        if(!mute.classList.contains("fa-volume-xmark"))
        {
            audio.volume = 0;
            mute.classList.add("fa-volume-xmark");
            mute.classList.remove("fa-volume-high");
        } else
        {
            audio.volume = 1;
            mute.classList.remove("fa-volume-xmark");
            mute.classList.add("fa-volume-high");
        }
    }

     document.getElementById("login").onclick = function () {
        location.href = "login.html";
    };