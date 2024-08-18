const technicalSupportButton = document.querySelector('.technical-support .max-width .container .right form button '),
    form = document.querySelector('.technical-support .max-width .container .right form');

technicalSupportButton.onclick = () => {

    // Check if the form is valid
    if (form.checkValidity()) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission
            doneMessage('../assets/images/Done.webp', 'تم إرسال رسالتك وسوف يتم التواصل معك في أقرب وقت', "technical-support.html", 'حسناً')
        });
    }
}