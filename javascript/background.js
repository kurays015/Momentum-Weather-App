const backgrounds = document.querySelectorAll('.background');
let imgIndex = 0;

function changeBackground() {
  backgrounds.forEach((background, index) => {
    if (index === imgIndex) {
      background.classList.add('showing');
    } else {
      background.classList.remove('showing');
    }
  });

  imgIndex = (imgIndex + 1) % backgrounds.length;
}

setInterval(changeBackground, 1000*60);






