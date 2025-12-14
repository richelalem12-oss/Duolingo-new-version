// ==================== LOGIN MODAL FUNCTIONS ====================
function openLoginModal() {
  const loginModal = document.getElementById("loginModal");
  if (loginModal) {
    loginModal.style.display = "flex";
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";
    loginModal.classList.remove("closing");
  }
}

function closeLoginModal() {
  const loginModal = document.getElementById("loginModal");
  if (loginModal) {
    loginModal.classList.add("closing");
    setTimeout(() => {
      loginModal.style.display = "none";
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "auto";
      loginModal.classList.remove("closing");
    }, 300);
  }
}

function forgotPassword() {
  const emailInput = document.querySelector('#loginModal input[type="text"]');
  if (emailInput && emailInput.value) {
    alert(`Password reset link would be sent to: ${emailInput.value}`);
  } else {
    if (emailInput) {
      emailInput.focus();
      emailInput.style.borderColor = "#ef4444";
      emailInput.style.boxShadow = "0 0 0 3px rgba(239, 68, 68, 0.2)";
      setTimeout(() => {
        emailInput.style.borderColor = "#1e293b";
        emailInput.style.boxShadow = "none";
      }, 2000);
    }
    alert("Please enter your email address first");
  }
}

function loginWithGoogle() {
  alert(
    "Google login would be implemented here\n\nThis would typically redirect to Google OAuth."
  );
}

function loginWithFacebook() {
  alert(
    "Facebook login would be implemented here\n\nThis would typically redirect to Facebook OAuth."
  );
}

// ==================== HEADER SCROLL FUNCTIONALITY ====================
function initHeaderScroll() {
  window.addEventListener("scroll", () => {
    const languageBox = document.getElementById("languageBox");
    const getStartedBtn = document.getElementById("get-started-header");

    if (!languageBox || !getStartedBtn) return;

    if (window.scrollY > 400) {
      languageBox.classList.remove("visible");
      languageBox.classList.add("hidden");
      getStartedBtn.classList.remove("hidden");
      getStartedBtn.classList.add("visible");
    } else {
      languageBox.classList.remove("hidden");
      languageBox.classList.add("visible");
      getStartedBtn.classList.remove("visible");
      getStartedBtn.classList.add("hidden");
    }
  });
}

// ==================== LANGUAGE CAROUSEL FUNCTIONALITY ====================
// function initLanguageCarousel() {
//   const carousel = document.querySelector(".language-carousel");
//   const prevBtn = document.getElementById("prevBtn");
//   const nextBtn = document.getElementById("nextBtn");
//   const langList = document.getElementById("langList");

//   if (!carousel || !prevBtn || !nextBtn || !langList) return;

//   const scrollAmount = 180;
//   const autoScrollInterval = 4000;
//   let autoScrollTimer;

//   function updateButtonStates() {
//     const scrollLeft = langList.scrollLeft;
//     const scrollWidth = langList.scrollWidth;
//     const clientWidth = langList.clientWidth;

//     if (scrollLeft <= 10) {
//       prevBtn.disabled = true;
//       carousel.classList.add("scroll-right");
//       carousel.classList.remove("scroll-left");
//     } else {
//       prevBtn.disabled = false;
//       carousel.classList.add("scroll-left");
//     }

//     if (scrollLeft + clientWidth >= scrollWidth - 10) {
//       nextBtn.disabled = true;
//       carousel.classList.add("scroll-left");
//       carousel.classList.remove("scroll-right");
//     } else {
//       nextBtn.disabled = false;
//       carousel.classList.add("scroll-right");
//     }

//     if (scrollLeft > 10 && scrollLeft + clientWidth < scrollWidth - 10) {
//       carousel.classList.add("scroll-left");
//       carousel.classList.add("scroll-right");
//     }
//   }

//   prevBtn.addEventListener("click", function () {
//     langList.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//     setTimeout(updateButtonStates, 300);
//   });

//   nextBtn.addEventListener("click", function () {
//     langList.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     setTimeout(updateButtonStates, 300);
//   });

//   langList.addEventListener("scroll", updateButtonStates);

//   // Language item click selection
//   const languageItems = langList.querySelectorAll(".language-item");
//   languageItems.forEach((item) => {
//     item.addEventListener("click", function () {
//       languageItems.forEach((i) => i.classList.remove("selected"));
//       this.classList.add("selected");
//     });
//   });

//   // Keyboard navigation
//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft" && !prevBtn.disabled) {
//       prevBtn.click();
//     } else if (e.key === "ArrowRight" && !nextBtn.disabled) {
//       nextBtn.click();
//     }
//   });

//   // Handle window resize
//   let resizeTimeout;
//   window.addEventListener("resize", function () {
//     clearTimeout(resizeTimeout);
//     resizeTimeout = setTimeout(updateButtonStates, 250);
//   });

//   updateButtonStates();
// }

// ==================== ENHANCED LANGUAGE MENU FUNCTIONALITY ====================
// function initEnhancedLanguageMenu() {
//   const languageBtn = document.getElementById("toggleMenu");
//   const languageMenu = document.getElementById("languageMenu");

//   if (!languageBtn || !languageMenu) return;

//   const backdrop = document.createElement("div");
//   const closeBtn = document.createElement("button");

//   backdrop.className = "language-menu-backdrop";
//   document.body.appendChild(backdrop);

//   closeBtn.className = "language-menu-close";
//   closeBtn.innerHTML = "×";
//   closeBtn.setAttribute("aria-label", "Close language menu");
//   languageMenu.appendChild(closeBtn);

//   let isMenuOpen = false;
//   let selectedLanguage = "English";

//   function toggleMenu() {
//     isMenuOpen = !isMenuOpen;

//     if (isMenuOpen) {
//       languageMenu.classList.add("active");
//       backdrop.classList.add("active");
//       document.body.style.overflow = "hidden";

//       const arrow = languageBtn.querySelector(".arrow");
//       if (arrow) {
//         arrow.textContent = "▲";
//         arrow.style.transform = "rotate(0deg)";
//       }

//       setTimeout(() => {
//         const firstItem = languageMenu.querySelector(".language-item");
//         if (firstItem) firstItem.focus();
//       }, 100);
//     } else {
//       languageMenu.classList.add("closing");
//       backdrop.classList.remove("active");

//       const arrow = languageBtn.querySelector(".arrow");
//       if (arrow) {
//         arrow.textContent = "▼";
//         arrow.style.transform = "rotate(0deg)";
//       }

//       setTimeout(() => {
//         languageMenu.classList.remove("active", "closing");
//         document.body.style.overflow = "";
//       }, 250);
//     }
//   }

//   function closeMenu() {
//     if (isMenuOpen) {
//       isMenuOpen = false;
//       languageMenu.classList.add("closing");
//       backdrop.classList.remove("active");

//       const arrow = languageBtn.querySelector(".arrow");
//       if (arrow) {
//         arrow.textContent = "▼";
//       }

//       setTimeout(() => {
//         languageMenu.classList.remove("active", "closing");
//         document.body.style.overflow = "";
//       }, 250);
//     }
//   }

//   function handleLanguageSelect(languageName) {
//     selectedLanguage = languageName;

//     const selectedSpan = languageBtn.querySelector(".selected");
//     if (selectedSpan) {
//       selectedSpan.textContent = languageName.toUpperCase();
//     }

//     const allItems = languageMenu.querySelectorAll(".language-item");
//     allItems.forEach((item) => item.classList.remove("selected"));

//     event.target.closest(".language-item").classList.add("selected");

//     setTimeout(closeMenu, 200);
//     console.log(`Language changed to: ${languageName}`);
//   }

//   languageBtn.addEventListener("click", function (e) {
//     e.stopPropagation();
//     e.preventDefault();
//     toggleMenu();
//   });

//   backdrop.addEventListener("click", closeMenu);
//   closeBtn.addEventListener("click", closeMenu);

//   const languageItems = languageMenu.querySelectorAll(".language-item");
//   languageItems.forEach((item) => {
//     item.addEventListener("click", function (e) {
//       e.preventDefault();
//       const languageName = this.textContent.trim();
//       handleLanguageSelect(languageName);
//     });

//     item.setAttribute("tabindex", "0");
//     item.addEventListener("keydown", function (e) {
//       if (e.key === "Enter" || e.key === " ") {
//         e.preventDefault();
//         const languageName = this.textContent.trim();
//         handleLanguageSelect(languageName);
//       }
//     });
//   });

//   document.addEventListener("keydown", function (e) {
//     if (e.key === "Escape" && isMenuOpen) {
//       closeMenu();
//     }
//   });

//   document.addEventListener("click", function (e) {
//     if (
//       isMenuOpen &&
//       !languageBtn.contains(e.target) &&
//       !languageMenu.contains(e.target) &&
//       !backdrop.contains(e.target)
//     ) {
//       closeMenu();
//     }
//   });

//   const initialSelected = languageMenu.querySelector(".language-item");
//   if (initialSelected) {
//     initialSelected.classList.add("selected");
//   }
// }

// ==================== INITIALIZATION FUNCTION ====================
// function initializeAll() {
//   // Set initial state for header
//   const languageBox = document.getElementById("languageBox");
//   const getStartedBtn = document.getElementById("get-started-header");
//   if (languageBox) languageBox.classList.add("visible");
//   if (getStartedBtn) getStartedBtn.classList.add("hidden");

//   // Form submission
//   const loginForm = document.getElementById("loginForm");
//   if (loginForm) {
//     loginForm.addEventListener("submit", function (e) {
//       e.preventDefault();
//       const emailInput = this.querySelector('input[type="text"]');
//       const passwordInput = this.querySelector('input[type="password"]');

//       if (!emailInput.value || !passwordInput.value) {
//         alert("Please fill in all fields");
//         return;
//       }

//       const loginBtn = this.querySelector(".login-btn-modal");
//       const originalText = loginBtn.textContent;

//       loginBtn.textContent = "LOGGING IN...";
//       loginBtn.disabled = true;
//       loginBtn.style.opacity = "0.7";

//       setTimeout(() => {
//         alert(`Login successful!\n\nWelcome back to Duolingo!`);
//         closeLoginModal();
//         loginForm.reset();
//         loginBtn.textContent = originalText;
//         loginBtn.disabled = false;
//         loginBtn.style.opacity = "1";
//       }, 1500);
//     });
//   }

//   // Close modal when clicking outside
//   const loginModal = document.getElementById("loginModal");
//   if (loginModal) {
//     loginModal.addEventListener("click", function (e) {
//       if (e.target === this) {
//         closeLoginModal();
//       }
//     });
//   }

//   // Close modal with Escape key
//   document.addEventListener("keydown", function (e) {
//     if (e.key === "Escape" && loginModal?.style.display === "flex") {
//       closeLoginModal();
//     }
//   });

//   // Make sure all Get Started and Login buttons open the modal
//   const getStartedButtons = document.querySelectorAll(".btn-primary, .button");
//   getStartedButtons.forEach((button) => {
//     button.addEventListener("click", openLoginModal);
//   });

//   const loginButtons = document.querySelectorAll("#login-btn, .btn-tertiary");
//   loginButtons.forEach((button) => {
//     button.addEventListener("click", openLoginModal);
//   });

//   // Initialize header scroll
//   initHeaderScroll();

//   // Initialize carousel
//   initLanguageCarousel();

//   // Initialize enhanced language menu
//   setTimeout(initEnhancedLanguageMenu, 100);

//   console.log("All JavaScript functionality initialized successfully");
// }

// // ==================== MAKE FUNCTIONS GLOBALLY AVAILABLE ====================
// window.openLoginModal = openLoginModal;
// window.closeLoginModal = closeLoginModal;
// window.forgotPassword = forgotPassword;
// window.loginWithGoogle = loginWithGoogle;
// window.loginWithFacebook = loginWithFacebook;

// // ==================== START INITIALIZATION WHEN DOM IS LOADED ====================
// const list = document.getElementById("langList");
// const prev = document.getElementById("prevBtn");
// const next = document.getElementById("nextBtn");

// // Calculate scroll amount based on item width
// function getScrollAmount() {
//   const firstItem = list.querySelector(".language-item");
//   if (firstItem) {
//     // Get item width including margin/gap
//     const itemStyle = window.getComputedStyle(firstItem);
//     const itemWidth = firstItem.offsetWidth;
//     const gap = parseInt(window.getComputedStyle(list).gap) || 8;
//     return itemWidth + gap;
//   }
//   return 200; // Fallback value
// }

// function updateButtons() {
//   prev.classList.toggle("disabled", list.scrollLeft <= 0);
//   next.classList.toggle(
//     "disabled",
//     list.scrollLeft + list.clientWidth >= list.scrollWidth - 2
//   );
// }

// prev.onclick = () => {
//   const scrollAmount = getScrollAmount();
//   list.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//   setTimeout(updateButtons, 350);
// };

// next.onclick = () => {
//   const scrollAmount = getScrollAmount();
//   list.scrollBy({ left: scrollAmount, behavior: "smooth" });
//   setTimeout(updateButtons, 350);
// };

// list.addEventListener("scroll", updateButtons);
// window.onload = updateButtons;

// // Force single row on window resize
// window.addEventListener("resize", function () {
//   // Reset the list to ensure single row
//   list.style.flexWrap = "nowrap";
//   list.style.whiteSpace = "nowrap";
//   updateButtons();
// });