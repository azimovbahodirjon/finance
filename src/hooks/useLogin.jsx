import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../app/features/userSlice";

export const useLogin = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const login = async (email, password) => {
    setIsPending(true);
    setError(null);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      dispatch(loginAction(res.user));
      return res.user;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsPending(false);
    }
  };

  return { login, isPending, error };
};
