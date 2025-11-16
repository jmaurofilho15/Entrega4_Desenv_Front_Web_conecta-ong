/* assets/js/theme.js */
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
    };

    const checkInitialTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            applyTheme(savedTheme);
        } else if (systemPreference.matches) {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }
    };

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || (systemPreference.matches ? 'dark' : 'light');
            const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme); 
        });
    }
    systemPreference.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
    checkInitialTheme();
});