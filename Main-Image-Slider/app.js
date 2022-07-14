const container = document.querySelector(".fluid-container");
// function on() {
//   document.getElementById("overlay").style.display = "block";
//   container.style.pointerEvents = "none";
// }

function off() {
  document.getElementById("overlay").style.display = "none";
  container.style.pointerEvents = "auto";
  container.style.position = "static";
  container.style.overflow = "visible";
}
const whatsApp = document.querySelector("#whatsapp");
const whatsAppTarget = document.querySelector("#target");
const onclick = () => {
  let phoneNumber = "8075187612";
  let text =
    "Hi, I would like to know more about Organic Cinema.Inc http://www.organiccinema.in";
  location.href = `https://wa.me/${phoneNumber}?text=${text}`;
};

whatsAppTarget.addEventListener("click", onclick);
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

//Clients,Testinomials,About,Digital,Contact
const formClose = document.querySelector("#form-close");
const formContainer = document.querySelector(".container-form");
const contactUs = document.querySelector("#contactus");
contactUs.addEventListener("click", function () {
  formContainer.style.display = "grid";
});
formClose.addEventListener("click", function () {
  formContainer.style.display = "none";
});
const odometer = document.querySelector("#odometer");

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    top + height <= window.pageYOffset + window.innerHeight &&
    left + width <= window.pageXOffset + window.innerWidth
  );
}
function userSeeing() {
  if (elementInViewport(odometer)) {
    setTimeout(function () {
      odometer.innerHTML = 115468;
    }, 1000);
  }
}
window.addEventListener("scroll", userSeeing);
