(() => {
  "use strict";

  const STORAGE_KEY = "preferred-language";
  const SUPPORTED_LANGUAGES = ["de", "en"];

  const TRANSLATABLE_PARTS = [
    { selector: "[data-en]", englishKey: "en", germanKey: "de", attribute: null },
    { selector: "[data-en-label]", englishKey: "enLabel", germanKey: "deLabel", attribute: "aria-label" },
    { selector: "[data-en-content]", englishKey: "enContent", germanKey: "deContent", attribute: "content" },
  ];

  function readSavedLanguage() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function saveLanguage(language) {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
      return true;
    } catch {
      return false;
    }
  }

  function detectBrowserLanguage() {
    const browserLanguage = (navigator.language || "").toLowerCase();
    return browserLanguage.startsWith("de") ? "de" : "en";
  }

  function resolveInitialLanguage() {
    const savedLanguage = readSavedLanguage();
    return SUPPORTED_LANGUAGES.includes(savedLanguage) ? savedLanguage : detectBrowserLanguage();
  }

  function readValue(element, attribute) {
    return attribute ? element.getAttribute(attribute) : element.textContent;
  }

  function writeValue(element, attribute, value) {
    if (attribute) {
      element.setAttribute(attribute, value);
    } else {
      element.textContent = value;
    }
  }

  function rememberGermanOriginals() {
    TRANSLATABLE_PARTS.forEach(({ selector, germanKey, attribute }) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.dataset[germanKey] = readValue(element, attribute);
      });
    });
  }

  function translatePage(language) {
    TRANSLATABLE_PARTS.forEach(({ selector, englishKey, germanKey, attribute }) => {
      const key = language === "en" ? englishKey : germanKey;
      document.querySelectorAll(selector).forEach((element) => {
        writeValue(element, attribute, element.dataset[key]);
      });
    });
  }

  function showLanguageSpecificBlocks(language) {
    document.querySelectorAll("[data-show-lang]").forEach((element) => {
      element.hidden = element.dataset.showLang !== language;
    });
  }

  function markActiveButton(language) {
    document.querySelectorAll("[data-set-lang]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.setLang === language));
    });
  }

  function applyLanguage(language) {
    document.documentElement.lang = language;
    translatePage(language);
    showLanguageSpecificBlocks(language);
    markActiveButton(language);
  }

  function selectLanguage(language) {
    applyLanguage(language);
    saveLanguage(language);
  }

  function activateLanguageSwitch() {
    document.querySelectorAll("[data-set-lang]").forEach((button) => {
      button.addEventListener("click", () => selectLanguage(button.dataset.setLang));
    });
    document.querySelectorAll(".language-switch").forEach((group) => group.classList.add("is-ready"));
  }

  rememberGermanOriginals();
  applyLanguage(resolveInitialLanguage());
  activateLanguageSwitch();
})();
