import type { FC } from "react";
import { AiOutlineGoogle } from "react-icons/ai";

import { ErrorToast, SuccessToast } from "@components/Toasts";
import { useAuth } from "@hooks/useAuth";

const GoogleLoginButton: FC = () => {
  const { signInWithGoogle } = useAuth();

  async function handleSignWithGoogle() {
    try {
      await signInWithGoogle();
      SuccessToast({ message: "Welcome to Ranking PBR" });
    } catch (error: any) {
      ErrorToast({ message: error.message });
    }
  }

  return (
    <button
      onClick={handleSignWithGoogle}
      className="bg-red-500 text-white h-12 font-sans rounded hover:bg-red-600 transition-colors font-bold flex items-center px-8 mb-12"
    >
      <AiOutlineGoogle size={28} className="mr-6" />
      Create your room with google
    </button>
  );
};

export { GoogleLoginButton };
