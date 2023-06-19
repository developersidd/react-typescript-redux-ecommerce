import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initAuth = () => {
    initializeApp(firebaseConfig);
}
export default initAuth;