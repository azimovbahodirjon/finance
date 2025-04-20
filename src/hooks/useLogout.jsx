import { useState } from "react";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

export function useLogout() {
  const [isPending, setIsPending] = useState(false);

  const signout = async () => {
    setIsPending(true);
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { signout, isPending };
}

export default useLogout;
