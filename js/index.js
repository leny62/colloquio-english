const errorLabel = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input')
const sendBtn = document.querySelector('.btn-send');
const resetBtn = document.querySelector('.btn-reset');
const textArea = document.querySelector('textarea');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const phoneInput = document.querySelector('#phone-input');
const companyInput = document.querySelector('#company-input');
const nameLabel = document.querySelector('#name');
const emailLabel = document.querySelector('#email');
const phoneLabel = document.querySelector('#phone');
const companyLabel = document.querySelector('#company');
const textAreaLabel = document.querySelector('#textarea');
const phoneRegex = /^\d{8,10}$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validator = (inputName, labelName, message) => {
        if (inputName.value.length < 1 || !emailInput.value.match(emailRegex)) {
        labelName.innerHTML = message
        inputName.style.borderColor = 'red';
        labelName.style.color = 'red';
        }
}


const reset = () => {
    inputs.forEach((input) => {
                 input.style.borderColor = '#000000';
                 textArea.style.borderColor = '#000000';
                 textArea.style.color = '#000000';
                 input.value = '';
                 textArea.value = ''
    });
    errorLabel.forEach((label) => label.style.color = '#000000')
    nameLabel.innerHTML = 'Name';
    emailLabel.innerHTML = 'Email';
    phoneLabel.innerHTML = 'Phone';
    companyLabel.innerHTML = 'Company';
    textAreaLabel.innerHTML = 'Your message';
    textArea.style.borderColor = '#000000';
    textAreaLabel.style.color = '#000000';

};

const handlePhoneChange = (phone) => {
    if (!phone.target.value.match(phoneRegex)) {
        phoneInput.style.borderColor = 'red';
        phoneLabel.innerHTML = 'Phone number must be between 8 and 10 digits';
        phoneLabel.style.color = 'red';
    }
    
};

const clearErrorOnChange = (inputName, labelName) => {
    const actualLabel = labelName.innerHTML
    inputName.addEventListener('keydown', () => {
        inputName.style.borderColor =  '#000000';
        labelName.innerHTML = actualLabel;
       labelName.style.color =  '#000000';
    })
}


sendBtn.addEventListener('click', (e) => {
    e.preventDefault()
    /**********Call validator function */
    validator(nameInput, nameLabel, 'Write your name and surname')
    validator(emailInput, emailLabel, 'Write an email(example@example.com)')
    validator(phoneInput, phoneLabel, 'Write your phone number')
    validator(companyInput, companyLabel, 'Write your company name')
    validator(textArea, textAreaLabel, 'Write your message')

    if(nameLabel.style.color !=="red" && emailLabel.style.color!=="red" && companyLabel.style.color!=="red" && phoneLabel.style.color!=="red" && textArea.style.color!=="red"){
    document.querySelector(".loaderContainer").classList.remove("hidden")
    }
});

document.querySelector(".close").addEventListener("click", (e)=>{
    e.preventDefault()
    document.querySelector(".loaderContainer").classList.add("hidden")
})

resetBtn.addEventListener('click', (e) => {
    e.preventDefault()
    reset()
});

phoneInput.addEventListener('keyup', (e) => {
    handlePhoneChange(e)
});

/*******Call function to clear errors on keydown***** */
clearErrorOnChange(nameInput, nameLabel)
clearErrorOnChange(emailInput, emailLabel)
clearErrorOnChange(phoneInput, phoneLabel)
clearErrorOnChange(companyInput, companyLabel)
clearErrorOnChange(textArea, textAreaLabel)