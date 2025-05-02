# JavaScript Coding Questions

## 1. Array-Based Questions

### Q1: Find the sum of all numbers in an array.
**Input:** `[1, 2, 3, 4, 5]`
**Output:** `15`

### Q2: Find the largest and smallest number in an array.
**Input:** `[10, 20, 5, 40, 30]`
**Output:** `Largest: 40, Smallest: 5`

### Q3: Reverse an array without using reverse().
**Input:** `[1, 2, 3, 4, 5]`
**Output:** `[5, 4, 3, 2, 1]`

### Q4: Remove duplicates from an array.
**Input:** `[1, 2, 2, 3, 4, 4, 5]`
**Output:** `[1, 2, 3, 4, 5]`

### Q5: Find the second largest number in an array.
**Input:** `[10, 20, 4, 45, 99]`
**Output:** `45`

### Q6: Check if all elements in an array are positive numbers.
**Input:** `[1, 2, 3, 4, 5]`
**Output:** `true`

### Q7: Find the missing number in an array of 1 to n.
**Input:** `[1, 2, 4, 5, 6]`
**Output:** `3`

### Q8: Flatten a nested array.
**Input:** `[1, [2, [3, 4], 5]]`
**Output:** `[1, 2, 3, 4, 5]`

### Q9: Find common elements between two arrays.
**Input:** `[1, 2, 3, 4]`, `[3, 4, 5, 6]`
**Output:** `[3, 4]`

### Q10: Write a function that returns elements of an array present in the first but not in the second.
**Input:** `[1, 2, 3, 4]`, `[3, 4, 5, 6]`
**Output:** `[1, 2]`

### Q11: Find the intersection of two arrays.
**Input:** `[1, 2, 3]`, `[2, 3, 4]`
**Output:** `[2, 3]`

### Q12: Count the occurrences of each element in an array.
**Input:** `[1, 2, 2, 3, 3, 3]`
**Output:** `{1: 1, 2: 2, 3: 3}`

### Q13: Find the longest string in an array using reduce().
**Input:** `['apple', 'banana', 'kiwi']`
**Output:** `'banana'`

### Q14: Implement a function to rotate an array k times.
### Q15: Convert an array of objects into a single object (key-value pairs).
### Q16: Find the union of two arrays.
### Q17: Sort an array without using sort().
### Q18: Shuffle elements of an array randomly.
### Q19: Write a function to find the most frequent element in an array.
### Q20: Write a function to find pairs of numbers in an array that sum to a given number.

## 2. String-Based Questions

### Q21: Reverse a string without using reverse().
**Input:** `'hello'`
**Output:** `'olleh'`

### Q22: Check if a string is a palindrome.
**Input:** `'racecar'`
**Output:** `true`

### Q23: Find the length of a string without using .length.
### Q24: Count the number of vowels and consonants in a string.
### Q25: Find the first non-repeating character in a string.
### Q26: Capitalize the first letter of each word in a string.
### Q27: Remove all duplicate characters from a string.
### Q28: Check if two strings are anagrams of each other.
### Q29: Find the longest word in a given string.
### Q30: Write a function that converts a given string into CamelCase.

## 3. Object-Based Questions

### Q31: Convert an object into an array.
**Input:** `{a: 1, b: 2, c: 3}`
**Output:** `[['a', 1], ['b', 2], ['c', 3]]`

### Q32: Merge two objects without overwriting existing properties.
### Q33: Write a function to deep clone an object.
### Q34: Find the key of an object with the highest value.
### Q35: Write a function to remove properties with null or undefined values from an object.
### Q36: Write a function that checks if two objects are deeply equal.
### Q37: Implement a function that counts occurrences of values in an object.
### Q38: Convert an array of objects into a single object with key-value pairs.
### Q39: Write a function that finds the property with the maximum value in an object.
### Q40: Write a function that joins the elements of an array into a single string, separated by a specific delimiter.

## 4. DOM-Based Questions

### Q41: Write a JS program to get the file extension of a filename.
**Input:** `'document.pdf'`
**Output:** `'pdf'`

### Q42: Change the text content of an HTML element dynamically.
### Q43: Add an event listener to a button that changes the background color of the page.
### Q44: Write a function to create and append an element dynamically.
### Q45: Implement a function that capitalizes the first letter of each word in an input field.
### Q46: Toggle the visibility of an element when clicking a button.
### Q47: Write a function that counts the number of elements with a specific class.
### Q48: Implement a function that highlights all occurrences of a word in a paragraph.
### Q49: Build a simple to-do list using JavaScript and DOM manipulation.
### Q50: Write a JavaScript function that changes the font size of an element on button click.

## **1. Array of Objects-Based Questions**

### **Q1: Sort an array of objects by a specific key (e.g., name or age).**  
**Input:**  
```js
[
  { name: 'John', age: 25 },
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 30 }
]
```
**Output:** _(Sorted by age)_  
```js
[
  { name: 'Alice', age: 22 },
  { name: 'John', age: 25 },
  { name: 'Bob', age: 30 }
]
```

---

### **Q2: Filter an array of objects based on a property value.**  
**Input:** _(Filter users with age > 23)_  
```js
[
  { name: 'John', age: 25 },
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 30 }
]
```
**Output:**  
```js
[
  { name: 'John', age: 25 },
  { name: 'Bob', age: 30 }
]
```

---

### **Q3: Write a function to find the object with the maximum value for a given key.**  
**Input:**  
```js
[
  { name: 'John', age: 25 },
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 30 }
]
```
**Output:**  
```js
{ name: 'Bob', age: 30 }
```

---

### **Q4: Group an array of objects by a property (e.g., group users by age).**  
**Input:**  
```js
[
  { name: 'John', age: 25 },
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 25 }
]
```
**Output:**  
```js
{
  22: [{ name: 'Alice', age: 22 }],
  25: [{ name: 'John', age: 25 }, { name: 'Bob', age: 25 }]
}
```

---

### **Q5: Create a function to update a specific key's value in all objects in an array.**  
**Input:** _(Increase everyone's age by 1)_  
```js
[
  { name: 'John', age: 25 },
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 30 }
]
```
**Output:**  
```js
[
  { name: 'John', age: 26 },
  { name: 'Alice', age: 23 },
  { name: 'Bob', age: 31 }
]
```

---

### **Q6: Find duplicates in an array of objects based on a specific key.**  
**Input:** _(Find duplicate names)_  
```js
[
  { name: 'John', age: 25 },
  { name: 'Alice', age: 22 },
  { name: 'John', age: 30 }
]
```
**Output:**  
```js
[{ name: 'John', age: 25 }, { name: 'John', age: 30 }]
```

---

### **Q7: Write a function to check if all objects in an array have a specific property.**  
**Input:** _(Check if all objects have the `age` property)_  
```js
[
  { name: 'John', age: 25 },
  { name: 'Alice' },
  { name: 'Bob', age: 30 }
]
```
**Output:** `false`

---

### **Q8: Remove objects from an array if they have duplicate values for a specific key.**  
**Input:** _(Remove duplicates by `name`)_  
```js
[
  { name: 'John', age: 25 },
  { name: 'Alice', age: 22 },
  { name: 'John', age: 30 }
]
```
**Output:**  
```js
[
  { name: 'Alice', age: 22 },
  { name: 'John', age: 30 }
]
```
_(Keeping the latest occurrence)_

---

### **Q9: Calculate the sum of a specific property in an array of objects.**  
**Input:** _(Sum of ages)_  
```js
[
  { name: 'John', age: 25 },
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 30 }
]
```
**Output:** `77`

---

### **Q10: Write a function to search for an object in an array based on multiple criteria.**  
**Input:** _(Find user with name = "Alice" and age = 22)_  
```js
[
  { name: 'John', age: 25 },
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 30 }
]
```
**Output:**  
```js
{ name: 'Alice', age: 22 }
```
