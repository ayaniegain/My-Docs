---
title: Understanding `useEffect` Hook in React
---

# Understanding `useEffect` Hook in React

## What is `useEffect`?
`useEffect` is a React Hook that allows you to perform side effects in functional components. It serves a similar purpose as lifecycle methods in class components, such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

## Why Use `useEffect`?
Here are some key reasons why `useEffect` is useful:

1. **Managing Side Effects:** It is used to handle operations like fetching data, subscriptions, and manually changing the DOM.
2. **Replacing Lifecycle Methods:** It acts as a replacement for lifecycle methods in class components.
3. **Handling Component Mount and Unmount Effects:** You can run effects only when a component mounts and perform cleanup when it unmounts.
4. **Reactivity to State and Props:** It allows you to run effects whenever dependencies change.
5. **Avoiding Redundant Code:** Instead of using multiple lifecycle methods, `useEffect` allows you to write concise and structured code.

## How `useEffect` Works
`useEffect` takes two arguments:

```js
useEffect(callback, [dependencies])
```

- **callback** - A function that contains the side-effect logic.
- **dependencies** (optional) - An array of values that the effect depends on. The effect re-runs if any dependency changes.

### Different Ways to Use `useEffect`

| Scenario | Usage |
|----------|-------|
| Run on every render | `useEffect(() => { console.log("Runs every render"); });` |
| Run only on mount (like `componentDidMount`) | `useEffect(() => { console.log("Runs on mount"); }, []);` |
| Run when state/props change | `useEffect(() => { console.log("State changed"); }, [count]);` |
| Run on unmount (cleanup function) | `useEffect(() => { return () => console.log("Cleanup"); }, []);` |

## `useEffect` Example in a Functional Component

```jsx
import React, { useEffect, useState } from 'react';

export default function Home() {
    const [count, setCount] = useState(0);

    // Runs on every render
    useEffect(() => {
        console.log("Call every render");
    });

    // Runs only on mount
    useEffect(() => {
        console.log("Call after mount");
    }, []);

    // Runs on first render and when 'count' changes
    useEffect(() => {
        console.log(`Count changed to ${count}`);
    }, [count]);

    // Runs when component unmounts
    useEffect(() => {
        return () => {
            console.log("Call when component unmounts");
        };
    }, []);

    return (
        <div className='p-4 m-5'>
            <h1 onClick={() => setCount(c => c + 1)}>Home page</h1>
        </div>
    );
}
```

## Equivalent Class Component

The equivalent class component would use lifecycle methods:

```jsx
import React, { Component } from 'react';

export default class AppButton extends Component {
    state = {
        count: 0
    };

    // Runs only on mount
    componentDidMount() {
        console.log("Call after mount");
    }

    // Runs when the component updates
    componentDidUpdate() {
        console.log(`Count changed to ${this.state.count}`);
    }

    // Runs when component unmounts
    componentWillUnmount() {
        console.log("Call when component unmounts");
    }

    increment = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    };

    render() {
        return (
            <button type="button" onClick={this.increment} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                {this.props.caption} {this.state.count}
            </button>
        );
    }
}
```

## Summary

- `useEffect` is used in functional components to handle side effects.
- It can replace lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
- By passing dependencies, we can control when the effect runs.
- The cleanup function inside `useEffect` acts as `componentWillUnmount` in class components.

Using `useEffect` makes React functional components more powerful and cleaner by removing the need for class-based lifecycle methods.

