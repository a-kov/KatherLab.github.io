// ========== BACKGROUND CAROUSEL & MOBILE MENU =========
document.addEventListener("DOMContentLoaded", () => {
  /* --- Background Carousel --- */
  let currentSlide = 0;
  const slides = document.querySelectorAll(".background-carousel img");
  const dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");
    });
    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentSlide = index;
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });

  setInterval(() => {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }, 6000);

  /* --- Mobile Menu: Toggle and Auto-Collapse --- */
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Toggle menu on click
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up
    navLinks.classList.toggle("show");
  });

  // Collapse menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navLinks.classList.remove("show");
    }
  });
});

// ========== NEWS CARDS CAROUSEL =========
document.addEventListener("DOMContentLoaded", () => {
  // Only run carousel functionality if viewport is wider than 768px
  if (window.innerWidth > 768) {
    const track = document.querySelector(".news-cards-carousel");
    const cards = document.querySelectorAll(".news-card");
    const leftBtn = document.querySelector(".carousel-arrow.left");
    const rightBtn = document.querySelector(".carousel-arrow.right");

    let currentIndex = 0;

    function getCardWidth() {
      return cards[0].offsetWidth + 30; // card width plus gap
    }

    function getVisibleCards() {
      return 4; // For desktop, we show 4 cards at a time
    }

    function getMaxIndex() {
      return cards.length - getVisibleCards();
    }

    function updateCarousel() {
      const offset = currentIndex * getCardWidth();
      track.style.transform = `translateX(-${offset}px)`;
    }

    function loopForward() {
      currentIndex = currentIndex >= getMaxIndex() ? 0 : currentIndex + 1;
      updateCarousel();
    }

    function loopBackward() {
      currentIndex = currentIndex <= 0 ? getMaxIndex() : currentIndex - 1;
      updateCarousel();
    }

    rightBtn.addEventListener("click", loopForward);
    leftBtn.addEventListener("click", loopBackward);

    // Optionally, enable autoplay for desktop
    // setInterval(loopForward, 4000);
  }
});




// ========== RESEARCH SECTION: TOPIC BUTTONS =========
document.addEventListener("DOMContentLoaded", () => {
  const topicBtns = document.querySelectorAll(".topic-btn");
  const cards = document.querySelectorAll(".research-card");

  topicBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      // Activate only the selected button
      topicBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Show only the corresponding research card
      cards.forEach((card, i) => {
        card.classList.toggle("active", i === index);
      });
    });
  });

  // On page load, show only the first research card
  cards.forEach((card, i) => {
    card.classList.toggle("active", i === 0);
  });
});
