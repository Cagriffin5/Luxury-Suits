
//SCROLING SECTIONS AND NAV
//select all "pages"
const pages = document.querySelectorAll(".page");
//select all the nav items
const menuItems = document.querySelectorAll(".menu-item");

const observer = new IntersectionObserver(function( entries, observer ){
  entries.forEach( entry => {
    if(entry.isIntersecting){
      const i = Array.from(pages).indexOf(entry.target);
      //remove all active tabs
      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      //add active to correct tab
      menuItems[i].classList.add('active');
      
    }
  } );
}, { 
  threshold: 0.55 
});

//attach the observer to each page
pages.forEach( page =>{
  observer.observe(page);
});


//PARALLAX
let windowTop;
const heading = document.getElementById("home");
const h1 = document.querySelector("#home h1");
const h3 = document.querySelector("#home h3");

window.addEventListener("scroll", function (e) {
	windowTop = window.pageYOffset;
	//make the heading h1 drift up.
	h1.style.bottom = windowTop + "px";
  h3.style.bottom = windowTop + "px";
	//make it dissapear
	h1.style.opacity = 1 - windowTop / 200;
  h3.style.opacity = 1 - windowTop / 200;
	//make the header background scroll slowly
	let Y = windowTop / 2;
	heading.style.backgroundPosition = `center ${Y}px`;
});

// back to tp button 
//get button
let myBtn = document.getElementById("myBtn");

//show button when scrolled past 20px from top
window.onscroll = function (){scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 20 || 
  document.documentElement.scrollTop > 20){
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

//back to top on click
function topFunction(){
  document.body.scrollTop = 0; //for safari
  document.documentElement.scrollTop = 0; //for others
}


//services
var carousalV = document.getElementById('verticalWrapperId'),
    carousalH = document.getElementById('horizontalWrapperId'),
    cardsLength = 6; // Should always be equal to cards length

document.getElementById('leftBtnId').addEventListener('click', function(e) {
  e.preventDefault();
  let sl = carousalH.scrollLeft,
      ssH = carousalH.scrollWidth / cardsLength,
      
      st = carousalV.scrollTop,
      ssV = carousalV.scrollHeight / cardsLength;
  
  if ((sl - ssH) <= 0) {
    carousalH.scrollTo({ left: 0, behaviour: 'smooth' });
  } else {
    carousalH.scrollTo({ left: sl - ssH, behaviour: 'smooth' });
  }
  
  if ((st - ssV) <= 0) {
    carousalV.scrollTo({ top: 0, behaviour: 'smooth' });
  } else {
    carousalV.scrollTo({ top: st - ssV, behaviour: 'smooth' });
  }
});

document.getElementById('rightBtnId').addEventListener('click', function(e) {
  e.preventDefault();
  let sl = carousalH.scrollLeft,
      cw = carousalH.scrollWidth,
      ssH = cw / cardsLength,

      st = carousalV.scrollTop,
      ch = carousalV.scrollHeight,
      ssV = ch / cardsLength;
  
  if ((sl + ssH) >= cw) {
    carousalH.scrollTo({ left: cw, behaviour: 'smooth' });
  } else {
    carousalH.scrollTo({ left: sl + ssH, behaviour: 'smooth' });
  }
  
  if ((st + ssV) >= ch) {
    carousalV.scrollTo({ top: ch, behaviour: 'smooth' });
  } else {
    carousalV.scrollTo({ top: st + ssV, behaviour: 'smooth' });
  }
});
/*GALLERY*/ 
const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
  for(var i = 0; i < imgContent.length; i++) {
    x = e.pageX;
    y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
};

document.addEventListener('mousemove', showImgContent);