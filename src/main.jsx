import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Login, { action as LoginAction } from "./pages/Login";

import Account from "./pages/Account";
import ErrorPage from "./components/ErrorPage";

import SignUpPage, { action as SignupAction } from "./pages/Signup.jsx";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
        action: SignupAction,
      },
      {
        path: "/login",
        element: <Login />,
        action: LoginAction,
      },
      {
        path: "/account",
        element: (
          <ProtectedRoute>
            <Account />,
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
