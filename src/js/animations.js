import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default class Animations {
    constructor() {
        this.$h1 = document.getElementById('page-title');
        this.$reveals = document.querySelectorAll('[data-reveal]');
        this.$image = document.getElementById('profile-image');
    }

    init() {
        gsap.defaults({
            duration: 1.5,
            ease: "power3.out"
        });

        gsap.to(this.$h1.querySelectorAll('span'), {
            display: 'block',
            y: 0
        });   

        gsap.to(this.$reveals, {
            opacity: 1,
            x: 0,
            stagger: 0.1,
            delay: 1
        });
    }
}