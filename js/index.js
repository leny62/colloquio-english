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
const phoneRegex = /^\d{8,10}$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validator = () => {
    
    if (nameInput.value.length < 1) {
        nameLabel.innerHTML = 'Write your name and surname';
        nameInput.style.borderColor = 'red';
        nameLabel.style.color = 'red';
    }
    if (emailInput.value.length < 1 || !emailInput.value.match(emailRegex) ){
        emailLabel.innerHTML = 'Write an email(example@example.com)'
        emailInput.style.borderColor = 'red';
        emailLabel.style.color = 'red';
    }

    if (phoneInput.value.length < 1) {
        phoneLabel.innerHTML = 'Write your phone number';
        phoneInput.style.borderColor = 'red';
        phoneLabel.style.color = 'red'
    }
    if (companyInput.value.length < 1) {
        companyLabel.innerHTML = 'Write your company name';
        companyInput.style.borderColor = 'red';
        companyLabel.style.color = 'red'
    }
    if (textArea.value.length < 1) {
        textArea.style.borderColor = 'red';
        textArea.style.color = 'red';
        textArea.innerHTML= 'Write your message';
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
    textArea.style.borderColor = '#000000';
    textArea.style.color = '#000000';
    textArea.innerHTML= '';

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
    validator()
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

phoneInput.addEventListener('change', (e) => {
    handlePhoneChange(e)
});

/*******Call function to clear errors on keydown***** */
clearErrorOnChange(nameInput, nameLabel)
clearErrorOnChange(emailInput, emailLabel)
clearErrorOnChange(phoneInput, phoneLabel)
clearErrorOnChange(companyInput, companyLabel)
clearErrorOnChange(textArea, textArea)