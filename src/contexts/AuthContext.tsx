import type { FC } from "react";
import { useState, useEffect, createContext } from "react";

import { auth, firebase } from "@services/firebase";

type User = {
  id: string;
  avatar: string;
  username: string;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
};

const AuthContext = createContext({} as AuthContextType);

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        setUser({
          id: uid,
          username: displayName ?? "Unknown",
          avatar: photoURL ?? "/assets/profile-default.svg",
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
};

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthContext, AuthConsumer };
