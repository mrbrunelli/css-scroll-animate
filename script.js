const target = document.querySelectorAll("[data-animate]");
const animationClass = "animate";

const animateScroll = () => {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach((e) => {
    if (windowTop > e.offsetTop) {
      e.classList.add(animationClass);
    } else {
      e.classList.remove(animationClass);
    }
  });
};

animateScroll();

if (target.length) {
  window.addEventListener("scroll", () => {
    animateScroll();
  });
}
