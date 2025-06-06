// Theme and Language Switcher
(function() {
    'use strict';

    // Dark Mode Toggle
    function initDarkMode() {
        const toggle = document.getElementById('dark-mode-toggle');
        const icon = toggle?.querySelector('.dark-mode-icon');
        
        if (!toggle) {
            console.log('Dark mode toggle not found');
            return;
        }
        
        if (!icon) {
            console.log('Dark mode icon not found');
            return;
        }

        // Check for saved theme preference or default to 'light'
        const currentTheme = localStorage.getItem('theme') || 'light';
        console.log('Current theme:', currentTheme);
        
        // Apply the saved theme
        document.documentElement.setAttribute('data-theme', currentTheme);
        document.body.setAttribute('data-theme', currentTheme);
        updateDarkModeIcon(icon, currentTheme);

        // Toggle functionality
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            console.log('Switching from', currentTheme, 'to', newTheme);
            
            document.documentElement.setAttribute('data-theme', newTheme);
            document.body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateDarkModeIcon(icon, newTheme);
        });
        
        console.log('Dark mode initialized');
    }

    function updateDarkModeIcon(icon, theme) {
        if (icon) {
            icon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }

    // Language Switcher
    function initLanguageSwitcher() {
        const toggle = document.getElementById('language-toggle');
        const langCurrent = toggle?.querySelector('.lang-current');
        const langOther = toggle?.querySelector('.lang-other');
        
        if (!toggle || !langCurrent || !langOther) {
            console.log('Language toggle elements not found');
            return;
        }

        // Check for saved language preference or default to 'en'
        const currentLang = localStorage.getItem('language') || 'en';
        console.log('Current language:', currentLang);
        
        // Apply the saved language and update toggle display
        switchLanguage(currentLang);
        updateLanguageToggleDisplay(currentLang, langCurrent, langOther);

        // Toggle functionality
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const currentLang = localStorage.getItem('language') || 'en';
            const newLang = currentLang === 'en' ? 'ja' : 'en';
            
            console.log('Switching from', currentLang, 'to', newLang);
            
            switchLanguage(newLang);
            updateLanguageToggleDisplay(newLang, langCurrent, langOther);
            localStorage.setItem('language', newLang);
        });
        
        console.log('Language switcher initialized');
    }

    function updateLanguageToggleDisplay(currentLang, langCurrentEl, langOtherEl) {
        if (currentLang === 'en') {
            langCurrentEl.textContent = 'EN';
            langOtherEl.textContent = 'JA';
        } else {
            langCurrentEl.textContent = 'JA';
            langOtherEl.textContent = 'EN';
        }
    }

    function switchLanguage(lang) {
        // Switch text content for elements with data-en and data-ja attributes
        document.querySelectorAll('[data-en][data-ja]').forEach(element => {
            if (lang === 'ja') {
                element.textContent = element.getAttribute('data-ja');
            } else {
                element.textContent = element.getAttribute('data-en');
            }
        });

        // Switch HTML content for elements with data-html-en and data-html-ja attributes
        document.querySelectorAll('[data-html-en][data-html-ja]').forEach(element => {
            if (lang === 'ja') {
                element.innerHTML = element.getAttribute('data-html-ja');
            } else {
                element.innerHTML = element.getAttribute('data-html-en');
            }
        });

        // Update document language attribute
        document.documentElement.setAttribute('lang', lang);
    }

    // Scroll to Top functionality
    function initScrollToTop() {
        const scrollToTopBtn = document.getElementById('scroll-to-top');
        
        if (!scrollToTopBtn) {
            console.log('Scroll to top button not found');
            return;
        }

        // Show/hide button based on scroll position
        function toggleScrollToTopButton() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        }

        // Scroll to top with smooth animation
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Event listeners
        window.addEventListener('scroll', toggleScrollToTopButton);
        scrollToTopBtn.addEventListener('click', scrollToTop);
        
        // Keyboard accessibility
        scrollToTopBtn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToTop();
            }
        });
        
        // Initial check
        toggleScrollToTopButton();
        
        console.log('Scroll to top initialized');
    }

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initDarkMode();
            initLanguageSwitcher();
            initScrollToTop();
        });
    } else {
        initDarkMode();
        initLanguageSwitcher();
        initScrollToTop();
    }
})();