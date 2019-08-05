const leftArr = document.querySelector(".left.arrow");
const rightArr = document.querySelector(".right.arrow");
const imgWrapper = document.querySelector(".imgWrapper");

class Carousel {
  constructor() {
    this.imgNum = 0;
    this.Width = imgWrapper.offsetWidth;
    this.transitionVal = "transform 0.1s ease-in-out";
  }
}

const carousel = new Carousel();

const leftMove = function() {
  if (carousel.imgNum === 2) {
    imgWrapper.style.transition = "transform 0.1s ease-in-out";
    imgWrapper.style.transform = `translate3D(-${carousel.Width}px, 0, 0)`;
  } else {
    carousel.imgNum++;
    imgWrapper.style.transition = "transform 0.1s ease-in-out";
    carousel.Width += imgWrapper.offsetWidth;
    imgWrapper.style.transform = `translate3D(-${carousel.Width}px, 0, 0)`;
  }
};

const rightMove = function() {
  if (carousel.imgNum > 0) {
    carousel.imgNum--;
    carousel.Width -= imgWrapper.offsetWidth;
    imgWrapper.style.transition = "transform 0.1s ease-in-out";
    imgWrapper.style.transform = `translate3D(-${carousel.Width - imgWrapper.offsetWidth}px, 0, 0)`;
  } else {
    imgWrapper.style.transition = "transform 0.1s ease-in-out";
    imgWrapper.style.transform = `translate3D(${0}px, 0, 0)`;
  }
};

const moveimg = function() {
  imgWrapper.style.transition = "none";
  imgWrapper.insertBefore(
    imgWrapper.lastElementChild.cloneNode(true),
    imgWrapper.firstElementChild
  );
  imgWrapper.removeChild(imgWrapper.lastElementChild);
  imgWrapper.style.transform = `translate3D(-280px,0,0)`;
};

const reverseImg = function() {
  imgWrapper.style.transition = "none";
  imgWrapper.appendChild(imgWrapper.firstElementChild.cloneNode(true));
  imgWrapper.removeChild(imgWrapper.firstElementChild);
  imgWrapper.style.transform = `translate3D(-560px,0,0)`;
};

leftArr.addEventListener("click", rightMove);
rightArr.addEventListener("click", leftMove);

imgWrapper.addEventListener("transitionend", () => {
  if (carousel.imgNum === 0) moveimg();
  if (carousel.imgNum >= 2) reverseImg();
});

window.onload = function() {
  moveimg();
};
