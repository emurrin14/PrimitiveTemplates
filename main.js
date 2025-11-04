//Header Hamburger Open and Close
const hamOpen = document.getElementById("hamburgerOpen");
const hamClose = document.getElementById("hamburgerClose");
const hamMenucontainer = document.getElementById('hamburgerMenuContainer');
const hamMenuOverlay = document.getElementById('hamburgerMenuOverlay');

hamOpen.addEventListener("click", () => {
    hamMenucontainer.style.display = "flex";
    hamMenuOverlay.style.display = "block";

    hamOpen.classList.add("hamburgerActive");
    hamClose.classList.add("hamburgerCloseActive");
});

hamClose.addEventListener("click", () => {
    hamMenucontainer.style.display = "none";
    hamMenuOverlay.style.display = "none";

    hamOpen.classList.remove("hamburgerActive");
    hamClose.classList.remove("hamburgerCloseActive");
});

hamMenuOverlay.addEventListener("click", () => {
    hamMenucontainer.style.display = "none";
    hamMenuOverlay.style.display = "none";
  
    hamOpen.classList.remove("hamburgerActive");
    hamClose.classList.remove("hamburgerCloseActive");
  });