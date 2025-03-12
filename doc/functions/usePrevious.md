<!-- markdownlint-disable -->

[@technobuddha/react-hooks](../INDEX.md) / usePrevious

# Function: usePrevious()

> **usePrevious**\<`T`\>(`value`: `T` \| (`prevValue`: `undefined` \| `T`) => `T`): `undefined` \| `T`

Defined in: use-previous.ts:13

Return the 'previous' value of an expression.

On the first render, the value will be `undefined`.  On the second and subsequent renders,
the value returned will be the previous value.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `T` \| (`prevValue`: `undefined` \| `T`) => `T` | The 'current' value, or a function to return the current value |

## Returns

`undefined` \| `T`

The previous value.
