function playSound(ev) {
    const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${ev.keyCode}"`);
    if (!audio) return; //stop function if there is no 
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    key.classList.remove("playing");
    key.classList.toggle("playing");
}
window.addEventListener("keydown", playSound)

function removeTransition(ev) {
    if (ev.propertyName !== "transform") return;
    this.classList.remove("playing");
}


const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));