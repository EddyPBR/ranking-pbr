import { AiOutlineGoogle } from "react-icons/ai";

import { ErrorToast } from "@components/Toasters";
import { useAuth } from "@hooks/useAuth";

export function GoogleLoginButton() {
  const { signInWithGoogle } = useAuth();

  async function handleSignAndCreateRoom() {
    try {
      await signInWithGoogle();
    } catch (error: any) {
      ErrorToast({ title: "Failed to Login", message: error.message });
    }
  }

  return (
    <button
      onClick={handleSignAndCreateRoom}
      className="bg-red-500 text-white h-12 font-sans rounded hover:bg-red-600 transition-colors font-bold flex items-center px-8 mb-12"
    >
      <AiOutlineGoogle size={28} className="mr-6" />
      Create your room with google
    </button>
  );
}
