const circles = document.querySelectorAll(
  ".e-product-suggest-one .circles div"
);
const showedImage = document.querySelector(".e-product-suggest-one #img");
const grayImage = document.querySelector(".e-product-suggest-one #grayImage");
circles[0].classList.add("active");

function e_product_suggest_one_imageSelector(index) {
  switch (index) {
    case 0:
      showedImage.style.backgroundImage = "url('./assets/movie514.png')";
      grayImage.style.backgroundImage = "url('./assets/movie514.png')";

      break;
    case 1:
      showedImage.style.backgroundImage = "url('./assets/MMMTIC.png')";
      grayImage.style.backgroundImage = "url('./assets/MMMTIC.png')";

      break;
    case 2:
      showedImage.style.backgroundImage = "url('./assets/movie514.png')";
      grayImage.style.backgroundImage = "url('./assets/movie514.png')";
      break;
    default:
      break;
  }

  for (let i = 0; i < circles.length; i++) {
    if (i === index) {
      circles[i].classList.add("active");
    } else {
      circles[i].classList.remove("active");
    }
  }
}
