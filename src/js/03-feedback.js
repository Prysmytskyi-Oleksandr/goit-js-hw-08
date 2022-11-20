
const form = document.querySelector('.feedback-form');

form.addEventListener('input', onTextareaInput);
form.addEventListener('submit', onFormSubmit);
window.addEventListener('load', getFromLocalStorage);

function onTextareaInput () {
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    // console.log(email);
    // console.log(textarea);
    localStorage.setItem('feedback-form-state', JSON.stringify({ email, message }));
};

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
};
 
function getFromLocalStorage() {
    const saveInformations = localStorage.getItem('feedback-form-state');
    console.log(saveInformations);
    
    if (saveInformations) {
        const parsSaveInformations = JSON.parse(saveInformations);

        console.log(parsSaveInformations);
        
        form.elements.email.value = parsSaveInformations.email;
        form.elements.message.value = parsSaveInformations.message;
}
}

