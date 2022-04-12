'use strict';
import { isWebp } from './checkWebp.js';
import './dropdown.js';
import './swiper.js';
import './tabs.js';
import 'svgxuse/svgxuse.js';

isWebp();
document.addEventListener('DOMContentLoaded', function(){
    const menuBtn = document.getElementsByClassName('header__burger')[0];
    const menu = document.getElementsByClassName('header__burger-menu')[0];
    const menuLinks = menu.querySelectorAll('.header__burger-link');

    function closeMenu(){
        menuBtn.classList.remove('show');
        menu.classList.remove('show');
        document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('show');
        menu.classList.toggle('show');
        document.body.style.overflow = menuBtn.classList.contains('show') ? 'hidden' : '';    
    })

    menuLinks.forEach(link => link.addEventListener('click', closeMenu));   
})
