"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Reveal page once DOM is ready (matches CSS body.loaded fade-in)
  document.body.classList.add("loaded");

  // Navigation: mobile menu toggle + escape/resize handling
  const mobileMenuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("primary-menu");

  function closeMobileMenu() {
    if (!mobileMenuToggle || !mobileMenu) return;
    mobileMenu.classList.remove("is-open");
    mobileMenuToggle.classList.remove("is-open");
    mobileMenuToggle.setAttribute("aria-expanded", "false");
    mobileMenuToggle.setAttribute("aria-label", "Open menu");
    // Delay body overflow change to allow animation to complete
    setTimeout(() => {
      document.body.style.overflow = "";
    }, 300);
  }

  function openMobileMenu() {
    if (!mobileMenuToggle || !mobileMenu) return;
    mobileMenu.classList.add("is-open");
    mobileMenuToggle.classList.add("is-open");
    mobileMenuToggle.setAttribute("aria-expanded", "true");
    mobileMenuToggle.setAttribute("aria-label", "Close menu");
    document.body.style.overflow = "hidden";
  }

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", function () {
      const menuIsOpen = mobileMenu.classList.contains("is-open");
      menuIsOpen ? closeMobileMenu() : openMobileMenu();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMobileMenu();
    });

    const desktopBreakpoint = window.matchMedia("(min-width: 769px)");
    const handleBreakpoint = function () {
      if (desktopBreakpoint.matches) closeMobileMenu();
    };
    // Modern browsers
    if (typeof desktopBreakpoint.addEventListener === "function") {
      desktopBreakpoint.addEventListener("change", handleBreakpoint);
    } else if (typeof desktopBreakpoint.addListener === "function") {
      // Safari fallback
      desktopBreakpoint.addListener(handleBreakpoint);
    }
  }

  // Smooth anchor scrolling (also closes mobile menu on navigation)
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      const hash = this.getAttribute("href");
      if (!hash || hash === "#") return; // let default behavior
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        closeMobileMenu();
      }
    });
  });

  // Form UX: floating labels/filled state
  const contactForm = document.querySelector("form");
  if (contactForm) {
    const formInputs = contactForm.querySelectorAll("input, textarea");
    formInputs.forEach(function (input) {
      input.addEventListener("focus", function () {
        this.parentElement.classList.add("focused");
      });
      input.addEventListener("blur", function () {
        this.parentElement.classList.remove("focused");
        this.parentElement.classList.toggle("has-value", !!this.value);
      });
      if (input.value) input.parentElement.classList.add("has-value");
    });

    // Lightweight client-side validation feedback
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
      const status = document.getElementById("form-status");
      let valid = true;

      [name, email, message].forEach((f) => {
        if (!f || !f.value.trim()) {
          if (f) f.setAttribute("aria-invalid", "true");
          valid = false;
        } else {
          f.removeAttribute("aria-invalid");
        }
      });

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email && email.value && !emailPattern.test(email.value)) {
        email.setAttribute("aria-invalid", "true");
        valid = false;
      }

      if (status) {
        const successMsg =
          status.dataset && status.dataset.success
            ? status.dataset.success
            : "Thanks! We’ll get back to you soon.";
        const errorMsg =
          status.dataset && status.dataset.error
            ? status.dataset.error
            : "Please check the form and try again.";
        status.className = valid ? "success" : "error";
        status.textContent = valid ? successMsg : errorMsg;
      }
    });
  }

  // Intersection animations: unify reveal/animate logic
  const animateSelectors = [
    ".card",
    ".banner",
    "section h2",
    "section p.lead",
    ".cta-banner",
    ".testimonial-card",
  ];
  const toAnimate = document.querySelectorAll(animateSelectors.join(", "));
  const ioOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add("animated");
      });
    }, ioOptions);
    toAnimate.forEach(function (el) {
      el.classList.add("animate-on-scroll");
      io.observe(el);
    });
  } else {
    // Fallback: ensure content is visible without animations
    toAnimate.forEach(function (el) {
      el.classList.remove("animate-on-scroll");
      el.classList.add("animated");
    });
  }

  // Lazy-load images via data-src (optional enhancement)
  const lazyLoadImages = document.querySelectorAll("img[data-src]");
  if (lazyLoadImages.length) {
    const imageLoadObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const imageElement = entry.target;
          imageElement.src = imageElement.dataset.src;
          imageElement.classList.add("loaded");
          imageLoadObserver.unobserve(imageElement);
        }
      });
    });
    lazyLoadImages.forEach(function (image) {
      imageLoadObserver.observe(image);
    });
  }

  // Submit button loading feedback (non-blocking)
  const allButtons = document.querySelectorAll(".btn");
  allButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (this.type === "submit") {
        this.classList.add("loading");
        const buttonText = this.querySelector(".btn-text");
        const buttonLoading = this.querySelector(".btn-loading");
        if (buttonText && buttonLoading) {
          buttonText.style.display = "none";
          buttonLoading.style.display = "inline";
        }
        setTimeout(() => {
          this.classList.remove("loading");
          if (buttonText && buttonLoading) {
            buttonText.style.display = "inline";
            buttonLoading.style.display = "none";
          }
        }, 2000);
      }
    });
  });

  // Prefer reduced motion: disable parallax if requested
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Parallax hero (rAF-throttled)
  const heroSection = document.querySelector(".hero");
  if (heroSection && !prefersReducedMotion) {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.pageYOffset * -0.5;
          heroSection.style.transform = `translateY(${y}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Lightbox (only if gallery present)
  const lightboxContainer = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-img");
  const lightboxCaption = document.querySelector(".lightbox-caption");
  const lightboxCloseButton = document.querySelector(".lightbox-close");
  const lightboxPreviousButton = document.querySelector(".lightbox-prev");
  const lightboxNextButton = document.querySelector(".lightbox-next");
  const galleryItems = document.querySelectorAll(".gallery-item");

  let currentImageIndex = 0;
  let galleryImages = [];

  if (galleryItems.length > 0) {
    galleryImages = Array.from(galleryItems).map(function (item) {
      const img = item.querySelector("img");
      return { src: img.src, alt: img.alt, caption: item.dataset.caption };
    });

    galleryItems.forEach(function (item, index) {
      item.addEventListener("click", function () {
        openLightbox(index);
      });
    });

    if (lightboxCloseButton) {
      lightboxCloseButton.addEventListener("click", closeLightbox);
    }
    if (lightboxPreviousButton) {
      lightboxPreviousButton.addEventListener("click", showPreviousImage);
    }
    if (lightboxNextButton) {
      lightboxNextButton.addEventListener("click", showNextImage);
    }
    if (lightboxContainer) {
      lightboxContainer.addEventListener("click", function (event) {
        if (event.target === lightboxContainer) closeLightbox();
      });
    }
    document.addEventListener("keydown", function (event) {
      if (lightboxContainer && lightboxContainer.style.display !== "none") {
        if (event.key === "Escape") closeLightbox();
        if (event.key === "ArrowLeft") showPreviousImage();
        if (event.key === "ArrowRight") showNextImage();
      }
    });
  }

  function openLightbox(index) {
    currentImageIndex = index;
    showImage();
    if (lightboxContainer) {
      lightboxContainer.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  }

  function closeLightbox() {
    if (lightboxContainer) {
      lightboxContainer.style.display = "none";
      document.body.style.overflow = "";
    }
  }

  function showImage() {
    if (galleryImages[currentImageIndex]) {
      const currentImage = galleryImages[currentImageIndex];
      if (lightboxImage) {
        lightboxImage.src = currentImage.src;
        lightboxImage.alt = currentImage.alt;
      }
      if (lightboxCaption) {
        lightboxCaption.textContent = currentImage.caption;
      }
    }
  }

  function showPreviousImage() {
    currentImageIndex =
      (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage();
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    showImage();
  }

  // Restart logo animation on hover/click and after initial load
  const logoObjects = document.querySelectorAll(".logo-svg");
  function restartLogoAnimation(logoObject) {
    const svgDoc = logoObject.contentDocument || logoObject.getSVGDocument();
    if (!svgDoc) {
      setTimeout(() => restartLogoAnimation(logoObject), 100);
      return;
    }
    const pieces = svgDoc.querySelectorAll(".logo-piece");
    pieces.forEach((piece) => {
      piece.classList.remove("animate");
      piece.style.animation = "none";
      piece.style.opacity = "0";
      piece.style.transform =
        "scale(0.3) rotate(180deg) translate(200px, -200px)";
    });
    // reflow
    // eslint-disable-next-line no-unused-expressions
    logoObject.offsetHeight;
    pieces.forEach((piece, index) => {
      setTimeout(() => {
        piece.style.opacity = "";
        piece.style.transform = "";
        piece.classList.add("animate");
      }, index * 200);
    });
  }
  logoObjects.forEach((logoObject) => {
    logoObject.addEventListener("mouseenter", () =>
      restartLogoAnimation(logoObject)
    );
    logoObject.addEventListener("click", () =>
      restartLogoAnimation(logoObject)
    );
    setTimeout(() => restartLogoAnimation(logoObject), 500);
  });

  // Prevent context menu and selection on logo to avoid blue selection rectangle
  const logoImages = document.querySelectorAll(".logo-svg");
  logoImages.forEach(function(logo) {
    // Prevent context menu
    logo.addEventListener("contextmenu", function(e) {
      e.preventDefault();
    });
    
    // Prevent drag and drop
    logo.addEventListener("dragstart", function(e) {
      e.preventDefault();
    });
    
    // Prevent selection on mouse down
    logo.addEventListener("mousedown", function(e) {
      e.preventDefault();
    });
    
    // Prevent selection on mouse up
    logo.addEventListener("mouseup", function(e) {
      e.preventDefault();
    });
    
    // Clear any existing selection
    logo.addEventListener("selectstart", function(e) {
      e.preventDefault();
    });
    
    // Additional prevention for touch devices
    logo.addEventListener("touchstart", function(e) {
      e.preventDefault();
    });
  });

  // Footer year (remove inline duplicates in HTML)
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Theme toggle functionality
  const themeToggle = document.querySelector(".theme-toggle");
  
  console.log("Theme toggle button found:", !!themeToggle);
  
  // Get saved theme or default to light
  const savedTheme = localStorage.getItem("theme") || "light";
  console.log("Saved theme:", savedTheme);
  
  // Apply saved theme on page load
  document.documentElement.setAttribute("data-theme", savedTheme);
  
  if (themeToggle) {
    themeToggle.addEventListener("click", function() {
      console.log("Theme toggle clicked!");
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      
      console.log("Switching from", currentTheme, "to", newTheme);
      
      // Update theme
      document.documentElement.setAttribute("data-theme", newTheme);
      
      // Save to localStorage
      localStorage.setItem("theme", newTheme);
      
      console.log("Theme updated successfully");
    });
  } else {
    console.error("Theme toggle button not found!");
  }
});