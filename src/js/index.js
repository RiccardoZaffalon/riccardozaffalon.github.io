var AOS = require('aos');

window.addEventListener('load', function() {
    document.body.classList = '';
    AOS.init({
        duration: 600
    });
});