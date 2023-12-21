const ELEMENTS_SELECTOR = {
    tabs: '[data-tabs]',
    tab: '[data-tab]',
    section: 'data-tab-section',
};

const CLASSES = {
    tabIsActive: 'tabs__item--active',
    blockIsVidible: 'tabs__block--active',
};

export default function () {
    $(document).on('click', ELEMENTS_SELECTOR.tab, function() {
        let id = $(this).data('tab');
        let container = $(this).closest(ELEMENTS_SELECTOR.tabs);

        container.find(ELEMENTS_SELECTOR.tab).removeClass(CLASSES.tabIsActive);
        container.find(`[${ELEMENTS_SELECTOR.section}]`).removeClass(CLASSES.blockIsVidible);

        $(this).addClass('tabs__item--active');
        container.find(`[${ELEMENTS_SELECTOR.section}="${id}"]`).addClass(CLASSES.blockIsVidible);
    });
}