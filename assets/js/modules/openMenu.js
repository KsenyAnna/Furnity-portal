const ELEMENTS_SELECTOR = {
    open: '[data-open-menu]',
    close: '[data-close-menu]'
  };
  
  const CLASSES = {
    opened: 'list-menu__active',
    activeBack: 'background__sidebar--active',
    blockScroll: 'page--block-scroll'
  };
  
  export default function () {
    $(document).on('click', ELEMENTS_SELECTOR.open, function () {
      $('[data-menu]').addClass(CLASSES.opened);
      $('[data-page]').addClass(CLASSES.blockScroll);
      $('[data-background]').addClass(CLASSES.activeBack);
    });
  
    $(document).on('click', ELEMENTS_SELECTOR.close, function () {
      $('[data-menu]').removeClass(CLASSES.opened);
      $('[data-background]').removeClass(CLASSES.activeBack);
      $('[data-page]').removeClass(CLASSES.blockScroll);
    });
  }