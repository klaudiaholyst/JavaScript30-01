{
    const keys = document.querySelectorAll('div.key')

    function removeTransition(e) {
        this.classList.remove('key--playing');
        this.children[1].classList.remove('key__sound--playing');
    }
    function playingKey(e) {
        const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
        if (!audio) return;
        const key = document.querySelector(`div.key[data-key='${e.keyCode}']`);
        const keySound = document.querySelector(`div.key[data-key='${e.keyCode}'] .key__sound`);
        audio.currentTime = 0;
        audio.play();
        key.classList.add('key--playing');
        keySound.classList.add('key__sound--playing');
    }
    window.addEventListener('keydown', playingKey)
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))
}