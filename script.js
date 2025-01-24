const menu = document.querySelector(".menu");
const closes = document.querySelector(".close");

let data = true;

document.querySelector(".js-button").addEventListener("click", (evt) => {
  evt.preventDefault();
  document
    .querySelector(".js-button")
    .closest(".header")
    .classList.toggle("open");

  if (data) {
    menu.style.display = "none";
    closes.style.display = "block";
    data = false;
  } else {
    menu.style.display = "block";
    closes.style.display = "none";
    data = true;
  }
});

  document.querySelectorAll('.js__link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); 

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Custom scroll animatsiya
      const startPosition = window.pageYOffset;
      const targetPosition = targetSection.offsetTop;
      const distance = targetPosition - startPosition;
      const duration = 1800; 
      let startTime = null;

      function scrollAnimation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) {
          requestAnimationFrame(scrollAnimation);
        }
      }

      function ease(t, b, c, d) {
        const easeInOutQuad = t => {
          if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
          return (-c / 2) * (--t * (t - 2) - 1) + b;
        };
        return easeInOutQuad(t);
      }

      requestAnimationFrame(scrollAnimation);
    });
  });

  document.querySelectorAll('.main-js__link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); 

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Custom scroll animatsiya
      const startPosition = window.pageYOffset;
      const targetPosition = targetSection.offsetTop;
      const distance = targetPosition - startPosition;
      const duration = 1100; 
      let startTime = null;

      function scrollAnimation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) {
          requestAnimationFrame(scrollAnimation);
        }
      }

      function ease(t, b, c, d) {
        const easeInOutQuad = t => {
          if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
          return (-c / 2) * (--t * (t - 2) - 1) + b;
        };
        return easeInOutQuad(t);
      }

      requestAnimationFrame(scrollAnimation);
    });
  });