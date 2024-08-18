const accountButtons = document.querySelector('.max-width .container .lift button');
const currentPageNameForMainPageNested = window.location.pathname.split('/');
// const currentPageName = window.location.pathname.split('/').pop().split('.')[0]
const currentPageName = currentPageNameForMainPageNested[3].split('/').pop().split('.')[0]
// Define an input field that when the user clicks on it redirects them to the map page
const locationInput = document.querySelector(' .max-width .container .lift .cont a');
// // Select the field where the user puts his government

accountButtons.onclick = () => {
    sessionStorage.clear()
    doneMessage('../../assets/images/Done.webp', 'تمت الحفظ بنجاح', "account.html", 'حسناً')
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

            userSelectedData[select[i].dataset.name] = select[i].value;

            sessionStorage.setItem([`${currentPageNameForMainPageNested[3]}-selected`], JSON.stringify(userSelectedData))
        }
    }

}

locationInput.children["k"].value = sessionStorage.getItem("location")
