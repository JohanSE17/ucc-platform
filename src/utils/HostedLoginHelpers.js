import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export function handleLogin(username, password) {
  return signInWithEmailAndPassword(auth, username, password)
    .then(() => window.location.replace("/research"))
    .catch((error) => Promise.reject(error));
}