import { scrollbarSize } from './scrollbar-size.ts';
import { type Size } from './size.ts';

/**
 * Measures the size of an HTMLElement.
 *
 * @param element - The HTMLElement to measure.
 * @returns Properties: width, height, scrollbarWidth, scrollbarHeight.
 *
 * @example
 * ```typescript
 * const el = document.getElementById('myDiv');
 * if (el) {
 *   const size = measure(el);
 *   // size: { width: 1024, height: 768, scrollbarWidth: 16, scrollbarHeight: 16 }
 * }
 * ```
 */
export function measure(element: HTMLElement): Size {
  return { width: element.offsetWidth, height: element.offsetHeight, ...scrollbarSize() };
}
