// Variables
let pyramids = [];
let karnak = [];
let abu_simbel =[];
// Selectors
let menubar = document.querySelector(".menu-bar");
pyramids[0] = document.querySelector("#py2");
pyramids[1] = document.querySelector("#py3");
pyramids[2] = document.querySelector("#py4");
let pyramidMain = document.querySelector("#py1");
karnak[0] = document.querySelector("#kar2");
karnak[1] = document.querySelector("#kar3");
karnak[2] = document.querySelector("#kar4");
let karnakMain = document.querySelector("#kar1");
abu_simbel[0] = document.querySelector("#abu2");
abu_simbel[1] = document.querySelector("#abu3");
abu_simbel[2] = document.querySelector("#abu4");
let abuMain = document.querySelector("#abu1");
const send =document.querySelector("#send");
const commentText = document.querySelector("#input1");
const comment = document.querySelector(".comment");
const commentMessage = document.querySelector(".commentMessage");
const comment3 = document.querySelector("#comment3");

// Event Listener
pyramids.forEach(pyramid => {
  pyramid.addEventListener("click" , ()=>{
    // console.log(window.getComputedStyle(pyramid).backgroundImage)
    let currentImg =getComputedStyle(pyramid).backgroundImage;
    let mainImg = getComputedStyle(pyramidMain).backgroundImage;
    pyramid.style.backgroundImage = mainImg;
    pyramidMain.style.backgroundImage = currentImg;

  })
});
send.addEventListener('click' ,addtext);

// karnak
karnak.forEach(karnaks => {
  karnaks.addEventListener("click" , ()=>{
    // console.log(window.getComputedStyle(pyramid).backgroundImage)
    let currentImg =getComputedStyle(karnaks).backgroundImage;
    let mainImg = getComputedStyle(karnakMain).backgroundImage;
    karnaks.style.backgroundImage = mainImg;
    karnakMain.style.backgroundImage = currentImg;

  })
});
//abu simbel
abu_simbel.forEach(simbel => {
  simbel.addEventListener("click" , ()=>{
    // console.log(window.getComputedStyle(pyramid).backgroundImage)
    let currentImg =getComputedStyle(simbel).backgroundImage;
    let mainImg = getComputedStyle(abuMain).backgroundImage;
    simbel.style.backgroundImage = mainImg;
    abuMain.style.backgroundImage = currentImg;

  })
});
// Fuctions
setInterval(()=>{
    // console.log(window.pageYOffset);
    if(window.pageYOffset>0 ){
        menubar.classList.add("show");
    }else{
        menubar.classList.remove("show");
    }
},50)
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function addtext(){
let commentDiv = document.createElement('div');
commentDiv.classList.add('name');
comment3.append(commentDiv);
let commenth5 = document.createElement('h5');
commenth5.innerText = commentText.value;
commentDiv.append(commenth5) 
}