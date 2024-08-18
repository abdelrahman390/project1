const currentPageNameForMainPageNested = window.location.pathname.split('/');
const currentPageName = currentPageNameForMainPageNested[currentPageNameForMainPageNested.length - 1].split(".")[0]
// Define an input field that when the user clicks on it redirects them to the map page
const locationInput = document.querySelector('.max-width .bottom-container .bottom .cont a');

let saveButton = document.querySelector('.max-width .buttons button'),
    backButton = document.querySelector('.max-width .buttons a'),
    form = document.querySelector('.max-width form');
// // Select the field where the user puts his government


saveButton.onclick = () => {
    if (form.checkValidity()) {
        // If Form is valid
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission
            sessionStorage.clear()
            doneMessage('../../../../assets/images/Done.webp', 'تمت الحفظ بنجاح ', "", 'حسناً')
        });
    }
}

backButton.onclick = (event) => {
    sessionStorage.clear()
}



// get current page name and set it in session storage to direct user to the same page that he out from it
// restore all values that user write it in input fields to session storage to use it when user return back to same page
locationInput.onclick = () => {
    currentNewRegistrationPageName = window.location.pathname;
    sessionStorage.setItem('currentNewRegistrationPageName', window.location.pathname)

    for (let i = 0; i < input.length; i++) {
        if (input[i].value.length !== 0) {
            userInputsData[input[i].dataset.name] = input[i].value;
            sessionStorage.setItem([`${currentPageNameForMainPageNested[3]}-inputs`], JSON.stringify(userInputsData))
        }
    }

    for (let i = 0; i < select.length; i++) {
        if (select[i].value !== '') {

            let selectedIndex = select[i].selectedIndex;
            userSelectedData[select[i].dataset.name] = select[i].value;

            sessionStorage.setItem([`${currentPageNameForMainPageNested[3]}-selected`], JSON.stringify(userSelectedData))
        }
    }

}

locationInput.children[0].value = sessionStorage.getItem("location")
