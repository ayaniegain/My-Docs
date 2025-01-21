# REACT ROUTER 〽️

  [DOC](https://reactrouter.com/start/library/installation) React router docs
> Set router in App level 

```  
<BrowserRouter>
    <App />
</BrowserRouter>
```
  >Sample structure App 

  ```
  
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />}>
          <Route path="one" element={<One />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="cart/:id" element={<Cart />} />
        <Route path="summery" element={<Summery />}>
          <Route index element={<Featuresproducts />} />
          <Route path="product" element={<Products />} />
          <Route path="feat-product" element={<Featuresproducts />} />
        </Route>
        <Route path="*" element={<NoPageFound />} />
      </Routes>
      <Footer />
    </>
  );
}
  ```
  
### way to write Router path 
- `path="/"`
- `path="details"`
- ` path="cart/:id"`
- `path="*"`

### Way to write Nested Router  
>eg: http://localhost:5173/details/one

```
 <Route path="details" element={<Details />}>
    <Route path="one" element={<One />} />
</Route>
```
> access using : `<Outlet/>`

## Example of Quary param
#### direct quary 
>eg: http://localhost:5173/cart/2

#### multiple valued query.

> eg: http://localhost:5173/details/one?id=2&location="kol"



## how to access Direct Query 
- direct :  http://localhost:5173/cart/2
```
<Route path="cart/:id" element={<Cart />} />

function Cart() {
  const { id } = useParams(); // Get the id value from path params
  console.log(id); // Outputs "2"
  return <div>Cart ID: {id}</div>;
}

```
- multiple from url :  http://localhost:5173/details/one?id=2&location="kol"
```

function One() {

const location = useLocation();
 const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id"); // Get the id value from query params
  console.log(id); // Outputs "2"
  return <div>Cart ID: {id}</div>;
 
}
```

### Back page using Navigate

```
<button className='h-10 w-20 text-center bg-green-500' onClick={()=>navigate(-1)}>back</button>

```
### event navigate page 

```
let navigate=useNavigate()


  function handleClick() {
    navigate("summery",{replace:true})
  }
  return (
    <div className='h-screen'>Home
    <h2 className='h-10 w-20 text-center bg-yellow-200' onClick={handleClick}>button</h2>
    </div>
  )
}
```

### Link and NavLink 
> Navlink for style the Active button or style
```
   <ul className=" bg-red-400">
            <Link to={"product"}>Products</Link>
            <Link  to={"feat-product"}> Featured</Link>
     </ul>
```

>syle to Active
```
import { NavLink } from 'react-router-dom';



// CSS

.active {

  font-weight: bold;

  color: blue;

}



// JSX

<NavLink to="/home" activeClassName="active">Home</NavLink>

<NavLink to="/about" activeClassName="active">About</NavLink>

``