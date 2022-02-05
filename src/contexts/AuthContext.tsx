import { useState, createContext } from "react";
import { auth, firebase } from "@services/firebase";
import { AuthContextType, AuthProviderProps, User } from "@@types/authentication";

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account.");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const AuthConsumer = AuthContext.Consumer;

export { AuthContext, AuthConsumer };