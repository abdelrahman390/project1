let inputs = document.querySelectorAll('.max-width input'),
    alarmMessage = document.querySelector('.max-width .alarm'),
    button = document.querySelector('.max-width .container .lift button'),
    passwordInputs = document.querySelectorAll('.max-width .container .lift .password'),
    passwordHide = document.querySelectorAll('.max-width .container .lift .password i:nth-child(3)');

inputs.forEach(element => {
    element.addEventListener('input', function (event) {
        function handleClick() {

            let inputsCheckState = inputs[0].value.length !== 0 && inputs[1].value.length !== 0 && inputs[2].value.length !== 0;

            if (inputsCheckState === true) {

                if (inputs[1].value.length === inputs[2].value.length) {

                    if (inputs[1].value === inputs[2].value) {
                        button.style.cssText = 'opacity: 1; pointer-events: painted;';
                        alarmMessage.style.cssText += 'display: none; padding: 0; background-color: unset;';
                        inputs[2].style.cssText = 'border: 1px solid var(--primary-color); margin-bottom: 0;';
                    } else {
                        button.style.cssText = 'opacity: 0.5; pointer-events: none;';
                        alarmMessage.style.cssText += 'display: unset;background-color: unset;';
                        inputs[2].style.cssText = 'border: 2px solid red; margin-bottom: 30px;';
                    }
                } else if (inputs[1].value.length < inputs[2].value.length) {
                    button.style.cssText = 'opacity: 0.5; pointer-events: none;';
                    alarmMessage.style.cssText += 'display: unset;background-color: unset;';
                    inputs[2].style.cssText = 'border: 2px solid red; margin-bottom: 30px;';
                } else {
                    button.style.cssText = 'opacity: 0.5; pointer-events: none;'
                }
            } else {
                button.style.cssText = 'opacity: 0.5; pointer-events: none;'
            }
        }
        handleClick()
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

button.onclick = () => {
    doneMessage('../../assets/images/Done.webp', 'تم تغيير كلمة المرور بنجاح', "../../pages/account/account.html", 'حسناً')
}