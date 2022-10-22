const upstox = document.querySelector(".gif-container-1");
const showreel = document.querySelector(".gif-container-2");
const muirak = document.querySelector(".gif-container-3");
const prilleasy = document.querySelector(".gif-container-4");
const sins = document.querySelector(".gif-container-5");
const prillad = document.querySelector(".gif-container-6");
const kood = document.querySelector(".gif-container-7");
const evolve = document.querySelector(".gif-container-8");
const lic = document.querySelector(".gif-container-9");
const prillmaking = document.querySelector(".gif-container-10");
const videoRedirect = (link, e) => {
  window.location = link;
};
const gifs = [
  upstox,
  showreel,
  muirak,
  prilleasy,
  sins,
  prillad,
  kood,
  evolve,
  lic,
  prillmaking,
];
const videoLinks = [
  "./video pages/upstox.html",
  "./video pages/showreel.html",
  "./video pages/muirak.html",
  "./video pages/prillmodernrelationeasy.html",
  "./video pages/sins.html",
  "./video pages/prillmodernday.html",
  "./video pages/kood.html",
  "./video pages/evolvefilm.html",
  "./video pages/v1resolve.html",
  "./video pages/prillmaking.html",
];
for (let i = 0; i < gifs.length; i++) {
  gifs[i].addEventListener("click", videoRedirect.bind(event, videoLinks[i]));
}
