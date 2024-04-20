import LoginPage from "@/pages/login-page";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "./paths";
import RegisterPage from "@/pages/register-page";
import { type RouteObject } from "react-router-dom";
import HomePage from "@/pages/home-page";
export const publicRoutes: RouteObject[] = [
  {
    path: LOGIN_ROUTE,
    element: <LoginPage />,
  },
  {
    path: REGISTER_ROUTE,
    element: <RegisterPage />,
  },
];
export const authRoutes: RouteObject[] = [
  {
    path: HOME_ROUTE,
    element: <HomePage />,
  },
];
