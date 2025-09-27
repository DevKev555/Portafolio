// Obtener el selector de idioma y todos los elementos con data-key
const languageSelector = document.getElementById("languageSelector");
const translatableElements = document.querySelectorAll("[data-key]");
// Función para cambiar idioma
function setLanguage(lang) {
  translatableElements.forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Detectar cambio de idioma
languageSelector.addEventListener("change", (e) => {
  const selectedLang = e.target.value;
  setLanguage(selectedLang);
});

// Inicializar idioma por defecto
setLanguage(languageSelector.value || "en");