import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../layout/dashboard/AddProduct";
import Dashboard from "../layout/dashboard/Dashboard";
import ProductList from "../layout/dashboard/ProductList";
import Main from "../layout/main/Main";
import Cart from "../pages/cart/Cart";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Products from "../pages/products/Products";
import Register from "../pages/register/Register";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
        <Dashboard />
    ),
    children: [
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "manage-products",
        element: <ProductList />,
      }
    ],
  },
]);

export default routes;
