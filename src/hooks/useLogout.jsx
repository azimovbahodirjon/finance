import { signOut } from "firebase/auth";
import { auth } from "../firebase/config"; // Firebase auth instance
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { logoutUser } from ".."; // Reduxdagi logout action

export const useLogout = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const logout = async () => {
    setIsPending(true);
    setError(null);
    try {
      await signOut(auth);
      dispatch(logoutUser());
      setSuccess(true);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
    setIsPending(false);
  };

  return { logout, isPending, error, success };
};
