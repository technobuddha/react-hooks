<!-- markdownlint-disable -->

[@technobuddha/react-hooks](../INDEX.md) / useWindowSize

# Function: useWindowSize()

> **useWindowSize**(): `ScrollbarSize` & \{ `height`: `number`; `width`: `number`; \} & \{ `count`: `number`; \}

Defined in: use-window-size.ts:13

Gets the current window size, including the dimensions of the scroll bars.

If the actual size of the window is unimportant, it also returns a count of how many times the window
has been resized since the first render.

## Returns

`ScrollbarSize` & \{ `height`: `number`; `width`: `number`; \} & \{ `count`: `number`; \}

[{ width, height, scrollbarWidth, scrollbarHeight, count }
