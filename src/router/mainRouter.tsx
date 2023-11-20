import { createBrowserRouter } from "react-router-dom";
import ProductScreen from "../pages/screen/ProductScreen";
import DetailProductScreen from "../pages/screen/DetailProductScreen";
import CheckoutScreen from "../pages/screen/CheckoutScreen";
import AddProduct from "../pages/screen/AddProduct";
import FirstLayout from "../components/common/FirstLayout";
import LandingScreen from "../pages/auth/LandingScreen";
import Layout from "../components/common/Layout";
import PrivateRouter from "./PrivateRouter";
import SigninScreen from "../pages/auth/SigninScreen";
import RegisterScreen from "../pages/auth/RegisterScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/auth",
    element: <FirstLayout />,
    children: [
      {
        index: true,
        element: <LandingScreen />,
      },
    ],
  },

  {
    path: "/",
    element: (
      // <PrivateRouter>
        <Layout />
      // </PrivateRouter>
    ),
    children: [
      {
        index: true,
        element: <ProductScreen />,
      },
      {
        path: "/detail/:productID",
        element: <DetailProductScreen />,
      },
      {
        path: "/check-out",
        element: <CheckoutScreen />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/sign-in",
        element: <SigninScreen />,
      },
      {
        path: "/register",
        element: <RegisterScreen />,
      },
    ],
  },
]);
