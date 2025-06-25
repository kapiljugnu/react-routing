import { createRoutesFromElements, Route, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/RootLayout";

// const routerDefinition = createRoutesFromElements(<Route>
  // <Route path="/" element={<HomePage />} />
//   <Route path="/products" element={<ProductsPage />} />
// </Route>)

// const router = createBrowserRouter(routerDefinition);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:productId', element: <ProductDetails /> }
     ]
  }
])


function App() {
  return <RouterProvider router={router} />;
}

export default App;
