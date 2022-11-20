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
    const saveInformations = localStorage.getItem('feedback-form-state');
       
    if (saveInformations) {
        const parsSaveInformations = JSON.parse(saveInformations);
         
       form.elements.email.value = parsSaveInformations.email;
        form.elements.message.value = parsSaveInformations.message;
    }
}

