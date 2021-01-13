const toTopButton = document.getElementById("toTop");
let toTopInterval = null;

toTopButton.onclick = () => {
  if (toTopInterval) return;

  toTopInterval = setInterval(() => {
    if (scrollY < 10) {
      clearInterval(toTopInterval);
      toTopInterval = null;
      return;
    }

    scrollBy(0, -40);
  }, 20);
};
