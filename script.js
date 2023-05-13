let muzik = document.getElementById("muzik");
     let mel = document.getElementById("mel");
     let start = document.getElementById("start");
     let volum = document.querySelector('volum');
     
     const volumeSlider = document.getElementById('volume-slider');
     const outputContainer = document.getElementById('volume-output');
     
     
     
     mel.onloadedmetadata = function () {
         muzik.max = mel.duration;
         muzik.value = mel.currentTime;
         muzik.volume = mel.currentVolume;
     }
     
     function playPause() {
         if (start.classList.contains("fa-pause")) {
             mel.pause();
             start.classList.remove("fa-pause");
             start.classList.add("fa-play");
         }
         else {
             mel.play();
             start.classList.add("fa-pause");
             start.classList.remove("fa-play");
         }
     }
     
     if (mel.play()) {
         setInterval(() => { muzik.value = mel.currentTime }, 500)
     }
     muzik.onchange = function () {
         mel.play();
         mel.currentTime = muzik.value;
         start.classList.add("fa-pause");
         start.classList.remove("fa-play");
     }
     
     
     
     volumeSlider.addEventListener('input', (e) => {
         const value = e.target.value;
         mel.volume = value / 100;
     });