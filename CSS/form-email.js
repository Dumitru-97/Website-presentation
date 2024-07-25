const form= document.getElementById('form')
const userName= document.getElementById('F-name')
const phoneNumber= document.getElementById('P-number')
const email= document.getElementById('email')
const textArea= document.getElementById('text-area')
const submit= document.getElementById('submit')

form.addEventListener('submit', e => {
    e.preventDefault();
    
    validateInputs();
});

const setError = (element, message) => {
    const inputControl= element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSucces = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
   
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email =>{
    const re = /^(([][\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1-3}\.[0-9{1-3}\.[0-9]{1-3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA\-0-9]+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () =>{
    const userNameValue = userName.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const emailValue = email.value.trim();
const textAreaValue = textArea.value.trim();
const submitValue = submit.value.trim();


if(userName === '') {
setError(userName, 'Username is required')
}else{
    setSuccess(userName);
}
if(phoneNumberValue === ''){
    setError(phoneNumber, 'Phone Number is required');
}else if (!isValidphoneNumber(phoneNumberValue)) {
    setError(phoneNumber, 'Provide a valid phone number');
}else{
    setSucces(phoneNumber);
}

if(emailValue === ''){
    setError(email, 'Email is required');
}else if(!isValidEmail(emailValue)){
    setError(email,'Provide a valid email address')
}else{
    setSucces(email);
} 
}
