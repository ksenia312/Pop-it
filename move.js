window.mov = function (count, sound = true) {
    count = count.toString()
    if (document.getElementById(count).getAttribute('class') === 'top') {
        document.getElementById(count).setAttribute('class', 'bottom');
        if (sound) {
            let audio = new Audio();
            audio.src = 'audio.wav';
            audio.autoplay = true;
        }
    } else {
        document.getElementById(count).setAttribute('class', 'top');
    }
}
window.update = function (count) {
    count = count.toString()
    document.getElementById(count).setAttribute('class', 'top');
}
window.tap = function (count) {
    if (count === -1) {
        const container = document.querySelector("#container")
        container.classList.add('rotating')

        setTimeout(() => {
            container.classList.remove('rotating')
        }, 1000);

        setTimeout(() => {
            let i = 1;
            while (i <= 36) {
                mov(i, false);
                i++
            }
        }, 500);


    } else if (count === -2) {

        let i = 1;
        while (i <= 36) {
            update(i);
            i++
        }
    } else {
        mov(count)
    }
}
