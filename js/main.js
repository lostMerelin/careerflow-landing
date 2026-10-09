const menuToggle = document.querySelector(".header__menu-toggle");
const nav = document.querySelector(".nav");
const toast = document.querySelector(".toast");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Открыть меню");
    });
  });
}

// Demo interactions: the project is a static portfolio landing page, so account
// actions show a clear message rather than pretending to register or log in.
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3000);
}

document.querySelectorAll('a[href="#login"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showToast("Демо-версия: авторизация пока не подключена.");
  });
});

document.querySelectorAll('a[href="#start"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showToast("Это демонстрационный лендинг. Регистрация не подключена.");
  });
});

// Keep the task checklist interactive inside the dashboard preview.
document.querySelectorAll(".task input").forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const taskName = checkbox.nextElementSibling?.textContent?.trim() || "Задача";
    showToast(checkbox.checked ? `Задача отмечена: ${taskName}` : `Задача возвращена в список: ${taskName}`);
  });
});
