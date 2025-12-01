// Theme and Language Switcher
(function() {
    'use strict';

    // Dark Mode Toggle
    function initDarkMode() {
        const toggle = document.getElementById('dark-mode-toggle');
        const toggleDesktop = document.getElementById('dark-mode-toggle-desktop');
        const icon = toggle?.querySelector('.dark-mode-icon');
        const iconDesktop = toggleDesktop?.querySelector('.dark-mode-icon');
        
        if (!toggle && !toggleDesktop) {
            console.log('Dark mode toggle not found');
            return;
        }

        // Check for saved theme preference or default to 'light'
        const currentTheme = localStorage.getItem('theme') || 'light';
        console.log('Current theme:', currentTheme);
        
        // Apply the saved theme
        document.documentElement.setAttribute('data-theme', currentTheme);
        document.body.setAttribute('data-theme', currentTheme);
        if (icon) updateDarkModeIcon(icon, currentTheme);
        if (iconDesktop) updateDarkModeIcon(iconDesktop, currentTheme);

        // Toggle functionality for mobile
        if (toggle) {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                toggleTheme();
            });
        }
        
        // Toggle functionality for desktop
        if (toggleDesktop) {
            toggleDesktop.addEventListener('click', function(e) {
                e.preventDefault();
                toggleTheme();
            });
        }
        
        function toggleTheme() {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            console.log('Switching from', currentTheme, 'to', newTheme);
            
            document.documentElement.setAttribute('data-theme', newTheme);
            document.body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            if (icon) updateDarkModeIcon(icon, newTheme);
            if (iconDesktop) updateDarkModeIcon(iconDesktop, newTheme);
        }
        
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
        const toggleDesktop = document.getElementById('language-toggle-desktop');
        const langCurrent = toggle?.querySelector('.lang-current');
        const langOther = toggle?.querySelector('.lang-other');
        const langCurrentDesktop = toggleDesktop?.querySelector('.lang-current');
        const langOtherDesktop = toggleDesktop?.querySelector('.lang-other');
        
        if (!toggle && !toggleDesktop) {
            console.log('Language toggle elements not found');
            return;
        }

        // Check for saved language preference or default to 'en'
        const currentLang = localStorage.getItem('language') || 'en';
        console.log('Current language:', currentLang);
        
        // Apply the saved language and update toggle display
        switchLanguage(currentLang);
        if (langCurrent && langOther) {
            updateLanguageToggleDisplay(currentLang, langCurrent, langOther);
        }
        if (langCurrentDesktop && langOtherDesktop) {
            updateLanguageToggleDisplay(currentLang, langCurrentDesktop, langOtherDesktop);
        }

        // Toggle functionality for mobile
        if (toggle) {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                toggleLanguage();
            });
        }
        
        // Toggle functionality for desktop
        if (toggleDesktop) {
            toggleDesktop.addEventListener('click', function(e) {
                e.preventDefault();
                toggleLanguage();
            });
        }
        
        function toggleLanguage() {
            const currentLang = localStorage.getItem('language') || 'en';
            const newLang = currentLang === 'en' ? 'ja' : 'en';
            
            console.log('Switching from', currentLang, 'to', newLang);
            
            switchLanguage(newLang);
            if (langCurrent && langOther) {
                updateLanguageToggleDisplay(newLang, langCurrent, langOther);
            }
            if (langCurrentDesktop && langOtherDesktop) {
                updateLanguageToggleDisplay(newLang, langCurrentDesktop, langOtherDesktop);
            }
            localStorage.setItem('language', newLang);
        }
        
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

    // Utility function for debouncing
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
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

        // Event listeners with debouncing for better performance
        const debouncedToggleScrollToTopButton = debounce(toggleScrollToTopButton, 100);
        window.addEventListener('scroll', debouncedToggleScrollToTopButton, { passive: true });
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