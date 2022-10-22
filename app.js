const container = document.querySelector(".fluid-container");
const overlay = document.getElementById("overlay");

setTimeout(() => {
  overlay.style.display = "block";
  container.style.pointerEvents = "none";
}, 10000);

function off() {
  overlay.style.display = "none";
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
