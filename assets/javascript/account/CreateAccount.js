let inputs = document.querySelectorAll(".max-width input"),
    form = document.querySelector('.createAccount form'),
    alarmMessage = document.querySelector('.max-width .alarm'),
    button = document.querySelector('.createAccount .max-width .container .right > .button'),
    passwordInputs = document.querySelectorAll('.max-width .container form .right .password'),
    passwordHide = document.querySelectorAll('.max-width .container form .right .password i:nth-child(3)');

form.addEventListener('input', function (event) {

    function handleClick() {
        if (inputs[2].value.length === inputs[3].value.length) {
            if (inputs[2].value === inputs[3].value) {
                button.style.cssText = 'opacity: 1; pointer-events: painted;';
                alarmMessage.style.cssText += 'display: none;';
                inputs[3].style.cssText = 'border: 1px solid var(--primary-color)';
            } else if (inputs[2].value !== inputs[3].value) {
                button.style.cssText = 'opacity: 0.5; pointer-events: none;';
                alarmMessage.style.cssText += 'display: unset;';
                inputs[3].style.cssText = 'border: 2px solid red';
                inputs[3].parentElement.style.cssText += 'margin-bottom: 20px;'
            }
        } else if (inputs[2].value < inputs[3].value) {
            button.style.cssText = 'opacity: 0.5; pointer-events: none;';
            alarmMessage.style.cssText += 'display: unset;background-color: unset;';
            inputs[3].style.cssText = 'border: 2px solid red';
            inputs[3].parentElement.style.cssText += 'margin-bottom: 20px;'
        } else {
            button.style.cssText = 'opacity: 0.5; pointer-events: none;'
        }
    }
    handleClick()

});

button.onclick = () => {
    if (form.checkValidity() && inputs[2].value.length !== 0 && inputs[3].value.length !== 0) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission
            doneMessage('../../../assets/images/Done.webp', 'تم إنشاء حساب بنجاح', "../../../pages/account/account.html", 'الحساب')
        });
    }
}

passwordHide.forEach(element => {
    element.onclick = () => {
        if (element.parentElement.children[1].type === 'text') {
            element.parentElement.children[1].type = "password"
        } else {
            element.parentElement.children[1].type = "text"
        }
    }
});