/**
 * Raqmi Labs — Core Vanilla JavaScript Engine
 * Zero runtime dependencies. Handles accessible navigation, dark mode, interactive tabs, and accordions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initHeaderScroll();
  initTabs();
  initAccordions();
});

/**
 * Dark Mode Theme Switcher with Persistence and System Preference Detection
 */
function initThemeToggle() {
  const themeToggles = document.querySelectorAll('[data-theme-toggle]');

  function updateToggleUI(isDark) {
    themeToggles.forEach(btn => {
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      
      const sunIcon = btn.querySelector('.theme-sun-icon');
      const moonIcon = btn.querySelector('.theme-moon-icon');
      if (sunIcon && moonIcon) {
        if (isDark) {
          sunIcon.classList.remove('hidden');
          moonIcon.classList.add('hidden');
        } else {
          sunIcon.classList.add('hidden');
          moonIcon.classList.remove('hidden');
        }
      }
    });
  }

  const isDarkInitial = document.documentElement.classList.contains('dark');
  updateToggleUI(isDarkInitial);

  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateToggleUI(isDark);
    });
  });
}

/**
 * Mobile Navigation Drawer with Focus Restoration and Escape Key Handling
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileNavBackdrop');
  const closeBtn = document.getElementById('mobileNavClose');

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.remove('translate-x-full', 'pointer-events-none', 'opacity-0');
    drawer.classList.add('translate-x-0', 'opacity-100');
    if (backdrop) {
      backdrop.classList.remove('pointer-events-none', 'opacity-0');
      backdrop.classList.add('opacity-100');
    }
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('overflow-hidden');

    if (closeBtn) {
      closeBtn.focus();
    } else {
      const firstLink = drawer.querySelector('a, button');
      if (firstLink) firstLink.focus();
    }
  }

  function closeDrawer() {
    drawer.classList.remove('translate-x-0', 'opacity-100');
    drawer.classList.add('translate-x-full', 'pointer-events-none', 'opacity-0');
    if (backdrop) {
      backdrop.classList.remove('opacity-100');
      backdrop.classList.add('pointer-events-none', 'opacity-0');
    }
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('overflow-hidden');

    // Accessibility: Restore focus back to hamburger toggle button
    toggleBtn.focus();
  }

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeDrawer);
  }

  // Close drawer on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      closeDrawer();
    }
  });

  // Close drawer when clicking a navigation link inside
  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });
}

/**
 * Sticky Header Scroll Elevation Effect
 */
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
      header.classList.add('shadow-sm', 'bg-white/95', 'dark:bg-brand-charcoal/95');
      header.classList.remove('bg-white/80', 'dark:bg-brand-charcoal/80');
    } else {
      header.classList.remove('shadow-sm', 'bg-white/95', 'dark:bg-brand-charcoal/95');
      header.classList.add('bg-white/80', 'dark:bg-brand-charcoal/80');
    }
  }, { passive: true });
}

/**
 * Interactive Tab Switcher
 */
function initTabs() {
  const tabContainers = document.querySelectorAll('[data-tabs]');

  const tabThemes = {
    'panel-erp': ['border-slate-900', 'text-slate-900', 'dark:border-slate-200', 'dark:text-white'],
    'panel-queue': ['border-brand-teal', 'text-brand-teal', 'dark:text-teal-400'],
    'panel-attendance': ['border-brand-blue', 'text-brand-blue', 'dark:text-blue-400'],
    'panel-happiness': ['border-brand-amber', 'text-brand-amber', 'dark:text-amber-400']
  };

  const allActiveClasses = [
    'active', 'bg-white', 'shadow-sm', 'dark:bg-slate-800',
    'border-slate-900', 'text-slate-900', 'dark:border-slate-200', 'dark:text-white',
    'border-brand-teal', 'text-brand-teal', 'dark:text-teal-400',
    'border-brand-blue', 'text-brand-blue', 'dark:text-blue-400',
    'border-brand-amber', 'text-brand-amber', 'dark:text-amber-400'
  ];

  tabContainers.forEach(container => {
    const tabs = container.querySelectorAll('[role="tab"]');
    const panels = container.querySelectorAll('[role="tabpanel"]');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('aria-controls');

        // Deactivate all tabs in container
        tabs.forEach(t => {
          t.setAttribute('aria-selected', 'false');
          t.classList.remove(...allActiveClasses);
          t.classList.add('text-slate-600', 'dark:text-slate-400', 'border-transparent');
        });

        // Activate selected tab with brand color
        tab.setAttribute('aria-selected', 'true');
        tab.classList.remove('text-slate-600', 'dark:text-slate-400', 'border-transparent');
        tab.classList.add('active', 'bg-white', 'shadow-sm', 'dark:bg-slate-800');
        
        const theme = tabThemes[targetId] || ['border-brand-blue', 'text-brand-blue', 'dark:text-blue-400'];
        tab.classList.add(...theme);

        // Toggle panels
        panels.forEach(panel => {
          if (panel.id === targetId) {
            panel.classList.remove('hidden');
          } else {
            panel.classList.add('hidden');
          }
        });
      });
    });
  });
}

/**
 * Accessible FAQ Accordion
 */
function initAccordions() {
  const accordions = document.querySelectorAll('[data-accordion]');

  accordions.forEach(accordion => {
    const triggers = accordion.querySelectorAll('[data-accordion-trigger]');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        const contentId = trigger.getAttribute('aria-controls');
        const content = document.getElementById(contentId);
        const icon = trigger.querySelector('[data-accordion-icon]');

        if (accordion.hasAttribute('data-single')) {
          triggers.forEach(otherTrigger => {
            if (otherTrigger !== trigger) {
              otherTrigger.setAttribute('aria-expanded', 'false');
              const otherId = otherTrigger.getAttribute('aria-controls');
              const otherContent = document.getElementById(otherId);
              if (otherContent) otherContent.classList.add('hidden');
              const otherIcon = otherTrigger.querySelector('[data-accordion-icon]');
              if (otherIcon) otherIcon.classList.remove('rotate-180');
            }
          });
        }

        trigger.setAttribute('aria-expanded', !isExpanded);
        if (content) {
          content.classList.toggle('hidden', isExpanded);
        }
        if (icon) {
          icon.classList.toggle('rotate-180', !isExpanded);
        }
      });
    });
  });
}
