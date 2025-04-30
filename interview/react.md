# React JS Interview Questions

This document provides a curated list of React JS interview questions to help you prepare for technical interviews. The questions cover core concepts, hooks, component communication, forms, data fetching, and advanced topics. Each question is designed to test both theoretical understanding and practical application.

## Table of Contents
1. [Basic Concepts](#basic-concepts)
2. [Functional Components and Hooks](#functional-components-and-hooks)
3. [Component Communication and Data Flow](#component-communication-and-data-flow)
4. [Forms and Inputs](#forms-and-inputs)
5. [Data Fetching and Rendering](#data-fetching-and-rendering)
6. [Class Components](#class-components)
7. [Advanced Topics](#advanced-topics)
8. [Additional Questions](#additional-questions)

## Basic Concepts

1. **What is React JS?**  
   Define React JS, its purpose as a JavaScript library, and its advantages for building user interfaces.

2. **What is JSX?**  
   Explain JSX, its syntax, how it differs from JavaScript, and how it is transpiled to JavaScript.

3. **What is the difference between state and props?**  
   Describe state (mutable, managed within a component) and props (immutable, passed from parent to child). Explain their ownership and management.

4. **What is the Virtual DOM?**  
   Explain the Virtual DOM, its role in optimizing updates, and how it improves performance.

5. **What is reconciliation and the diffing algorithm in React?**  
   Describe the reconciliation process and how the diffing algorithm compares Virtual DOM trees to update the real DOM efficiently.

6. **Why use `key` as `obj.id` instead of index in lists?**  
   Explain why unique `obj.id` keys maintain sequence and improve performance, while index-based keys can cause issues during reordering or updates.

7. **What is React.Fragment?**  
   Describe `React.Fragment`, its use for grouping elements without adding extra DOM nodes, and its shorthand syntax (`<></>`).

## Functional Components and Hooks

8. **How do you define and use `useState` in a functional component?**  
   Explain the `useState` hook, its syntax, and how it differs from normal variables (reactivity, triggers re-renders). Provide an example.

9. **What is `useEffect` and how does it work?**  
   Describe the `useEffect` hook, its purpose for side effects (e.g., data fetching, subscriptions), and its dependency array.

10. **What is `useEffect` cleanup?**  
    Explain the cleanup function in `useEffect`, its role in preventing memory leaks (e.g., clearing timers), and provide an example.

11. **How does the dependency array in `useEffect` work?**  
    Discuss how the dependency array controls when `useEffect` runs, common mistakes (e.g., missing dependencies), and best practices.

12. **How do you render the previous value in `useState`?**  
    Explain how to access the previous state using the functional update form of `setState` (e.g., `setCount(prev => prev + 1)`).

13. **What is `useRef`, and why doesn’t it trigger re-renders?**  
    Describe `useRef`, its use cases (e.g., accessing DOM elements, persisting values), and why it avoids re-rendering.

14. **What is `useReducer`, and how does it work?**  
    Explain `useReducer`, including the reducer function, initial state, state and action objects, and dispatching actions with type and payload.

15. **What are custom hooks?**  
    Define custom hooks, how to create them, and provide an example (e.g., a hook for fetching data).

## Component Communication and Data Flow

16. **How do you pass props in React?**  
    Explain how props are passed from parent to child components, including examples of passing strings, objects, and functions.

17. **What is props drilling, and how can it be avoided?**  
    Describe props drilling and solutions like `useContext`, Redux, or Zustand to manage state globally.

18. **How do you pass data from a child to a parent component?**  
    Explain how to pass data using callback functions passed as props, with an example.

19. **What is `useContext`, and how does it work?**  
    Describe the `useContext` hook, how to create a context, use a `Provider`, and consume context in components.

20. **How do you pass children in React components?**  
    Explain the `children` prop, how it is used to render nested content, and provide examples (e.g., wrapper components).

## Forms and Inputs

21. **What are controlled components in React forms?**  
    Explain controlled components, how form values are managed with state, and provide an example of a controlled input.

22. **How do you handle multiple inputs dynamically in a form?**  
    Describe how to manage multiple inputs using a single state object and dynamic updates (e.g., using `name` attributes).

23. **What are the different types of forms in React?**  
    Compare controlled and uncontrolled forms, their use cases, and when to use `useRef` for uncontrolled inputs.

## Data Fetching and Rendering

24. **How do you fetch data from a URL in React?**  
    Explain how to fetch data using `fetch` or `axios` in `useEffect`, including handling loading, success, and error states.

25. **How do you render multiple UI elements based on state?**  
    Describe conditional rendering based on state (e.g., loading spinners, error messages, or data lists).

## Class Components

26. **What are React class components?**  
    Explain class components, their syntax, and how they differ from functional components.

27. **What are the lifecycle methods in class-based components?**  
    Describe key lifecycle methods (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`, etc.) and their use cases.

## Advanced Topics

28. **What is prop-types in React?**  
    Explain the `prop-types` library, its role in type-checking props, and how to use it.

29. **What are nullish coalescing and optional chaining in JavaScript?**  
    Describe the nullish coalescing operator (`??`) and optional chaining (`?.`), and their use in React for safe property access.

## Additional Questions

30. **What are the benefits of using React Hooks over class components?**  
    Discuss advantages like simpler syntax, reusability, and avoiding complex lifecycle methods.

31. **How do you optimize performance in a React application?**  
    Explain techniques like `React.memo`, `useMemo`, `useCallback`, lazy loading, and code splitting.

32. **What is the role of `React.StrictMode`?**  
    Describe `React.StrictMode`, its purpose in identifying unsafe practices, and its behavior in development.

33. **How do you handle errors in React applications?**  
    Explain error boundaries, their implementation, and their role in catching rendering errors.

34. **What is the difference between `useMemo` and `useCallback`?**  
    Compare `useMemo` (memoizing values) and `useCallback` (memoizing functions), including their use cases.

35. **How does React handle event handling differently from vanilla JavaScript?**  
    Discuss React’s synthetic events, event delegation, and differences from native JavaScript events.

36. **What is server-side rendering (SSR) in React?**  
    Explain SSR, its benefits (e.g., SEO, faster initial load), and frameworks like Next.js.

37. **What is the significance of keys in React lists?**  
    Discuss the role of keys in helping React identify elements during reconciliation, beyond `obj.id` vs. index.

38. **How do you manage global state in a React application?**  
    Compare approaches like `useContext`, Redux, Zustand, and Recoil for global state management.

39. **What is the purpose of `useLayoutEffect`?**  
    Explain `useLayoutEffect`, its differences from `useEffect`, and when to use it (e.g., DOM measurements).

40. **What are React Portals?**  
    Describe React Portals, their use for rendering components outside the parent DOM hierarchy, and provide an example (e.g., modals).

---

This list is designed to cover a wide range of React JS topics, from beginner to advanced levels. Practice these questions to build confidence and demonstrate your expertise in React during interviews.
