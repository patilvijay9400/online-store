import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Cart } from "./components/Cart";
import { Home } from "./components/Home";
import { Pages } from "./components/Pages";
import { ProductModal } from "./components/ProductModal";
import { Products } from "./components/Products";
import { RootLayout } from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="products" element={<Products />}></Route>
      <Route path="pages" element={<Pages />}></Route>
      <Route path="blog" element={<Blog />}></Route>
      <Route path="addtocart" element={<ProductModal />}></Route>
      <Route path="cart" element={<Cart />}></Route>
    </Route>
  )
)

function App() {
  return (
    
    <RouterProvider router={router} />
  );
}

export default App
