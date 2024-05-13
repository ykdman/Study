// 라우터를 정의하기위한 router 라이브러리 함수
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/Products";
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/products", element: <ProductPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
