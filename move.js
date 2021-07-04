window.mov = function(count) {
    count=count.toString()
    if (document.getElementById(count).getAttribute('class') === 'top') {
        document.getElementById(count).setAttribute('class', 'bottom');
    }
    else {
        document.getElementById(count).setAttribute('class', 'top');
    }
}

window.tap = function(count) {
    if (count===-1) {
        let i = 1;
        while (i<=36) {
            mov(i)
            i++     
        }
    }
    else {
        mov(count)
    }
}
