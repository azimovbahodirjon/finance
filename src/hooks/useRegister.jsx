// src/hooks/useRegister.jsx
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { login } from "../app/features/userSlice";
import { useDispatch } from "react-redux";

export const useRegister = () => {
  const dispatch = useDispatch();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const register = async (email, displayName, password) => {
    setIsPending(true);
    setError(null);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL: `https://api.dicebear.com/9.x/croodles/svg?seed=${displayName}`,
      });
      dispatch(login(auth.currentUser));
      return auth.currentUser;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsPending(false);
    }
  };

  return { register, isPending, error };
};
