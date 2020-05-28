const image = document.querySelector("img");

document.querySelectorAll(".range-val").forEach((item) => {
  item.addEventListener("click", (e) => {
    //width
    if (e.target.name == "width") {
      image.style.width = `${e.target.value}px`;
    }
    //height
    else if (e.target.name == "height") {
      image.style.height = `${e.target.value}px`;
    }
    //border
    else if (e.target.name == "border") {
      image.style.border = `${e.target.value}px solid white`;
    }
    //round-corners
    else if (e.target.name == "corners") {
      console.log(e.target.value);
      image.style = `border-radius:${e.target.value}px`;
    }
    //blur-effect
    else if (e.target.name == "blur") {
      image.style.filter = `blur(${e.target.value}px)`;
      console.log(e.target.value);
    }
    //saturation
    else if (e.target.name == "saturation") {
      image.style.filter = `saturate(${e.target.value}%)`;
    }
    //brightness
    else if (e.target.name == "brightness") {
      image.style.filter = `brightness(${e.target.value}%)`;
    }
    //contrast
    else {
      image.style.filter = `grayscale(${e.target.value}%)`;
      console.log(e.target.value);
    }
    e.preventDefault();
  });
});
