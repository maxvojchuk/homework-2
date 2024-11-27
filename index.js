// 1
// const slider = document.querySelector(".slider");
// const input = slider.querySelector(".slider__input");
// const image = slider.querySelector(".slider__image");
// function debounce(img, time) {
//   let timeout;
//   return function (...args) {
//     const context = this;
//     clearTimeout(timeout);
//     timeout = setTimeout(() => img.apply(context, args), time);
//   };
// }
// const debouncedUpdateImageSize = debounce(() => {
//   image.style.width = `${input.value}%`;
//   image.style.height = `${input.value}%`;
// }, 300);
// input.addEventListener("input", debouncedUpdateImageSize);
// updateImageSize();
//2
import _ from "./node_modules/lodash";
const redBox = document.querySelector("#box");

const debouncedMoveBox = _.debounce((event) => {
  let x = event.clientX;
  let y = event.clientY;
  redBox.style.left = `${x}px`;
  redBox.style.top = `${y}px`;
}, 100);
document.addEventListener("mousemove", debouncedMoveBox);
