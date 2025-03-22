import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  signInWithPopup 
} from "firebase/auth";
import { auth, googleProvider, db } from "./firebase"; 
import { doc, setDoc, collection, query, where, getDocs } from "firebase/firestore"; 

export const getUserEmailByUsername = async (username) => {
  try {
    console.log("🔍 Searching for username:", username); // ✅ Debugging Step 1

    const usersRef = collection(db, "users");
    const q = query(usersRef, where("username", "==", username));
    const querySnapshot = await getDocs(q);

    console.log("📊 Query Snapshot Size:", querySnapshot.size); // ✅ Debugging Step 2
    console.log("📜 Query Snapshot Docs:", querySnapshot.docs.map(doc => doc.data())); // ✅ Debugging Step 3

    if (!querySnapshot.empty) {
      const email = querySnapshot.docs[0].data().email;
      console.log("✅ Fetched Email:", email); // ✅ Debugging Step 4
      return email;
    } else {
      console.log("❌ No user found with this username.");
      return null;
    }
  } catch (error) {
    console.error("❌ Error fetching email by username:", error);
    return null;
  }
};




export const signUp = async (email, password, username) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      username: username,
      email: email,
      createdAt: new Date().toISOString(),
    });

    console.log("User Signed Up & Data Stored:", user);
    return user;
  } catch (error) {
    console.error("Signup Error:", error.message);
    throw error;
  }
};




export const logIn = async (emailOrUsername, password) => {
  try {
    let email = emailOrUsername;

    if (!emailOrUsername.includes("@")) {
      email = await getUserEmailByUsername(emailOrUsername);
      if (!email) {
        throw new Error("Username does not exist.");
      }
    }

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User Logged In:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Login Error:", error.message);
    throw error;
  }
};

// 🔹 Google Login + Firestore में Data Store
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      username: user.displayName || "Google User",
      email: user.email,
      createdAt: new Date().toISOString(),
    }, { merge: true });

    console.log("Google Logged In & Data Stored:", user);
    return user;
  } catch (error) {
    console.error("Google Sign-In Error:", error.message);
    throw error;
  }
};

// 🔹 Logout Function
export const logOut = async () => {
  try {
    await signOut(auth);
    console.log("User Logged Out");
  } catch (error) {
    console.error("Logout Error:", error.message);
  }
};  


