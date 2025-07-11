const slider = document.getElementById("sale-slider");
const leftNavigation = document.getElementById("left-navigation");
const rightNavigation = document.getElementById("right-navigation");

leftNavigation.addEventListener("click", function () {
  const firstCard = document.querySelector(".card");
  if (firstCard) {
    const scrollAmount = firstCard.offsetWidth + 50;
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
    console.warn("No product cards found.");
  }
});

rightNavigation.addEventListener("click", function () {
  const firstCard = document.querySelector(".card");
  if (firstCard) {
    const scrollAmount = firstCard.offsetWidth + 50;
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" }); // ✅ FIXED
  } else {
    console.warn("No product cards found.");
  }
});
