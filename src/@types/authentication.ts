import type { ReactNode } from "react";

export type User = {
  id: string;
  name: string;
  avatar: string;
}

export type AuthProviderProps = {
  children: ReactNode;
};

export type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
};