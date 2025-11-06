document.addEventListener("DOMContentLoaded", () => {
    //Header Hamburger Profile, and Cart Open and Close
    const hamOpen = document.getElementById("hamburgerOpen");
    const hamClose = document.getElementById("hamburgerClose");
    const hamMenucontainer = document.getElementById('hamburgerMenuContainer');
    const hamMenuOverlay = document.getElementById('hamburgerMenuOverlay');
    const profileBtn = document.getElementById("profileBtn");
    const cartBtn = document.getElementById("cartBtn");
    const profileDropdown = document.getElementById("profileDropdown");

    if (hamOpen) {
        hamOpen.addEventListener("click", () => {
            hamMenucontainer.style.display = "flex";
            hamMenuOverlay.style.display = "block";

            hamOpen.classList.add("hamburgerActive");
            hamClose.classList.add("hamburgerCloseActive");
        });
    }

    if (hamClose) {
        hamClose.addEventListener("click", () => {
            hamMenucontainer.style.display = "none";
            hamMenuOverlay.style.display = "none";

            hamOpen.classList.remove("hamburgerActive");
            hamClose.classList.remove("hamburgerCloseActive");
        });
    }

    if (hamMenuOverlay) {
        hamMenuOverlay.addEventListener("click", () => {
            hamMenucontainer.style.display = "none";
            hamMenuOverlay.style.display = "none";
        
            hamOpen.classList.remove("hamburgerActive");
            hamClose.classList.remove("hamburgerCloseActive");
        });
    }

    if (profileBtn) {
        profileBtn.addEventListener("click", () => {
            profileDropdown.classList.toggle("profileDropdownActive");
        });
    }

    //Mobile Footer Accordian Buttons
    const infoBtn = document.getElementById("footerInformationBtn");
    //accordian menu toggles
    const infoDropdown = document.getElementById("footerAccordianDropdown");

    if (infoBtn) {
        infoBtn.addEventListener("click", () => {
            infoDropdown.classList.toggle("footerAccordianDropdownActive");
        });
    }
});