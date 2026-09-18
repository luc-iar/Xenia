// MENU TOGGLE

const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
  });
    
    const images = document.querySelectorAll(".gallery-image");

    const nextButton = document.querySelector(".next");
    const previousButton = document.querySelector(".previous");

    const currentCounter = document.querySelector("#current");
    const totalCounter = document.querySelector("#total");

    let currentIndex = 0;

    // Time between automatic transitions
    const intervalTime = 5000;

    let autoplay;


    // --------------------
    // INITIAL SETUP
    // --------------------

    totalCounter.textContent = String(images.length).padStart(2, "0");


    // --------------------
    // SHOW IMAGE
    // --------------------

    function showImage(index) {

      images[currentIndex].classList.remove("active");

      currentIndex = index;

      if (currentIndex >= images.length) {
        currentIndex = 0;
      }

      if (currentIndex < 0) {
        currentIndex = images.length - 1;
      }

      images[currentIndex].classList.add("active");

      currentCounter.textContent =
        String(currentIndex + 1).padStart(2, "0");
    }


    // --------------------
    // NEXT / PREVIOUS
    // --------------------

    function nextImage() {
      showImage(currentIndex + 1);
    }

    function previousImage() {
      showImage(currentIndex - 1);
    }


    nextButton.addEventListener("click", () => {
      nextImage();
      restartAutoplay();
    });


    previousButton.addEventListener("click", () => {
      previousImage();
      restartAutoplay();
    });


    // --------------------
    // AUTOPLAY
    // --------------------

    function startAutoplay() {

      autoplay = setInterval(() => {
        nextImage();
      }, intervalTime);

    }


    function restartAutoplay() {

      clearInterval(autoplay);

      startAutoplay();

    }


    startAutoplay();


    // --------------------
    // KEYBOARD NAVIGATION
    // --------------------

    document.addEventListener("keydown", (event) => {

      if (event.key === "ArrowRight") {
        nextImage();
        restartAutoplay();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
        restartAutoplay();
      }

    });


    // --------------------
    // PAUSE WHEN HOVERING
    // --------------------

    const gallery = document.querySelector(".gallery");

    gallery.addEventListener("mouseenter", () => {
      clearInterval(autoplay);
    });

    gallery.addEventListener("mouseleave", () => {
      startAutoplay();
    });