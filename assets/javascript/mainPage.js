let mainBAckGroundImg = document.querySelectorAll(".mainPage .mainPageImgs .container .img-cont img"),
divImg = document.querySelectorAll(".mainPage .mainPageImgs .container .img-cont img"),
divSpan = document.querySelector(".mainPage .mainPageImgs .bullets"),
span =   divSpan.querySelectorAll(".mainPage .mainPageImgs .bullets li");

if (width < 601) {
    mainBAckGroundImg.forEach(element => {
        element.src = "assets/images/mainPage-phone.webp"
    });
}

function imgSlider(){
    let start = 1
    let sequence = 0


    setInterval(function() {
        divImg.forEach(element => {
            element.style.transform = `translateX(-${start * 100}%)`;
        });
    
        // ############### Span Handle ##################
        span.forEach(element => {
            element.classList.remove('active');
        });
    
        divSpan.children[start].classList.add('active');
    
    if (start == divImg.length -1){
        sequence = 1
    }
    
    if(sequence == 0){
        start++
    }
    
    if(sequence == 1){
        start--
    }
    
    if (sequence == 1 & start == -1){
        sequence = 0
        start = 0
    }
    
    }, 5000);
    
    function repeatEvery10Seconds() {
        // console.log("This message is displayed every 10 seconds.");
        setTimeout(repeatEvery10Seconds, 5000);
    }
    // Start the repeating function
    setTimeout(repeatEvery10Seconds, 5000);

}
imgSlider()
