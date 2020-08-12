import Animations from './animations';

window.onload = () => {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    window.scrollTo(0,0);
    new Animations().init();
}