import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, collection, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9w3y4VOAVDdiWweKjhe_vtmCrG6kJ5O0",
  authDomain: "deconest-e-commerce.firebaseapp.com",
  projectId: "deconest-e-commerce",
  storageBucket: "deconest-e-commerce.appspot.com", 
  messagingSenderId: "366150229417",
  appId: "1:366150229417:web:bb45a0894aa65c6896b8b8",
  measurementId: "G-GDQZ7RG1LD",
};

// 🔹 Firebase Initialize
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

// 🔹 Firestore में यूज़र डेटा सेव करने का फ़ंक्शन
export const saveUserData = async (user, username) => {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  await setDoc(userRef, {
    uid: user.uid,
    email: user.email,
    username: username || "", // अगर Username दिया गया है तो सेव करें
    createdAt: new Date(),
  }, { merge: true });
};

// 🔹 Username से Email प्राप्त करने का फ़ंक्शन
export const getUserEmailByUsername = async (username) => {
  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("username", "==", username));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data().email;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching email by username:", error);
    return null;
  }
};
export default app;
