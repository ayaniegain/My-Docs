# 🚀 React Router Guide ⟿

**[React Router Documentation](https://reactrouter.com/start/library/installation)**  

### Setting Up Router at the App Level  
```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

---

## 📌 Sample Structure of `App.js`
```jsx
function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        
        {/* Nested Routes Example */}
        <Route path="details" element={<Details />}>
          <Route path="one" element={<One />} />
        </Route>
        
        {/* Dynamic Route */}
        <Route path="cart" element={<Cart />} />
        <Route path="cart/:id" element={<Cart />} />
        
        {/* Nested Routes with Index */}
        <Route path="summery" element={<Summery />}>
          <Route index element={<FeaturesProducts />} />
          <Route path="product" element={<Products />} />
          <Route path="feat-product" element={<FeaturesProducts />} />
        </Route>
        
        {/* Fallback Route */}
        <Route path="*" element={<NoPageFound />} />
      </Routes>
      <Footer />
    </>
  );
}
```

---

## 🌐 Writing Router Paths  
- **Root Path**: `path="/"`  
- **Static Path**: `path="details"`  
- **Dynamic Path with Parameter**: `path="cart/:id"`  
- **Wildcard (Fallback Route)**: `path="*"`

---

## 💭 Nested Routing  
> Example URL: `http://localhost:5173/details/one`

### Implementation:
```jsx
<Route path="details" element={<Details />}>
  <Route path="one" element={<One />} />
</Route>
```
### Access Nested Routes Using:  
```jsx
<Outlet />
```

---

## 🌟 Query Parameters Example  

### 1️⃣ Single Query Parameter  
> Example URL: `http://localhost:5173/cart/2`

**Implementation:**
```jsx
<Route path="cart/:id" element={<Cart />} />

function Cart() {
  const { id } = useParams(); // Accessing "id" from URL params
  return <div>Cart ID: {id}</div>;
}
```

### 2️⃣ Multiple Query Parameters  
> Example URL: `http://localhost:5173/details/one?id=2&location=kol`

**Implementation:**
```jsx
function One() {
  const location = useLocation(); // Access the current URL
  const queryParams = new URLSearchParams(location.search); // Parse query params

  const id = queryParams.get("id"); // Get value of "id"
  const locationName = queryParams.get("location"); // Get value of "location"

  return (
    <div>
      <p>Query ID: {id}</p>
      <p>Location: {locationName}</p>
    </div>
  );
}
```

---

## 🖙 Navigate Back  
```jsx
import { useNavigate } from "react-router-dom";

function Component() {
  const navigate = useNavigate();

  return (
    <button
      className="h-10 w-20 text-center bg-green-500"
      onClick={() => navigate(-1)}
    >
      Back
    </button>
  );
}
```

---

## 🔀 Event Navigation  
```jsx
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("summery", { replace: true });
  }

  return (
    <div className="h-screen">
      <h1>Home</h1>
      <h2
        className="h-10 w-20 text-center bg-yellow-200 cursor-pointer"
        onClick={handleClick}
      >
        Go to Summary
      </h2>
    </div>
  );
}
```

---

## 🔗 Link & NavLink  
### Link Example:  
```jsx
<ul className="bg-red-400">
  <li><Link to="product">Products</Link></li>
  <li><Link to="feat-product">Featured Products</Link></li>
</ul>
```

### NavLink for Active Styling:  
```jsx
import { NavLink } from "react-router-dom";

// JSX
<NavLink
  to="/home"
  className={({ isActive }) => (isActive ? "active" : "")}
>
  Home
</NavLink>

// CSS (optional for better styling)
.active {
  font-weight: bold;
  color: blue;
}
```

---

## 🔒 Protected Route Example  
### Implementation in `App.js`
```jsx
import { Route, Routes } from "react-router";
import "./App.css";
import Cart from "./page/Cart";
import Details from "./page/Details";
import Home from "./page/Home";
import Header from "./components/Header";
import ProtectedRoute from "./page/ProtectedRoute";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        
        {/* Protected Route */}
        <Route path="/cart" element={<ProtectedRoute />}>
          <Route index element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
```

### Creating `ProtectedRoute.js`
```jsx
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";

function ProtectedRoute() {
    const [isAllowed, setIsAllowed] = useState(false); // State to track access
    const navigate = useNavigate();

    function handleValidation(action) {
        if (action === "yes") {
            setIsAllowed(true);
        } else {
            setIsAllowed(false);
            navigate("/");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            {isAllowed ? (
                <Outlet />
            ) : (
                <>
                    <h2 className="mb-4 text-xl font-semibold">Check Validation</h2>
                    <div className="flex space-x-4">
                        <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600" onClick={() => handleValidation("yes")}>Yes</button>
                        <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600" onClick={() => handleValidation("no")}>No</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default ProtectedRoute;
```

