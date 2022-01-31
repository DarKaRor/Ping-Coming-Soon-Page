const Select = (query) => document.querySelector(query);

let email = Select('#email');
let emailError = Select('#email_error');
let emailContainer = Select('#emailContainer');
let errorClass = 'form__inputContainer--error';
let submit = Select('#submit');
let error = false;
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);


email.addEventListener('input', () => {
    let value = email.value.trim();
    error = false;
    if (email.value.length == 0) {
        emailContainer.classList.remove(errorClass);
        return;
    }
    if (makeError(value.length < 8, 'Email must be at least 8 characters long')) return;
    if (makeError(!emailRegex.test(value), 'Email is not valid')) return;
    emailContainer.classList.remove(errorClass);
});

submit.addEventListener('click', (e) => {
    if(error) e.preventDefault();
    if(makeError(email.value.length == 0, 'Email must not be empty')) e.preventDefault();
});


function addClass(element, className) {
    if (!element.classList.contains(className)) element.classList.add(className);
}

function changeText(element, text) {
    if (element.innerHTML != text) element.innerHTML = text;
}

function makeError(condition,errorMsg){
    if(condition){
        addClass(emailContainer, errorClass);
        changeText(emailError, errorMsg);
        error = true;
    }
    return condition;
}