let prevButton = document.querySelector(".employees-pages-table .max-width .control .prevPage"),
    nextButton = document.querySelector(".employees-pages-table .max-width .control .nextPage"),
    currentPage = document.querySelector(".employees-pages-table .max-width .control .currentPage"),
    data = document.querySelectorAll(".employees-pages-table .max-width table tr:not(:first-child) "),
    currentPageNumber = 1;

function buttonsHandle() {
    nextButton.onclick = () => {
        currentPageNumber++
        currentPage.innerHTML = currentPageNumber
        prevButtonHandle()
        NextButtonHandle()
        dataHandle()
    }

    prevButton.onclick = () => {
        currentPageNumber--
        currentPage.innerHTML = currentPageNumber
        prevButtonHandle()
        NextButtonHandle()
        dataHandle()
    }
}
buttonsHandle()

function prevButtonHandle() {
    if (currentPageNumber === 1) {
        prevButton.style.cssText = "opacity: 0.5; pointer-events: none"
    } else {
        prevButton.style.cssText = "opacity: 1; pointer-events: auto"
    }
}
prevButtonHandle()

function NextButtonHandle() {
    if (currentPageNumber === Math.ceil(data.length / 5)) {
        nextButton.style.cssText = "opacity: 0.5; pointer-events: none"
    } else {
        nextButton.style.cssText = "opacity: 1; pointer-events: auto"
    }
}
NextButtonHandle()

function dataHandle() {

    let secondRevers;
    const elementsArray = Array.from(data);

    elementsArray.length = currentPageNumber * 5

    for (let i = 0; i < data.length; i++) {
        data[i].style.display = "none"
    }

    if (elementsArray.length === 5) {
        for (let i = 0; i < 5; i++) {
            data.length = 5
            data[i].style.display = ""
        }
    } else if (elementsArray.length > 5) {
        const reversedArray = elementsArray.reverse()
        reversedArray.length = 5
        secondRevers = reversedArray.reverse()
        for (let i = 0; i < 5; i++) {
            secondRevers[i].style = ''
        }
    }
}
dataHandle()