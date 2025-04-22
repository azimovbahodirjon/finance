import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layout/Mainlayout";

import {
  Login,
  Register,
  Overview,
  Pots,
  Transactions,
  Budget,
  RecurringBills,
} from "./pages";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

import { useDispatch } from "react-redux";
import { login } from "./app/features/userSlice";

function App() {
  const { user } = useSelector((s) => s.user);
  const dispatch = useDispatch();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: user ? <MainLayout /> : <Navigate to="/login" />,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "pots",
          element: <Pots />,
        },
        {
          path: "transactions",
          element: <Transactions />,
        },
        {
          path: "budget",
          element: <Budget />,
        },
        {
          path: "recurringBills",
          element: <RecurringBills />,
        },
      ],
    },
    {
      path: "login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user));
    });
  });
  return <RouterProvider router={routes} />;
}

export default App;
