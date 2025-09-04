/**
 * Represents the dimensions of a scrollbar.
 * @group DOM
 * @category Measurement
 */
export type ScrollbarSize = {
  /** The width of the scrollbar in pixels. */
  scrollbarWidth: number;
  /** The height of the scrollbar in pixels. */
  scrollbarHeight: number;
};

/**
 * Represents the size of an element, including its width, height, and scrollbar dimensions.
 *
 * Extends the `ScrollbarSize` type with additional width and height properties.
 * @group DOM
 * @category Measurement
 */
export type Size = ScrollbarSize & {
  // The width of the element in pixels.
  width: number;
  // The height of the element in pixels.
  height: number;
};
