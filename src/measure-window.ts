import { scrollbarSize } from './scrollbar-size.ts';
import { type Size } from './size.ts';

/**
 * Measures the current window size and scrollbar size.
 *
 * @returns Properties: width, height, scrollbarWidth, scrollbarHeight.
 *
 * @example
 * ```typescript
 * const size = measureWindow();
 * // size: { width: number, height: number, scrollbarWidth: number, scrollbarHeight: number \}
 * ```
 * @group DOM
 * @category Analysis
 */
export function measureWindow(): Size {
  return { width: window.innerWidth, height: window.innerHeight, ...scrollbarSize() };
}
