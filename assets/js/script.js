/**
 * Vendors
 */
import $ from 'jquery';
window.$ = $;

/**
 * Modules
 */
import tabs from './modules/tabs';
import openMenu from './modules/openMenu';
import swiper from './modules/swiper';
import select from './modules/select';
import spoiler from './modules/spoiler';
import tooltip from './modules/tooltip';
import show from './modules/show';
import validation from './modules/validation';
import masks from './modules/masks';
import modal from './modules/modal';
import showInput from './modules/showInput';

const app = {
    ready() {    
        tabs();
        openMenu();
        swiper();
        select();
        spoiler();
        validation();
        tooltip();
        show();
        masks();
        modal();
        showInput();
    },
    load() {
    },
    resize() {
    },
    scroll() {
    },
};

$(() => {
    app.ready();

    $(window)
        .on('load', app.load)
        .on('resize', app.resize)
        .on('scroll', app.scroll);
});
