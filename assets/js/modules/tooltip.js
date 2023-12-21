import tippy from 'tippy.js';

const ELEMENTS_SELECTOR = {
    toltip: '[data-tippy-content]',
};

export default function () {
    tippy(ELEMENTS_SELECTOR.toltip, {
    
    theme: 'favorite', 
    placement: 'top',
    arrow: false,
});
}
