<!-- markdownlint-disable -->

[@technobuddha/react-hooks](../INDEX.md) / useLocal

# Function: useLocal()

> **useLocal**\<`T`\>(`initialState`: `T` \| () => `T`): \[`T`, (`set`: `T` \| (`prev`: `T`) => `T`) => `void`\]

Defined in: use-local.ts:11

Similar to `React.useState`, returns a stateful value and a function to update it.  Unlike `React.useState`
updating the state will not cause a re-render.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `initialState` | `T` \| () => `T` | Initial state value, or a function that returns the initial state value. |

## Returns

\[`T`, (`set`: `T` \| (`prev`: `T`) => `T`) => `void`\]

[ stateValue, setterFunction ]
