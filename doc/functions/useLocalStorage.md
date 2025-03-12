<!-- markdownlint-disable -->

[@technobuddha/react-hooks](../INDEX.md) / useLocalStorage

# Function: useLocalStorage()

> **useLocalStorage**\<`T`\>(`key`: `string`, `initialState`: `T`): readonly \[`T`, (`newValue`: `T` \| (`oldValue`: `T`) => `T`) => `void`\]

Defined in: use-local-storage.ts:18

Similar to `React.useState`, returns a stateful value and a function to update it.  The state
value is also saved in `localStorage`.

When initializing, if the key exists in `localStorage` the stored value is used, otherwise
the `initialState` value is used.

NOTE: values stored in localStorage are serialized using JSON.stringify.  Some types of objects
will not serialize and deserialize correctly.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The keyname to use for storing the value in `localStorage` |
| `initialState` | `T` | Initial state value, or a function that returns the initial state value. |

## Returns

readonly \[`T`, (`newValue`: `T` \| (`oldValue`: `T`) => `T`) => `void`\]

[ stateValue, setterFunction ]
