
# 🗺️ Product API Map

This document outlines all the available API endpoints for the product system, along with request/response types, middleware configuration, and usage notes.

---

## 📮 Postman Request Types

### 1. **Binary**
- Used to send files (e.g., images, PDFs).
- Suitable when uploading a file in raw format.
- **Content-Type**: `multipart/form-data`

### 2. **Form-Data**
- Used to send form inputs (key-value pairs), including files and text.
- Supports mixed data: string + file.
- Automatically sets headers for you.

### 3. **x-www-form-urlencoded**
- Used to send URL-encoded key-value pairs (like a normal HTML form).
- Often used in simple login/register forms.

---

## 📥 Request Types in Express.js

| Type         | Usage Example                      | Description                                      |
|--------------|-------------------------------------|--------------------------------------------------|
| `req.body`   | `req.body.name`                    | Used to access data sent in the body (POST/PUT) |
| `req.query`  | `req.query.name`                   | Data sent in the URL after `?` (GET filters)    |
| `req.params` | `req.params.id`                    | Data embedded in the route `/products/:id`      |

---

## 📤 Response / Middleware Configurations

| Middleware                         | Description                                |
|-----------------------------------|--------------------------------------------|
| `express.json()`                  | Parses JSON bodies sent by the client      |
| `express.urlencoded({ extended: true })` | Parses URL-encoded data (like forms)       |
| `express.text({ type: 'text/html' })` | Parses incoming HTML/text content         |

---

## 🌐 API Endpoints

### ✅ Get All Products
```http
GET /api/v1/products
```
- Returns a list of all products.

---

### ✅ Get Single Product by ID
```http
GET /api/v1/products/:id
```
Example:
```
/api/v1/products/2
```
- Returns a specific product by its `id`.

---

### ✅ Search Product by Name
```http
GET /api/v1/products?name=Office Chair
```
- Searches products by full or partial name.

---

### ✅ Search Product by Price Range
```http
GET /api/v1/products?minPrice=30&maxPrice=500
```
- Filters products within a specific price range.

---

### ✅ Sort Products (Ascending by Name)
```http
GET /api/v1/products?sortBy=name&order=asc
```
- Sorts the result by name in ascending order.

---

### ✅ Sort Products (Descending by Price)
```http
GET /api/v1/products?sortBy=price&order=desc
```
- Sorts the result by price in descending order.

---

### ✅ Filter Products by Multiple Fields
```http
GET /api/v1/products?category=Electronics&brand=Sony
GET /api/v1/products?category=Electronics&brand=Sony&inStock=true
```
- Filters based on multiple query params.

---

### ✅ Filter Products by Price Greater Than
```http
GET /api/v1/products?price_gt=500
```
- Returns products where price is greater than 500.

---

## 🛠️ Backend Notes (Express.js)

### Sample Filtering Logic:
```js
app.get('/api/v1/products', (req, res) => {
  const { name, minPrice, maxPrice, brand, category, sortBy, order, inStock, price_gt } = req.query;
  let results = [...products];

  if (name) {
    results = results.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  }

  if (minPrice && maxPrice) {
    results = results.filter(p => p.price >= Number(minPrice) && p.price <= Number(maxPrice));
  }

  if (price_gt) {
    results = results.filter(p => p.price > Number(price_gt));
  }

  if (brand) {
    results = results.filter(p => p.brand === brand);
  }

  if (category) {
    results = results.filter(p => p.category === category);
  }

  if (inStock !== undefined) {
    results = results.filter(p => p.inStock === (inStock === "true"));
  }

  if (sortBy && order) {
    results.sort((a, b) => {
      if (order === 'asc') return a[sortBy] > b[sortBy] ? 1 : -1;
      else return a[sortBy] < b[sortBy] ? 1 : -1;
    });
  }

  res.json(results);
});
```

---

## 💡 Tip: Combine Filters for Complex Queries

```http
GET /api/v1/products?category=Clothing&brand=Levis&inStock=false&price_gte=1000&sortBy=price&order=desc
```

You can chain any number of query parameters and parse them in the backend for flexible filtering.
