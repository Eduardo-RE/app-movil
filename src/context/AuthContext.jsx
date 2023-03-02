import { useContext, createContext, useState } from "react";
import { signOut, sendPasswordResetEmail } from "firebase/auth";
import { auth, authG } from "../utils/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dbuser, setDbuser] = useState({});

  const logOut = () => {
    signOut(authG);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(authG, (currentUser) => {
  //     console.log("User", currentUser);
  //     setUser(currentUser);
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        setUser,
        setDbuser,
        logOut,
        user,
        forgotPassword,
        dbuser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
