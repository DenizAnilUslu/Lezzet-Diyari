// SLIDER + AUTO-SLIDE + FORM TOAST BİLDİRİMİ
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".slider-track");
  const slides = document.querySelectorAll(".slider .item");
  const prev = document.querySelector(".slider .prev");
  const next = document.querySelector(".slider .next");

  let index = 0;
  let slideInterval;

  function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlider();
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 4000); // 4 saniyede bir
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  if (prev && next) {
    prev.addEventListener("click", () => {
      stopAutoSlide();
      index = (index - 1 + slides.length) % slides.length;
      updateSlider();
      startAutoSlide();
    });

    next.addEventListener("click", () => {
      stopAutoSlide();
      index = (index + 1) % slides.length;
      updateSlider();
      startAutoSlide();
    });
  }

  // Slider üzerinde durunca otomatik kayma dursun
  const sliderElement = document.querySelector(".slider");
  if (sliderElement) {
    sliderElement.addEventListener("mouseenter", stopAutoSlide);
    sliderElement.addEventListener("mouseleave", startAutoSlide);
  }

  startAutoSlide();

  // İLETİŞİM FORMU TOAST MESAJI
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const toast = document.createElement("div");
      toast.className = "toast";
      toast.textContent = "Mesajınız gönderildi! En kısa sürede sizinle iletişime geçeceğiz.";
      document.body.appendChild(toast);

      setTimeout(() => {
        toast.classList.add("show");
      }, 100);

      setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 400);
      }, 3000);

      this.reset();
    });
  }
});