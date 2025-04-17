function saveThemePreference(theme) {
  localStorage.setItem('userTheme', theme);
}

function getThemePreference() {
  return localStorage.getItem('userTheme') || 'light'; // Default to 'light' if not set
}

// Example usage:
saveThemePreference('dark'); // Save 'dark' as the preferred theme
let currentTheme = getThemePreference();
console.log(`Current theme preference: ${currentTheme}`);
