window.tap = function(count) {
    count=count.toString()
    if (document.getElementById(count).getAttribute('class') === 'top') {
        document.getElementById(count).setAttribute('class', 'bottom');
    } else {
        document.getElementById(count).setAttribute('class', 'top');
    }
}