const ELEMENTS_SELECTOR = {
    email: '[data-modal-email]',
    select: '[data-select-control]',
};

export default function () {
    $(ELEMENTS_SELECTOR.select).on('change', function(){
        if($(this).val() == 2){
            $(ELEMENTS_SELECTOR.email).show();
        } else {
            $(ELEMENTS_SELECTOR.email).hide();
        }
    });
}