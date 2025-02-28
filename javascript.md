## Pure vs Impure Functions

### **Pure Function**
A **pure function** is a function that:
- Always returns the same output for the same input.
- Has **no side effects** (does not modify external variables, global state, or interact with the outside world).

#### **Example of a Pure Function**
```js
function add(a, b) {
  return a + b; // Always returns the same output for the same input.
}
```

### **Impure Function**
A function is considered **impure** if:
- It relies on external variables or state that may change.
- It modifies global variables or mutable data.
- It performs side effects such as logging, network requests, or updating the DOM.

#### **Example of an Impure Function**
```js
let count = 0;

function increment() {
  count++; // Modifies an external variable (side effect).
  return count;
}
