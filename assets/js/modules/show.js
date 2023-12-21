const ELEMENTS_SELECTOR = {
    uncover: '[data-uncover]',
    content: '[data-uncover-content]',
    button: '[data-uncover-toggle]',
    name: '[data-uncover-name]',
    hide: '[data-uncover-hide]',
    icon: '[data-uncover-icon]'
  };
  
const CLASSES = {
    hide: 'medium-block__name--hide',
    rotate: 'medium-block__icon--opened',
};

  export default function () {
    $(document).on('click', ELEMENTS_SELECTOR.button, function () {
      const parent = $(this).closest(ELEMENTS_SELECTOR.uncover);
      const content = parent.find(ELEMENTS_SELECTOR.content);
      const name = parent.find(ELEMENTS_SELECTOR.name);
      const hide = parent.find(ELEMENTS_SELECTOR.hide);
      const icon = parent.find(ELEMENTS_SELECTOR.icon);
  
      name.toggleClass(CLASSES.hide);
      hide.toggleClass(CLASSES.hide);
      icon.toggleClass(CLASSES.rotate);
  
      content.toggleClass('invisible');
      content.slideToggle();
    });
  }