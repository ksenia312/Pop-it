window.mov = function(count) {
    count=count.toString()
    if (document.getElementById(count).getAttribute('class') === 'top') {
        document.getElementById(count).setAttribute('class', 'bottom');
        let audio = new Audio();
        audio.src = 'audio.wav';
        audio.autoplay = true;
    }
    else {
        document.getElementById(count).setAttribute('class', 'top');
    }
}
window.update = function(count) {
    count=count.toString()
    document.getElementById(count).setAttribute('class', 'top');
}
window.tap = function(count) {
    if (count===-1) {

        let i = 1;
        while (i<=36) {mov(i); i++}
    }
    else if (count === -2) {

        let i = 1;
        while (i<=36) {update(i); i++}
    }
    else {

        mov(count)
    }
}
