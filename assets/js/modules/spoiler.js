const ELEMENTS_SELECTOR = {
    spoiler: '[data-spoiler]',
    button: '[data-spoiler-toggle]',
    content: '[data-spoiler-content]',
};

const CLASSES = {
    opened: 'spoiler__item--opened',
};

export default function () {
    $(document).on('click', ELEMENTS_SELECTOR.button, function() {
        const parent = $(this).closest(ELEMENTS_SELECTOR.spoiler);
        const content = parent.find(ELEMENTS_SELECTOR.content);

        parent.toggleClass(CLASSES.opened);
        content.slideToggle();
    });
}
