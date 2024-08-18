let saveButton = document.querySelector('.max-width .buttons button'),
    form = document.querySelector('.max-width form');

saveButton.onclick = () => {

    if (form.checkValidity()) {
        // If Form is valid
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission

            doneMessage('../../../../assets/images/Done.webp', 'تم ', "", 'إغلاق')
        });
    }
}
