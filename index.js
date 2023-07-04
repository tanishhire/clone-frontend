let slideIndex = 0
slideShow()
function slideShow(){
    let i;
    let slides = document.getElementsByClassName("myslides")
    let dots = document.getElementsByClassName("dot")
    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    slideIndex++

    if(slideIndex > slides.length){
        slideIndex = 1
    }
    for(i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"
    dots[slideIndex-1].className += " active"
    setTimeout(slideShow, 5000)
}


ham = document.getElementById("hamburger")
navbox = document.getElementById("navbar")
cross = document.getElementById("cross")
ham.addEventListener("click", collapse)
function collapse(){
    ham.classList.add("hidden")
    cross.classList.remove("hidden")
    navbox.classList.remove("invisible")
}
cross.addEventListener("click", anticollapse)
function anticollapse(){
    ham.classList.remove("hidden")
    cross.classList.add("hidden")
    navbox.classList.add("invisible")
}
