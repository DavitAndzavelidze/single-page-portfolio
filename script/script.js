const carouselImages = document.querySelectorAll(".image__slider img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
let isMoving = false;

const size = carouselImages[0].clientWidth;

prevBtn.addEventListener("click", () => {
  if (isMoving == true) {
    return;
  } else {
    isMoving = true;
    let imgs = document.querySelector(".image__slider");
    let newImg = document.createElement("img");
    newImg.style.width = "size";
    newImg.src = document.querySelector(".image__slider").children[4].src;
    imgs.insertBefore(newImg, imgs.firstChild);
    setTimeout(() => {
      imgs.lastElementChild.style.width = "0px";
      imgs.firstElementChild.style.width = "size";
    });
    setTimeout(() => {
      imgs.lastElementChild.remove();
      isMoving = false;
    });
  }
});

nextBtn.addEventListener("click", () => {
  if (isMoving == true) {
    return;
  } else {
    isMoving = true;
    let imgs = document.querySelector(".image__slider");
    let newImg = document.createElement("img");
    newImg.style.width = "size";
    newImg.src = document.querySelector(".image__slider").children[0].src;
    imgs.insertBefore(newImg, imgs.lastChild);
    setTimeout(() => {
      imgs.firstElementChild.style.width = "0px";
      newImg.style.width = "size";
    });
    setTimeout(() => {
      imgs.firstElementChild.remove();
      isMoving = false;
    });
  }
});
