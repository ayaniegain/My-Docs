# JavaScript Promise Practice Problems

This repository contains a set of JavaScript problems focused on mastering promises. Solve these to enhance your understanding of asynchronous operations in JavaScript.

---

## Beginner Level

1. **Basic Promise Creation**  
   Write a promise that resolves with the string `"Hello, World!"` after 2 seconds. Use `.then()` to log the result.

2. **Promise Chaining**  
   Create a function `fetchData()` that returns a promise resolving to `"Data Fetched"`. Chain a `.then()` to log `"Processing Data"` and another `.then()` to log `"Data Processed"`.

3. **Error Handling**  
   Create a promise that rejects with an error message `"Something went wrong"`. Handle the error using `.catch()`.

4. **Using `Promise.all`**  
   Write a function that runs three promises simultaneously, each resolving with a different number after 1 second. Use `Promise.all` to log the array of results.

---

## Intermediate Level

5. **Simulate API Call**  
   Create a function `getUserData(id)` that returns a promise simulating an API call. Resolve with an object `{ id, name: "User" + id }` after 1 second. Call this function with multiple IDs using `Promise.all`.

6. **Promise Race**  
   Create two promises:  
   - One resolves after 3 seconds with `"First"`.  
   - Another resolves after 1 second with `"Second"`.  
   Use `Promise.race` to log the result of the fastest promise.

7. **Chained Promises with Conditions**  
   Write a function `isEven(num)` that checks if a number is even using a promise. If true, resolve with `"Even"`. If false, reject with `"Odd"`. Chain `.then()` and `.catch()` to log the result.

8. **Retry Logic**  
   Write a function `fetchWithRetry` that retries a promise-based operation up to 3 times if it fails. If it still fails after 3 attempts, reject with an error.

---

## Advanced Level

9. **Sequential Execution**  
   Write a function that runs an array of promises sequentially (not in parallel). For example, if the promises resolve with `[1, 2, 3]`, the results should be logged in sequence.

10. **Promise-based Timer**  
    Write a function `timer(ms)` that resolves after `ms` milliseconds. Use it to create a countdown from 5 to 0, logging each number every second.

11. **Custom `Promise.all` Implementation**  
    Create a function `customPromiseAll(promises)` that replicates the behavior of `Promise.all`.

12. **Dependent Promises**  
    Write two promises:  
    - The first fetches a user's data.  
    - The second fetches the user's posts but depends on the result of the first.  
    Chain the promises so they work in sequence.

13. **Async/Await with Promises**  
    Rewrite the `fetchData()` promise chaining example using `async/await`.

14. **Race Conditions**  
    Write a function that accepts two promises. Resolve with `"Success"` if either promise resolves within 2 seconds; otherwise, reject with `"Timeout"`.

15. **Throttled API Calls**  
    You have an array of 10 promises simulating API calls. Write a function to process only 2 promises at a time.

---

Happy coding! 🚀
