<!-- markdownlint-disable -->

[@technobuddha/react-hooks](../INDEX.md) / useDerivedState

# Function: useDerivedState()

> **useDerivedState**\<`T`\>(`initialValue`: `T` \| (`prevValue`: `T`) => `T`, `deps`: readonly `unknown`[]): \[`T`, `Dispatch`\<`SetStateAction`\<`T`\>\>\]

Defined in: use-derived-state.ts:14

Similar to `React.useState`, returns a stateful value and a function to update it.  Whenever the `deps` change, the
value will be re-initialized from `initialValue`.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `initialValue` | `T` \| (`prevValue`: `T`) => `T` | - |
| `deps` | readonly `unknown`[] | Array of values that when changed will cause a re-initialization of the value |

## Returns

\[`T`, `Dispatch`\<`SetStateAction`\<`T`\>\>\]

[ stateValue, setterFunction ]
