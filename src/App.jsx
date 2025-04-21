// src/App.jsx
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
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { login } from "./app/features/userSlice";

function App() {
  const { user } = useSelector((s) => s.user);
  const dispatch = useDispatch();
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch(login(user));
      setAuthReady(true);
    });

    return () => unsub();
  }, [dispatch]);

  if (!authReady) return <p>Loading...</p>;

  const routes = createBrowserRouter([
    {
      path: "/",
      element: user ? <MainLayout /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <Overview /> },
        { path: "pots", element: <Pots /> },
        { path: "transactions", element: <Transactions /> },
        { path: "budget", element: <Budget /> },
        { path: "recurringBills", element: <RecurringBills /> },
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

  return <RouterProvider router={routes} />;
}

export default App;
