
let inputs = document.querySelectorAll('.max-width input'),
    alarmMessage = document.querySelector('.max-width .alarm'),
    button = document.querySelector('.max-width .container .right a'),
    accountNewPasswordButtons = document.querySelector('.max-width .container .right a'),
    passwordInputs = document.querySelectorAll('.newPassword .container .right .password'),
    passwordHide = document.querySelectorAll('.newPassword .container .right .password i:nth-child(3)');

inputs.forEach(element => {
    element.addEventListener('input', function (event) {

        let emptyInputsCheck = inputs[0].value.length !== 0 && inputs[1].value.length !== 0

        if (inputs[0].value.length === inputs[1].value.length && emptyInputsCheck) {

            if (inputs[0].value === inputs[1].value) {
                button.style.cssText = 'opacity: 1; pointer-events: painted;';
                alarmMessage.style.cssText += 'display: none;';
                inputs[1].style.cssText = 'border: 1px solid var(--primary-color)';
            } else if (inputs[0].value !== inputs[1].value) {
                button.style.cssText = 'opacity: 0.5; pointer-events: none;';
                alarmMessage.style.cssText += 'display: unset;';
                inputs[1].style.cssText = 'border: 2px solid red';
            }
        } else if (inputs[0].value < inputs[1].value) {
            button.style.cssText = 'opacity: 0.5; pointer-events: none;';
            alarmMessage.style.cssText += 'display: unset;';
            inputs[1].style.cssText = 'border: 2px solid red';
        } else {
            button.style.cssText = 'opacity: 0.5; pointer-events: none;'
        }

    });
});

passwordHide.forEach(element => {
    element.onclick = () => {
        if (element.parentElement.children[1].type === 'text') {
            element.parentElement.children[1].type = "password"
        } else {
            element.parentElement.children[1].type = "text"
        }
    }
});

accountNewPasswordButtons.onclick = () => {
    doneMessage('../../assets/images/Done.webp', 'تم تغيير كلمة المرور بنجاح', "loginPage.html", 'حسناً')
}
