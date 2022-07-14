const gifsContainer = document.querySelectorAll(".gif");
const gifBox = document.querySelector(".gif-container");
const iframeContainer = document.querySelector(".iframe-container");
const detailsContainer = document.querySelector(".details-container");
const title = document.querySelector(".title");
const info = document.querySelector(".info-desc");
const close = document.querySelector(".close");
const closeLic = document.querySelector(".closeLic");
const licContainer = document.querySelector(".lic-container");
const lic = document.querySelector(".lic");
const fluidContainer = document.querySelector(".fluid-container");
const videos = [
  "https://www.youtube.com/embed/PBLKYOiWEwI",
  "https://www.youtube.com/embed/5y9AOv6W5XA",
  "https://www.youtube.com/embed/N9PcO44WwN8",
  "https://www.youtube.com/embed/N9PcO44WwN8",
  "https://www.youtube.com/embed/WOupJk1hDHY",
  "https://www.youtube.com/embed/cCP_khFMmWY",
  "https://www.youtube.com/embed/JWNOLdpwa3Q",
  "https://www.youtube.com/embed/I3sWOXobdM8",
  "https://www.youtube.com/embed/hQ7LPXDcolA",
];
const titles = [
  "Title 1",
  "Title 2",
  "Title 3",
  "Title 4",
  "Title 5",
  "Title 6",
  "Title 7",
  "Title 8",
  "Title 9",
];
const des = [
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate,voluptatibus esse? Pariatur perferendis obcaecati beatae nulla exnatus vel, ut nam exercitationem, asperiores dolorum quod, liberoreprehenderit sed quam minima! Itaque nobis placeat vel perferendisaperiam facere voluptatum ipsam quia cupiditate, inventore sint istemaxime possimus amet fugiat minus alias nam sit temporibus quodrepudiandae doloribus corrupti saepe culpa. Laborum.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate,voluptatibus esse? Pariatur perferendis obcaecati beatae nulla exnatus vel, ut nam exercitationem, asperiores dolorum quod, liberoreprehenderit sed quam minima! Itaque nobis placeat vel perferendisaperiam facere voluptatum ipsam quia cupiditate, inventore sint istemaxime possimus amet fugiat minus alias nam sit temporibus quodrepudiandae doloribus corrupti saepe culpa. Laborum.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate,voluptatibus esse? Pariatur perferendis obcaecati beatae nulla exnatus vel, ut nam exercitationem, asperiores dolorum quod, liberoreprehenderit sed quam minima! Itaque nobis placeat vel perferendisaperiam facere voluptatum ipsam quia cupiditate, inventore sint istemaxime possimus amet fugiat minus alias nam sit temporibus quodrepudiandae doloribus corrupti saepe culpa. Laborum.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate,voluptatibus esse? Pariatur perferendis obcaecati beatae nulla exnatus vel, ut nam exercitationem, asperiores dolorum quod, liberoreprehenderit sed quam minima! Itaque nobis placeat vel perferendisaperiam facere voluptatum ipsam quia cupiditate, inventore sint istemaxime possimus amet fugiat minus alias nam sit temporibus quodrepudiandae doloribus corrupti saepe culpa. Laborum.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate,voluptatibus esse? Pariatur perferendis obcaecati beatae nulla exnatus vel, ut nam exercitationem, asperiores dolorum quod, liberoreprehenderit sed quam minima! Itaque nobis placeat vel perferendisaperiam facere voluptatum ipsam quia cupiditate, inventore sint istemaxime possimus amet fugiat minus alias nam sit temporibus quodrepudiandae doloribus corrupti saepe culpa. Laborum.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate,voluptatibus esse? Pariatur perferendis obcaecati beatae nulla exnatus vel, ut nam exercitationem, asperiores dolorum quod, liberoreprehenderit sed quam minima! Itaque nobis placeat vel perferendisaperiam facere voluptatum ipsam quia cupiditate, inventore sint istemaxime possimus amet fugiat minus alias nam sit temporibus quodrepudiandae doloribus corrupti saepe culpa. Laborum.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate,voluptatibus esse? Pariatur perferendis obcaecati beatae nulla exnatus vel, ut nam exercitationem, asperiores dolorum quod, liberoreprehenderit sed quam minima! Itaque nobis placeat vel perferendisaperiam facere voluptatum ipsam quia cupiditate, inventore sint istemaxime possimus amet fugiat minus alias nam sit temporibus quodrepudiandae doloribus corrupti saepe culpa. Laborum.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate,voluptatibus esse? Pariatur perferendis obcaecati beatae nulla exnatus vel, ut nam exercitationem, asperiores dolorum quod, liberoreprehenderit sed quam minima! Itaque nobis placeat vel perferendisaperiam facere voluptatum ipsam quia cupiditate, inventore sint istemaxime possimus amet fugiat minus alias nam sit temporibus quodrepudiandae doloribus corrupti saepe culpa. Laborum.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate,voluptatibus esse? Pariatur perferendis obcaecati beatae nulla exnatus vel, ut nam exercitationem, asperiores dolorum quod, liberoreprehenderit sed quam minima! Itaque nobis placeat vel perferendisaperiam facere voluptatum ipsam quia cupiditate, inventore sint istemaxime possimus amet fugiat minus alias nam sit temporibus quodrepudiandae doloribus corrupti saepe culpa. Laborum.",
];
close.addEventListener("click", function () {
  fluidContainer.style.visibility = "visible";
  detailsContainer.style.display = "none";
  licContainer.style.display = "none";
  if (window.innerWidth > 450) {
    gifBox.style.display = "grid";
  } else {
    gifBox.style.display = "flex";
  }
  window.addEventListener("resize", function () {
    if (window.innerWidth > 450) {
      gifBox.style.display = "grid";
    } else {
      gifBox.style.display = "flex";
    }
  });
});
closeLic.addEventListener("click", function () {
  fluidContainer.style.display = "block";
  licContainer.style.display = "none";
  gifBox.style.display = "grid";
  window.addEventListener("resize", function () {
    if (window.innerWidth > 450) {
      gifBox.style.display = "grid";
    } else {
      gifBox.style.display = "flex";
    }
  });
});
const gifArr = Array.prototype.slice.call(gifsContainer);
const showPopUp = () => {
  detailsContainer.style.display = "grid";
  gifBox.style.display = "none";
  fluidContainer.style.visibility = "hidden";
};
const eventListener = (item) => {
  item.addEventListener("click", showPopUp);
};
gifsContainer.forEach(eventListener);
for (let i = 0; i < videos.length; i++) {
  gifsContainer[i].addEventListener("click", function () {
    iframeContainer.src = videos[i];
    title.innerText = titles[i];
    info.innerText = des[i];
  });
}

lic.addEventListener("click", function () {
  fluidContainer.style.display = "none";
  licContainer.style.display = "grid";
  gifBox.style.display = "none";
});
