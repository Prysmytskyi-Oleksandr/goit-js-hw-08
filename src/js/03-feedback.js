import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onTextareaInput, 500));
form.addEventListener('submit', onFormSubmit);
window.addEventListener('load', getFromLocalStorage);

function onTextareaInput () {
    const email = form.elements.email.value;
    const message = form.elements.message.value;    
    localStorage.setItem('feedback-form-state', JSON.stringify({ email, message }));
};

function onFormSubmit(event) {
    event.preventDefault();

    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
   
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
};
 
function getFromLocalStorage() {
    const saveInformation = localStorage.getItem('feedback-form-state');
       
    if (saveInformation) {
        const parsSaveInformation = JSON.parse(saveInformation);
         
       form.elements.email.value = parsSaveInformation.email;
        form.elements.message.value = parsSaveInformation.message;
    }
}

