var AOS = require('aos');

window.addEventListener('load', function() {
    AOS.init({
        disable: 'mobile',
        duration: 600
    });
});