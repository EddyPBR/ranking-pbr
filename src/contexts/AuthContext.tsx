import { useState, useEffect, createContext } from "react";
import { auth, firebase } from "@services/firebase";
import { AuthContextType, AuthProviderProps, User } from "@@types/authentication";

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        setUser({
          id: uid,
          username: displayName ?? "Unknown",
          avatar: photoURL ?? "/assets/profile-default.svg",
        });
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const { user } = await auth.signInWithPopup(provider);

    if (user) {
      const { displayName, photoURL, uid } = user;

      setUser({
        id: uid,
        username: displayName ?? "Unknown",
        avatar: photoURL ?? "/assets/profile-default.svg",
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