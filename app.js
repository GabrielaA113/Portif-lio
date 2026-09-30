// =========================================================
// GABY'S WEB SPACE — JavaScript
// Modo claro / modo escuro
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");

  // Se o botão ainda não existir no HTML, não faz nada.
  if (!themeToggle) {
    return;
  }

  const themeIcon = themeToggle.querySelector(".theme-icon");
  const themeText = themeToggle.querySelector(".theme-text");

  function applyTheme(isDark) {
    body.classList.toggle("dark-mode", isDark);

    themeToggle.setAttribute(
      "aria-pressed",
      String(isDark)
    );

    themeToggle.setAttribute(
      "aria-label",
      isDark
        ? "Ativar modo claro"
        : "Ativar modo escuro"
    );

    if (themeIcon) {
      themeIcon.textContent = isDark ? "☀" : "☾";
    }

    if (themeText) {
      themeText.textContent = isDark
        ? "Modo claro"
        : "Modo escuro";
    }
  }

  // Recupera a preferência salva no navegador.
  const savedTheme = localStorage.getItem("gaby-theme");

  applyTheme(savedTheme === "dark");

  // Alterna o tema ao clicar no botão.
  themeToggle.addEventListener("click", () => {
    const isDark = !body.classList.contains("dark-mode");

    applyTheme(isDark);

    localStorage.setItem(
      "gaby-theme",
      isDark ? "dark" : "light"
    );
  });
});