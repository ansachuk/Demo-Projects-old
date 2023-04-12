import "modern-normalize/modern-normalize.css";
import "../sass/partials/_header.scss";

const checkbox = document.querySelector("#theme-mode-checkbox");

checkbox.addEventListener("click", e => {
  console.log(e.currentTarget.checked);
});
