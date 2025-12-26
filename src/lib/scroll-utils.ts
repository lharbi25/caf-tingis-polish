/**
 * Scroll Utility Functions
 * Reusable functions for smooth scrolling behavior
 */

/**
 * Scrolls to a section identified by a CSS selector
 * @param selector - CSS selector string (e.g., '#home', '#menu')
 * @param behavior - Scroll behavior ('smooth' | 'auto' | 'instant')
 */
export function scrollToSection(
  selector: string,
  behavior: ScrollBehavior = 'smooth'
): void {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior });
  }
}

/**
 * Scrolls to the top of the page
 * @param behavior - Scroll behavior ('smooth' | 'auto' | 'instant')
 */
export function scrollToTop(behavior: ScrollBehavior = 'smooth'): void {
  window.scrollTo({ top: 0, behavior });
}

/**
 * Checks if an element is in viewport
 * @param element - The HTML element to check
 * @returns true if element is visible in viewport
 */
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
