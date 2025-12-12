/* =========================================================
   NetworkChuck Academy — Theme Controller
   Controls light / dark mode selection
   ========================================================= */

(function () {
  const STORAGE_KEY = 'nca-theme';
  const THEME_ATTR = 'data-theme';
  const TOGGLE_ID = 'themeToggle';

  /**
   * Apply theme to document
   */
  function setTheme(theme) {
    document.documentElement.setAttribute(THEME_ATTR, theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  /**
   * Get stored theme or system preference
   */
  function getInitialTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }

    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    return prefersDark ? 'dark' : 'light';
  }

  /**
   * Toggle between light and dark
   */
  function toggleTheme() {
    const current = document.documentElement.getAttribute(THEME_ATTR);
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }

  /**
   * Initialize theme on page load
   */
  function initTheme() {
    const theme = getInitialTheme();
    setTheme(theme);

    const toggleButton = document.getElementById(TOGGLE_ID);
    if (toggleButton) {
      toggleButton.addEventListener('click', toggleTheme);
    }
  }

  /**
   * Sync with OS theme changes (optional but nice)
   */
  function watchSystemTheme() {
    if (!window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return; // user preference overrides system
      setTheme(e.matches ? 'dark' : 'light');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    watchSystemTheme();
  });
})();
