import validation from 'jquery-validation';

const ELEMENTS_SELECTOR = {
    form: '[data-form-edit]',
    modal: '[data-form-modal]',
    modal2: '[data-form-modal-2]',
    select: '[data-select-control]',
};

export default function  () {
    $(document).on('click', ELEMENTS_SELECTOR.form, function () {
        $($(ELEMENTS_SELECTOR.select)).on("select2:close", function (el) {
            $(this).valid();
        });    
    });
    
    $(document).on('click', ELEMENTS_SELECTOR.modal2, function () {
        $($(ELEMENTS_SELECTOR.select)).on("select2:close", function (el) {
            $(this).valid();
        });    
    });

    $(ELEMENTS_SELECTOR.form).validate({
        errorClass: 'error',
        validClass: 'valid',
        rules: {
            firstname: "required",
            lastname: "required",
            specialization: "required",
            telephone: "required",
            email: {
                required: true,
                email: true,
            },
        },
        messages: {
            firstname: "Введите имя",
            lastname: "Введите фамилию",
            specialization: "Нужно что-то выбрать",
            telephone: "Введите телефон",
            email: {
                required: "Введите e-mail",
                email: "Введите корректный e-mail",
            },
        }
    });

    $(ELEMENTS_SELECTOR.modal).validate({
        errorClass: 'error',
        validClass: 'valid',
        rules: {                
            theme: "required",
        },
        messages: {
            theme: "Введите тему обращения",
        }
    });        
    $(ELEMENTS_SELECTOR.modal2).validate({
        errorClass: 'error',
        validClass: 'valid',
        rules: {         
            typeAppeal: "required",
            email: {
                required: true,
                email: true,
            },
        },
        messages: {
            typeAppeal: "Выберите тип обращения",
            email: {
                required: "Введите e-mail",
                email: "Введите корректный e-mail",
            },
        }
    });        
}



