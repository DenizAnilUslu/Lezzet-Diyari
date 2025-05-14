// İletişim formu submit işlemi ve toast bildirimi
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Toast mesajı oluştur
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = "Mesajınız gönderildi! En kısa sürede sizinle iletişime geçeceğiz.";
  document.body.appendChild(toast);

  // Göster
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // 3 saniye sonra gizle ve sil
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3000);

  this.reset(); // formu temizle
});