# React.memo Rendering Behavior and Example

## 🔍 Rendering Behavior Table

| # | Scenario                       | Condition                                                                 | With React.memo              | Without React.memo           | Explanation                                                                                                                                               |
|---|--------------------------------|---------------------------------------------------------------------------|------------------------------|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 | Initial Render                 | App mounts, Parent and Child render for the first time.                   | Parent renders<br>Child renders | Parent renders<br>Child renders | Both components render initially to set up the UI. `React.memo` has **no effect** on the first render.                                                    |
| 2 | Pure Props (No Change)         | Parent re-renders (e.g., updating `otherState`), `count` and `setCount` unchanged. | Parent renders<br>Child **does NOT** render | Parent renders<br>Child renders | With `React.memo`: Child skips re-rendering due to **shallow comparison**. Without: Child re-renders as parent re-renders.                               |
| 3 | Props Change (State-Derived)   | Click Parent button, `count` changes, passed as prop.                     | Parent renders<br>Child renders | Parent renders<br>Child renders | With/without `React.memo`: Child re-renders because `count` prop **changes**, triggering update.                                                          |
| 4 | Function Prop (setCount) Only  | Parent re-renders without changing `count`, only `setCount` passed again. | Parent renders<br>Child **does NOT** render | Parent renders<br>Child renders | With `React.memo`: `setCount` is **stable**, so no re-render. Without it: child re-renders as parent re-renders.                                         |
| 5 | Child’s Own State Changes      | Click Child button, updates local `countC` state.                         | Parent **does NOT** render<br>Child renders | Parent **does NOT** render<br>Child renders | State changes **inside Child** trigger re-render regardless of `React.memo`. Memoization doesn't prevent local state updates.                             |

---

## 📖 Definition

`React.memo` is a higher-order component in React that optimizes functional components by memoizing their output. It prevents unnecessary re-renders when the component’s props haven’t changed, based on a shallow comparison. This solves performance issues caused by re-rendering expensive or frequently updated components.

---

## 🛠️ Example

### Parent Component

```jsx
import React, { useState } from "react";
import Child from "./Child";

function Parent() {
    const [count, setCount] = useState(0);

    console.log("parent");

    return (
        <div>
            <h1>Parent {count}</h1>
            <button
                onClick={() => setCount((p) => p + 1)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                parent
            </button>
            <Child count={count} setCount={setCount} />
        </div>
    );
}

export default Parent;
```

---

### Child Component

```jsx
import React, { useState, memo } from "react";

const Child = memo(function Child({ count }) {
    const [countC, setCountC] = useState(0);

    console.log("child");

    return (
        <>
            <div>
                Child {countC}------{count}
            </div>
            <button
                onClick={() => setCountC(countC + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-600"
            >
                child
            </button>
        </>
    );
});

export default Child;
```
