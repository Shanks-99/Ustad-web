declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

let isScriptLoaded = false;
let isInitialized = false;

export function loadGoogleTranslate(): void {
  if (isScriptLoaded) return;

  const script = document.createElement('script');
  script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.head.appendChild(script);
  isScriptLoaded = true;

  window.googleTranslateElementInit = function() {
    new window.google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'en,ar,fr,de,es,hi,ur,zh-CN',
      layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false
    }, 'google_translate_element');
    isInitialized = true;
  };
}

export function changeLanguage(langCode: string): void {
  // Wait for Google Translate to initialize
  if (!isInitialized) {
    const checkInterval = setInterval(() => {
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectElement) {
        clearInterval(checkInterval);
        selectElement.value = langCode;
        selectElement.dispatchEvent(new Event('change'));
      }
    }, 100);
    // Timeout after 10 seconds
    setTimeout(() => clearInterval(checkInterval), 10000);
    return;
  }

  const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
  if (selectElement) {
    selectElement.value = langCode;
    selectElement.dispatchEvent(new Event('change'));
  }
}

export function getCurrentLanguage(): string {
  const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
  return selectElement ? selectElement.value : 'en';
}

export function setStoredLanguage(langCode: string): void {
  localStorage.setItem('preferredLanguage', langCode);
}

export function getStoredLanguage(): string | null {
  return localStorage.getItem('preferredLanguage');
}
