# React Context API with useReducer

## Introduction
The React Context API is a powerful tool for managing state across multiple components without prop drilling. When combined with `useReducer`, it provides a more scalable state management solution similar to Redux.

## What is React Context?
React Context allows you to pass data through the component tree without having to pass props manually at every level. It is useful when multiple components need access to shared state, such as themes, authentication, or global data.

## When to Use React Context
- When you need global state management across multiple components.
- When prop drilling becomes cumbersome.
- When managing application-wide themes, authentication, or user preferences.

## How to Use React Context with useReducer

### 1. Creating the Context and Reducer
We define a context (`AllTodoContext`) and a reducer to handle state updates.

```jsx
import React, { createContext, useReducer } from "react";

export let AllTodoContext = createContext();

function TodoContextReducer({ children }) {
  let initialState = [];

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_TASK":
        return [...state, action.payload];

      case "DELETE_TASK":
        return state.filter((item) => item.id !== action.payload);

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AllTodoContext.Provider value={{ state, dispatch }}>
      {children}
    </AllTodoContext.Provider>
  );
}

export default TodoContextReducer;
```

### 2. Using Context in a Component
To consume the context, we use `useContext` inside a child component.

```jsx
import React, { useContext } from "react";
import "./todo.css";
import { AllTodoContext } from "../context/TodoReducer";

function Todo2() {
  const { state: todo, dispatch } = useContext(AllTodoContext);

  return (
    <table>
      <thead>
        <tr className="table-head">
          <th>ID</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="table-data">
        {todo.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.task}</td>
            <td>
              <button onClick={() => dispatch({ type: "DELETE_TASK", payload: item.id })}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Todo2;
```

### 3. Providing the Context to the Application
Wrap the application inside the `TodoContextReducer` to make the state available globally.

```jsx
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TodoContextReducer from "./context/TodoReducer.jsx";

createRoot(document.getElementById("root")).render(
  <TodoContextReducer>
    <App />
  </TodoContextReducer>
);
```

## Benefits of Using Context with useReducer
- **Centralized state management**: Avoids prop drilling.
- **Predictable state updates**: `useReducer` ensures structured state management.
- **Scalability**: Works well for medium-sized applications where Redux might be overkill.

## Conclusion
React Context with `useReducer` is a great alternative for managing state without using external libraries like Redux. It provides a clean and scalable way to handle global state while keeping components modular and easy to manage.

---
Feel free to modify and expand this based on your project requirements! 🚀

