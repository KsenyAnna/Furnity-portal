import Inputmask from 'inputmask';

const ELEMENTS_SELECTOR = {
  mask: '[data-mask]'
};

export default function () {
  $(document).ready(function () {
    Inputmask().mask($(ELEMENTS_SELECTOR.mask));
  });
}