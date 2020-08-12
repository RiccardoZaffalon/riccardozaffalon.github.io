import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

export default class Animations {
    constructor() {
        this.$intro = document.querySelector('.intro');
        this.$reveals = document.querySelectorAll('[data-reveal]');
    }

    init() {
        gsap.defaults({
            duration: 1.5,
            ease: "power3.out"
        });

        gsap.to(this.$intro.querySelectorAll('span'), {
            display: 'inline-block',
            y: 0,
            stagger: 0.1
        });   

        gsap.to(this.$reveals, {
            opacity: 1,
            x: 0,
            stagger: 0.1,
            delay(i, target) {
                const offset = target.dataset.revealDelay ? parseInt(target.dataset.revealDelay, 10) / 1000 : 0;
                return offset + 1;
            },
            onComplete() {
                document.getElementById('profile-image-hover').classList.add('active');
            }
        });
    }
}